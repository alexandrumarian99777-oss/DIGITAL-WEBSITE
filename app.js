require('dotenv').config();

const express = require('express');
const path = require('path');
const http = require('http');
const session = require('express-session');
const {
  MongoStore
} = require('connect-mongo');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const {
  Server
} = require('socket.io');

const connectDB = require('./config/db');
const ensureAdmin = require('./services/ensureAdmin');
const content = require('./data/content');

const publicRoutes = require('./routes/publicRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const Subscriber = require('./models/Subscriber');
// const startReviewReminderJob = require('./jobs/reviewReminderJob');

/*
|--------------------------------------------------------------------------
| Inițializare aplicație
|--------------------------------------------------------------------------
*/

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const isProduction = process.env.NODE_ENV === 'production';

const PORT = Number(process.env.PORT) || 8000;
const HOST = '0.0.0.0';

const BASE_URL = (
  process.env.BASE_URL || `http://localhost:${PORT}`
).replace(/\/+$/, '');

const MONGODB_URI =
  process.env.MONGODB_URI ||
  process.env.MONGO_URI ||
  '';

/*
|--------------------------------------------------------------------------
| Verificarea variabilelor de mediu
|--------------------------------------------------------------------------
*/

if (isProduction && !process.env.SESSION_SECRET) {
  throw new Error(
    'SESSION_SECRET trebuie configurat în variabilele de mediu.'
  );
}

if (isProduction && !MONGODB_URI) {
  throw new Error(
    'MONGODB_URI sau MONGO_URI trebuie configurat în variabilele de mediu.'
  );
}

if (
  isProduction &&
  (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD)
) {
  throw new Error(
    'ADMIN_EMAIL și ADMIN_PASSWORD trebuie configurate în variabilele de mediu.'
  );
}

/*
|--------------------------------------------------------------------------
| Configurare Express
|--------------------------------------------------------------------------
*/

app.disable('x-powered-by');

if (isProduction) {
  app.set('trust proxy', 1);
  app.set('view cache', true);
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*
|--------------------------------------------------------------------------
| Fișiere statice
|--------------------------------------------------------------------------
*/

app.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: isProduction ?
      1000 * 60 * 60 * 24 * 7 : 0,
    etag: true
  })
);

/*
|--------------------------------------------------------------------------
| Parsarea datelor
|--------------------------------------------------------------------------
*/

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());
app.use(methodOverride('_method'));

/*
|--------------------------------------------------------------------------
| Sesiuni
|--------------------------------------------------------------------------
*/
const sessionOptions = {
  name: 'amdigitalgrowth.sid',

  secret: process.env.SESSION_SECRET ||
    'development_secret_change_this',

  resave: false,
  saveUninitialized: false,

  cookie: {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 24
  }
};

if (MONGODB_URI) {
  sessionOptions.store = MongoStore.create({
    mongoUrl: MONGODB_URI,
    dbName: 'amdigitalgrowth',
    collectionName: 'sessions',
    ttl: 60 * 60 * 24,
    autoRemove: 'native',
    touchAfter: 60 * 60 * 24
  });
}

app.use(session(sessionOptions));
app.use(flash());

/*
|--------------------------------------------------------------------------
| Variabile disponibile în toate fișierele EJS
|--------------------------------------------------------------------------
*/

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');

  res.locals.currentPath = req.path;
  res.locals.isAdminLoggedIn = Boolean(
    req.session.adminId
  );

  res.locals.siteUrl = BASE_URL;
  res.locals.content = content;

  next();
});

/*
|--------------------------------------------------------------------------
| Socket.IO – utilizatori online
|--------------------------------------------------------------------------
*/

let onlineUsers = 0;

io.on('connection', (socket) => {
  onlineUsers += 1;

  io.emit('onlineUsers', onlineUsers);

  socket.on('disconnect', () => {
    onlineUsers = Math.max(
      onlineUsers - 1,
      0
    );

    io.emit('onlineUsers', onlineUsers);
  });
});

