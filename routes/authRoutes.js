const express = require('express');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

const router = express.Router();

router.get('/login', (req, res) => {
  if (req.session.adminId) {
    return res.redirect('/dashboard');
  }

  res.render('login', {
    title: 'Login Admin | AM Digital Growth',
    description: 'Autentificare admin pentru gestionarea lead-urilor, review-urilor, blogului și programărilor.',
    canonical: `${res.locals.siteUrl}/login`
  });
});

router.post('/login', async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body;
    const admin = await Admin.findOne({
      email: String(email || '').toLowerCase().trim()
    });

    if (!admin) {
      req.flash('error', 'Email sau parolă greșită.');
      return res.redirect('/login');
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      req.flash('error', 'Email sau parolă greșită.');
      return res.redirect('/login');
    }

    req.session.adminId = admin._id.toString();
    req.flash('success', 'Te-ai autentificat cu succes.');
    return res.redirect('/dashboard');
  } catch (error) {
    next(error);
  }
});
router.post('/register', async (req, res, next) => {
  try {
    console.log('REGISTER ROUTE HIT:', req.body);

    const name = String(req.body.name || '').trim();
    const email = String(req.body.email || '').toLowerCase().trim();
    const password = String(req.body.password || '');
    const confirmPassword = String(req.body.confirmPassword || '');
    const registerCode = String(req.body.registerCode || '').trim();

    const adminCount = await Admin.countDocuments();

    if (!name || !email || !password || !confirmPassword) {
      req.flash('error', 'Completează toate câmpurile pentru înregistrare.');
      return res.redirect('/login');
    }

    if (password.length < 6) {
      req.flash('error', 'Parola trebuie să aibă minimum 6 caractere.');
      return res.redirect('/login');
    }

    if (password !== confirmPassword) {
      req.flash('error', 'Parolele nu se potrivesc.');
      return res.redirect('/login');
    }

    if (adminCount > 0) {
      if (!process.env.ADMIN_REGISTER_CODE) {
        req.flash('error', 'Lipsește ADMIN_REGISTER_CODE în .env.');
        return res.redirect('/login');
      }

      if (registerCode !== process.env.ADMIN_REGISTER_CODE) {
        req.flash('error', 'Codul de înregistrare este greșit.');
        return res.redirect('/login');
      }
    }

    if (adminCount === 0 && process.env.ADMIN_REGISTER_CODE) {
      if (registerCode !== process.env.ADMIN_REGISTER_CODE) {
        req.flash('error', 'Codul de înregistrare este greșit.');
        return res.redirect('/login');
      }
    }

    const existingAdmin = await Admin.findOne({
      email
    });

    if (existingAdmin) {
      req.flash('error', 'Există deja un admin cu acest email.');
      return res.redirect('/login');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await Admin.create({
      name,
      email,
      password: hashedPassword
    });

    req.flash('success', 'Contul admin a fost creat. Te poți autentifica acum.');
    return res.redirect('/login');
  } catch (error) {
    next(error);
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

module.exports = router;