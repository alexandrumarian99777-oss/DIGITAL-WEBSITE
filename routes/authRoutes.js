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
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: String(email || '').toLowerCase().trim() });

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

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

module.exports = router;
