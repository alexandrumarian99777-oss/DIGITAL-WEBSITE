require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const http = require('http');
const {
  Server
} = require('socket.io');

const connectDB = require('./config/db');
const content = require('./data/content');

const publicRoutes = require('./routes/publicRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const startReviewReminderJob = require('./jobs/reviewReminderJob');

const app = express();
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
const io = new Server(server);

let onlineUsers = 0;

io.on('connection', (socket) => {
  onlineUsers += 1;

  io.emit('onlineUsers', onlineUsers);

  socket.on('disconnect', () => {
    onlineUsers -= 1;

    if (onlineUsers < 0) {
      onlineUsers = 0;
    }

    io.emit('onlineUsers', onlineUsers);
  });
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0,
    etag: true
  })
);

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'development_secret_change_this',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentPath = req.path;
  res.locals.isAdminLoggedIn = Boolean(req.session.adminId);
  res.locals.siteUrl = process.env.BASE_URL || `http://localhost:${PORT}`;
  res.locals.content = content;
  next();
});

app.use('/', authRoutes);
app.use('/', publicRoutes);
app.use('/dashboard', adminRoutes);

app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Pagină negăsită | AM Digital Growth',
    description: 'Pagina cerută nu există.',
    canonical: `${res.locals.siteUrl}${req.originalUrl}`
  });
});

app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).render('500', {
    title: 'Eroare server | AM Digital Growth',
    description: 'A apărut o eroare pe server.',
    message: error.message,
    canonical: `${res.locals.siteUrl}${req.originalUrl}`
  });
});

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server pornit pe http://localhost:${PORT}`);
      console.log(`Login admin: http://localhost:${PORT}/login`);
      startReviewReminderJob();
    });
  })
  .catch((error) => {
    console.error(`Nu pot porni serverul: ${error.message}`);
    process.exit(1);
  });