/*
|--------------------------------------------------------------------------
| Rută newsletter
|--------------------------------------------------------------------------
|
| Momentan validează formularul și afișează mesajul de succes.
| Nu salvează încă adresa în MongoDB.
|
*/
app.post('/newsletter', async (req, res) => {
  const redirectUrl = req.get('referer') || '/';

  try {
    const email = String(req.body.email || '')
      .trim()
      .toLowerCase();

    const consentAccepted =
      req.body.consent === 'accepted';

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      req.flash(
        'error',
        'Introdu o adresă de email.'
      );

      return res.redirect(redirectUrl);
    }

    if (!emailPattern.test(email)) {
      req.flash(
        'error',
        'Introdu o adresă de email validă.'
      );

      return res.redirect(redirectUrl);
    }

    if (!consentAccepted) {
      req.flash(
        'error',
        'Trebuie să accepți politica de confidențialitate.'
      );

      return res.redirect(redirectUrl);
    }

    const existingSubscriber =
      await Subscriber.findOne({
        email
      });

    if (existingSubscriber) {
      if (existingSubscriber.status === 'unsubscribed') {
        existingSubscriber.status = 'active';
        existingSubscriber.consentAccepted = true;
        existingSubscriber.source = 'footer-newsletter';

        await existingSubscriber.save();

        req.flash(
          'success',
          'Abonarea ta a fost reactivată.'
        );

        return res.redirect(redirectUrl);
      }

      req.flash(
        'success',
        'Această adresă este deja abonată la newsletter.'
      );

      return res.redirect(redirectUrl);
    }

    await Subscriber.create({
      email,
      consentAccepted: true,
      status: 'active',
      source: 'footer-newsletter'
    });

    req.flash(
      'success',
      'Te-ai abonat cu succes la newsletter.'
    );

    return res.redirect(redirectUrl);
  } catch (error) {
    console.error(
      'Newsletter subscription error:',
      error
    );

    if (error.code === 11000) {
      req.flash(
        'success',
        'Această adresă este deja abonată la newsletter.'
      );

      return res.redirect(redirectUrl);
    }

    req.flash(
      'error',
      'Abonarea nu a putut fi procesată. Încearcă din nou.'
    );

    return res.redirect(redirectUrl);
  }
});

/*
|--------------------------------------------------------------------------
| Rute
|--------------------------------------------------------------------------
*/

app.use('/', authRoutes);
app.use('/', publicRoutes);
app.use('/dashboard', adminRoutes);

/*
|--------------------------------------------------------------------------
| Pagina 404
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  const cleanPath =
    req.originalUrl.split('?')[0];

  return res.status(404).render('404', {
    title: 'Pagină negăsită | AM Digital Growth',

    description: 'Pagina cerută nu există.',

    canonical: `${BASE_URL}${cleanPath}`
  });
});

/*
|--------------------------------------------------------------------------
| Gestionarea erorilor
|--------------------------------------------------------------------------
*/

app.use((error, req, res, next) => {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  const cleanPath =
    req.originalUrl.split('?')[0];

  return res.status(500).render('500', {
    title: 'Eroare server | AM Digital Growth',

    description: 'A apărut o eroare pe server.',

    message: isProduction ?
      'A apărut o eroare. Încearcă din nou mai târziu.' : error.message,

    canonical: `${BASE_URL}${cleanPath}`
  });
});

/*
|--------------------------------------------------------------------------
| Pornirea aplicației
|--------------------------------------------------------------------------
*/

async function startServer() {
  try {
    await connectDB();

    await ensureAdmin();

    server.listen(PORT, HOST, () => {
      console.log(
        '----------------------------------------'
      );

      console.log(
        `Mediu: ${
          process.env.NODE_ENV ||
          'development'
        }`
      );

      console.log(`Site: ${BASE_URL}`);
      console.log(
        `Login admin: ${BASE_URL}/login`
      );
      console.log(`Port intern: ${PORT}`);
      console.log(
        'Administrator verificat.'
      );

      console.log(
        '----------------------------------------'
      );

      // startReviewReminderJob();
    });
  } catch (error) {
    console.error(
      `Nu pot porni serverul: ${error.message}`
    );

    process.exit(1);
  }
}

startServer();

/*
|--------------------------------------------------------------------------
| Oprire controlată
|--------------------------------------------------------------------------
*/

function shutdown(signal) {
  console.log(
    `${signal} primit. Serverul se oprește...`
  );

  server.close(() => {
    console.log('Server oprit.');
    process.exit(0);
  });

  setTimeout(() => {
    console.error(
      'Serverul nu s-a oprit la timp.'
    );

    process.exit(1);
  }, 10000).unref();
}

process.on('SIGTERM', () => {
  shutdown('SIGTERM');
});

process.on('SIGINT', () => {
  shutdown('SIGINT');
});

process.on(
  'unhandledRejection',
  (error) => {
    console.error(
      'Unhandled rejection:',
      error
    );
  }
);

process.on(
  'uncaughtException',
  (error) => {
    console.error(
      'Uncaught exception:',
      error
    );

    process.exit(1);
  }
);