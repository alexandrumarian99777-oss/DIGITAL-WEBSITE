  const express = require('express');
  const Lead = require('../models/Lead');
  const Review = require('../models/Review');
  const Blog = require('../models/Blog');
  const buildTimeSlots = require("../utils/timeSlots");
  const sendTelegramLead = require('../utils/sendTelegramLead');
  const multer = require('multer');
  const path = require('path');
  const fs = require('fs');

  const router = express.Router();
  const reviewUploadDir = path.join(__dirname, '..', 'public', 'uploads', 'reviews');

  if (!fs.existsSync(reviewUploadDir)) {
    fs.mkdirSync(reviewUploadDir, {
      recursive: true
    });
  }

  const reviewStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, reviewUploadDir);
    },
    filename: function (req, file, cb) {
      const cleanName = file.originalname
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9.-]/g, '');

      cb(null, Date.now() + '-' + cleanName);
    }
  });

  const uploadReviewVideo = multer({
    storage: reviewStorage,
    limits: {
      fileSize: 150 * 1024 * 1024
    },
    fileFilter: function (req, file, cb) {
      if (!file.mimetype.startsWith('video/')) {
        return cb(new Error('Poți încărca doar fișiere video.'));
      }

      cb(null, true);
    }
  });

  function deleteUploadedFile(file) {
    if (file && file.path) {
      fs.unlink(file.path, function () {});
    }
  }

  function pageMeta(req, res, title, description, path = req.path, extra = {}) {
    return {
      title,
      description,
      canonical: `${res.locals.siteUrl}${path}`,
      keywords: res.locals.content.seo.keywords,
      ...extra
    };
  }

  router.get('/', async (req, res, next) => {
    try {
      const [reviews, posts] = await Promise.all([
        Review.find({
          approved: true
        }).sort({
          createdAt: -1
        }).limit(6),
        Blog.find({
          published: true
        }).sort({
          createdAt: -1
        }).limit(3)
      ]);

      res.render('index', {
        ...pageMeta(req, res, res.locals.content.seo.homeTitle, res.locals.content.seo.homeDescription, '/'),
        reviews,
        posts
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/despre', (req, res) => {
    res.render('about', pageMeta(
      req, res,
      'Despre AM Digital Growth | Site-uri și sisteme pentru afaceri locale',
      'Află cum construim site-uri web, sisteme de booking, dashboard-uri și strategii simple pentru afaceri locale.',
      '/despre'
    ));
  });

  router.get('/contact', (req, res) => {
    res.render('contact', pageMeta(
      req, res,
      'Contact | Programează un demo gratuit',
      'Contactează AM Digital Growth pentru un demo gratuit al sistemului de site web, lead-uri, booking și review-uri video.',
      '/contact'
    ));
  });

  router.post('/leads', async (req, res, next) => {
    try {
      const lead = await Lead.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        businessName: req.body.businessName,
        businessType: req.body.businessType,
        website: req.body.website,
        packageInterest: req.body.packageInterest,
        message: req.body.message
      });

      await sendTelegramLead(lead);

      req.flash('success', 'Cererea a fost trimisă. Te contactăm cât mai curând.');
      res.redirect('/contact#formular');
    } catch (error) {
      next(error);
    }
  });
  router.get('/blog', async (req, res, next) => {
    try {
      const posts = await Blog.find({
        published: true
      }).sort({
        createdAt: -1
      });
      res.render('blog', {
        ...pageMeta(
          req, res,
          'Blog SEO pentru afaceri locale | AM Digital Growth',
          'Articole despre site-uri web, SEO local, booking online, lead-uri și review-uri pentru afaceri locale.',
          '/blog'
        ),
        posts
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/blogs', (req, res) => {
    res.redirect('/blog');
  });

  router.get('/blog/:slug', async (req, res, next) => {
    try {
      const post = await Blog.findOne({
        slug: req.params.slug,
        published: true
      });

      if (!post) {
        return res.status(404).render('404', {
          title: 'Articol negăsit | AM Digital Growth',
          description: 'Articolul cerut nu există.',
          canonical: `${res.locals.siteUrl}${req.originalUrl}`
        });
      }

      res.render('blog-detail', {
        title: post.metaTitle || `${post.title} | AM Digital Growth`,
        description: post.metaDescription || post.excerpt,
        keywords: post.keywords || res.locals.content.seo.keywords,
        canonical: `${res.locals.siteUrl}/blog/${post.slug}`,
        post
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/blogs/:slug', (req, res) => {
    res.redirect(`/blog/${req.params.slug}`);
  });

  router.get('/termeni-si-conditii', (req, res) => {
    res.render('legal', pageMeta(
      req, res,
      'Termeni și condiții | AM Digital Growth',
      'Termeni pentru abonamente lunare, site-uri web, mentenanță, domenii și servicii digitale.',
      '/termeni-si-conditii', {
        page: res.locals.content.legal.terms
      }
    ));
  });

  router.get('/politica-de-confidentialitate', (req, res) => {
    res.render('legal', pageMeta(
      req, res,
      'Politica de confidențialitate | AM Digital Growth',
      'Cum colectăm și folosim datele trimise prin formulare, programări și dashboard.',
      '/politica-de-confidentialitate', {
        page: res.locals.content.legal.privacy
      }
    ));
  });

  router.get('/cerere-confidentialitate', (req, res) => {
    res.render('legal', pageMeta(
      req, res,
      'Cerere de confidențialitate | AM Digital Growth',
      'Solicită acces, corectare sau ștergere pentru datele trimise prin site.',
      '/cerere-confidentialitate', {
        page: res.locals.content.legal.privacyRequest
      }
    ));
  });

  router.get('/setari-cookie', (req, res) => {
    res.render('legal', pageMeta(
      req, res,
      'Setări cookie | AM Digital Growth',
      'Informații despre cookie-uri necesare, analiză și preferințe de browser.',
      '/setari-cookie', {
        page: res.locals.content.legal.cookies
      }
    ));
  });
  router.get('/programare', (req, res) => {
    res.render('programare', {
      ...pageMeta(
        req,
        res,
        'Programare | AM Digital Growth',
        'Alege serviciul, data și ora pentru o consultație cu AM Digital Growth.',
        '/programare'
      ),
      timeSlots: buildTimeSlots(),
      success: req.query.success === 'true'
    });
  });

  router.post('/programare', async (req, res, next) => {
    try {
      const {
        name,
        email,
        phone,
        service,
        date,
        time
      } = req.body;

      console.log('Programare nouă:', {
        name,
        email,
        phone,
        service,
        date,
        time
      });

      req.flash('success', 'Programarea a fost trimisă. Te contactăm pentru confirmare.');
      res.redirect('/programare?success=true');
    } catch (error) {
      next(error);
    }
  });
  router.get('/programare', (req, res) => {
    res.render('programare', {
      ...pageMeta(
        req,
        res,
        'Programare | AM Digital Growth',
        'Alege serviciul, data și ora pentru o consultație cu AM Digital Growth.',
        '/programare'
      ),
      timeSlots: buildTimeSlots(),
      success: req.query.success === 'true'
    });
  });

  router.post('/programare', async (req, res, next) => {
    try {
      const {
        name,
        email,
        phone,
        service,
        date,
        time
      } = req.body;

      console.log('Programare nouă:', {
        name,
        email,
        phone,
        service,
        date,
        time
      });

      req.flash('success', 'Programarea a fost trimisă. Te contactăm pentru confirmare.');
      res.redirect('/programare?success=true');
    } catch (error) {
      next(error);
    }
  });
  router.post('/reviews', uploadReviewVideo.single('videoFile'), async (req, res, next) => {
    try {
      const rating = Number(req.body.rating);

      const consentDataProcessing = req.body.consentDataProcessing === 'yes';
      const consentPublicDisplay = req.body.consentPublicDisplay === 'yes';

      if (!req.body.customerName || !req.body.quote || !rating) {
        deleteUploadedFile(req.file);
        req.flash('error', 'Completează numele, rating-ul și mesajul review-ului.');
        return res.redirect('/#testimoniale');
      }

      if (rating < 1 || rating > 5) {
        deleteUploadedFile(req.file);
        req.flash('error', 'Rating-ul trebuie să fie între 1 și 5.');
        return res.redirect('/#testimoniale');
      }

      if (!consentDataProcessing) {
        deleteUploadedFile(req.file);
        req.flash('error', 'Trebuie să accepți prelucrarea datelor pentru a trimite review-ul.');
        return res.redirect('/#testimoniale');
      }

      if (!consentPublicDisplay) {
        deleteUploadedFile(req.file);
        req.flash('error', 'Trebuie să accepți afișarea publică a numelui și review-ului pentru ca testimonialul să poată fi publicat.');
        return res.redirect('/#testimoniale');
      }

      await Review.create({
        customerName: req.body.customerName,
        businessName: req.body.businessName,
        rating,
        quote: req.body.quote,
        videoUrl: req.file ? `/uploads/reviews/${req.file.filename}` : '',
        approved: false,
        consentDataProcessing,
        consentPublicDisplay,
        consentDate: new Date()
      });

      req.flash('success', 'Review-ul a fost trimis. Va apărea pe site după aprobare.');
      res.redirect('/#testimoniale');
    } catch (error) {
      deleteUploadedFile(req.file);
      next(error);
    }
  });
  module.exports = router;