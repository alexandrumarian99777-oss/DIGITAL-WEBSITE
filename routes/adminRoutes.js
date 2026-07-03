  const express = require('express');
  const path = require('path');
  const fs = require('fs');
  const multer = require('multer');
  const slugify = require('slugify');

  const Lead = require('../models/Lead');
  const Review = require('../models/Review');
  const Blog = require('../models/Blog');
  const Appointment = require('../models/Appointment');
  // const {
  //   sendAppointmentEmail
  // } = require('../services/emailService');

  const router = express.Router();

  const blogUploadDir = path.join(__dirname, '..', 'public', 'uploads', 'blogs');
  const reviewUploadDir = path.join(__dirname, '..', 'public', 'uploads', 'reviews');
  fs.mkdirSync(blogUploadDir, {
    recursive: true
  });
  fs.mkdirSync(reviewUploadDir, {
    recursive: true
  });

  function safeFileName(originalName, fallback) {
    const extension = path.extname(originalName).toLowerCase();
    const baseName = path
      .basename(originalName, extension)
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .slice(0, 60);

    return `${Date.now()}-${baseName || fallback}${extension}`;
  }

  const blogImageUpload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => cb(null, blogUploadDir),
      filename: (req, file, cb) => cb(null, safeFileName(file.originalname, 'blog-image'))
    }),
    limits: {
      fileSize: 8 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.startsWith('image/')) {
        return cb(new Error('Sunt permise doar fișiere imagine.'));
      }
      cb(null, true);
    }
  });

  const reviewVideoUpload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => cb(null, reviewUploadDir),
      filename: (req, file, cb) => cb(null, safeFileName(file.originalname, 'review-video'))
    }),
    limits: {
      fileSize: 150 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.startsWith('video/')) {
        return cb(new Error('Sunt permise doar fișiere video.'));
      }
      cb(null, true);
    }
  });

  function requireAdmin(req, res, next) {
    if (!req.session.adminId) {
      req.flash('error', 'Trebuie să te autentifici.');
      return res.redirect('/login');
    }
    next();
  }

  function isValidHalfHour(time) {
    return /^([01]\d|2[0-3]):(00|30)$/.test(time || '');
  }

  function makeSlug(input) {
    return slugify(input || '', {
      lower: true,
      strict: true,
      locale: 'ro'
    });
  }

  function parseTags(tags) {
    return String(tags || '')
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);
  }

  function getBlogImage(req, existingImage = '') {
    if (req.file) return `/uploads/blogs/${req.file.filename}`;
    if (req.body.coverImage) return req.body.coverImage;
    return existingImage;
  }

  function getReviewVideo(req, existingVideo = '') {
    if (req.file) return `/uploads/reviews/${req.file.filename}`;
    if (req.body.videoUrl) return req.body.videoUrl;
    return existingVideo;
  }

  router.use(requireAdmin);

  router.get('/', async (req, res, next) => {
    try {
      const [leads, reviews, posts, appointments] = await Promise.all([
        Lead.find().sort({
          createdAt: -1
        }),
        Review.find().sort({
          createdAt: -1
        }),
        Blog.find().sort({
          createdAt: -1
        }),
        Appointment.find().sort({
          date: 1,
          time: 1
        })
      ]);

      res.render('admin/dashboard', {
        title: 'Dashboard Admin | AM Digital Growth',
        description: 'Administrează lead-uri, review-uri video, bloguri și programări.',
        canonical: `${res.locals.siteUrl}/dashboard`,
        leads,
        reviews,
        posts,
        appointments
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/leads', async (req, res, next) => {
    try {
      await Lead.create(req.body);
      req.flash('success', 'Lead creat.');
      res.redirect('/dashboard#leaduri');
    } catch (error) {
      next(error);
    }
  });

  router.post('/leads/:id/update', async (req, res, next) => {
    try {
      await Lead.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true
      });
      req.flash('success', 'Lead actualizat.');
      res.redirect('/dashboard#leaduri');
    } catch (error) {
      next(error);
    }
  });

  router.post('/leads/:id/delete', async (req, res, next) => {
    try {
      await Lead.findByIdAndDelete(req.params.id);
      req.flash('success', 'Lead șters.');
      res.redirect('/dashboard#leaduri');
    } catch (error) {
      next(error);
    }
  });

  router.post('/reviews', reviewVideoUpload.single('videoFile'), async (req, res, next) => {
    try {
      await Review.create({
        customerName: req.body.customerName,
        businessName: req.body.businessName,
        rating: Number(req.body.rating) || 5,
        quote: req.body.quote,
        videoUrl: getReviewVideo(req),
        thumbnail: req.body.thumbnail,
        approved: Boolean(req.body.approved)
      });

      req.flash('success', 'Review video creat.');
      res.redirect('/dashboard#reviewuri');
    } catch (error) {
      next(error);
    }
  });

  router.post('/reviews/:id/update', reviewVideoUpload.single('videoFile'), async (req, res, next) => {
    try {
      const current = await Review.findById(req.params.id);
      if (!current) {
        req.flash('error', 'Review-ul nu există.');
        return res.redirect('/dashboard#reviewuri');
      }

      await Review.findByIdAndUpdate(req.params.id, {
        customerName: req.body.customerName,
        businessName: req.body.businessName,
        rating: Number(req.body.rating) || 5,
        quote: req.body.quote,
        videoUrl: getReviewVideo(req, current.videoUrl),
        thumbnail: req.body.thumbnail,
        approved: Boolean(req.body.approved)
      }, {
        runValidators: true
      });

      req.flash('success', 'Review actualizat.');
      res.redirect('/dashboard#reviewuri');
    } catch (error) {
      next(error);
    }
  });

  router.post('/reviews/:id/delete', async (req, res, next) => {
    try {
      await Review.findByIdAndDelete(req.params.id);
      req.flash('success', 'Review șters.');
      res.redirect('/dashboard#reviewuri');
    } catch (error) {
      next(error);
    }
  });

  router.get('/blogs/new', (req, res) => {
    res.render('admin/blog-form', {
      title: 'Blog nou | Dashboard',
      description: 'Creează un articol nou.',
      canonical: `${res.locals.siteUrl}/dashboard/blogs/new`,
      blog: null
    });
  });

  router.post('/blogs', blogImageUpload.single('coverImageFile'), async (req, res, next) => {
    try {
      const slug = makeSlug(req.body.slug || req.body.title);

      await Blog.create({
        title: req.body.title,
        slug,
        excerpt: req.body.excerpt,
        content: req.body.content,
        coverImage: getBlogImage(req),
        coverAlt: req.body.coverAlt || `Imagine articol: ${req.body.title}`,
        metaTitle: req.body.metaTitle,
        metaDescription: req.body.metaDescription,
        keywords: req.body.keywords,
        tags: parseTags(req.body.tags),
        published: Boolean(req.body.published)
      });

      req.flash('success', 'Articol creat.');
      res.redirect('/dashboard#bloguri');
    } catch (error) {
      next(error);
    }
  });

  router.get('/blogs/:id/edit', async (req, res, next) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        req.flash('error', 'Articolul nu există.');
        return res.redirect('/dashboard#bloguri');
      }

      res.render('admin/blog-form', {
        title: 'Editează blog | Dashboard',
        description: 'Editează articolul de blog.',
        canonical: `${res.locals.siteUrl}/dashboard/blogs/${blog._id}/edit`,
        blog
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/blogs/:id/update', blogImageUpload.single('coverImageFile'), async (req, res, next) => {
    try {
      const current = await Blog.findById(req.params.id);
      if (!current) {
        req.flash('error', 'Articolul nu există.');
        return res.redirect('/dashboard#bloguri');
      }

      await Blog.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        slug: makeSlug(req.body.slug || req.body.title),
        excerpt: req.body.excerpt,
        content: req.body.content,
        coverImage: getBlogImage(req, current.coverImage),
        coverAlt: req.body.coverAlt || `Imagine articol: ${req.body.title}`,
        metaTitle: req.body.metaTitle,
        metaDescription: req.body.metaDescription,
        keywords: req.body.keywords,
        tags: parseTags(req.body.tags),
        published: Boolean(req.body.published)
      }, {
        runValidators: true
      });

      req.flash('success', 'Articol actualizat.');
      res.redirect('/dashboard#bloguri');
    } catch (error) {
      next(error);
    }
  });

  router.post('/blogs/:id/delete', async (req, res, next) => {
    try {
      await Blog.findByIdAndDelete(req.params.id);
      req.flash('success', 'Articol șters.');
      res.redirect('/dashboard#bloguri');
    } catch (error) {
      next(error);
    }
  });

  router.post('/appointments', requireAdmin, async (req, res) => {
    try {
      const {
        customerName,
        customerEmail,
        customerPhone,
        businessName,
        service,
        status,
        date,
        time,
        notes
      } = req.body;

      await Appointment.create({
        customerName,
        customerEmail,
        customerPhone,
        businessName,
        service,
        status: status || 'programat',
        date,
        time,
        notes
      });

      req.flash('success', 'Programarea a fost creată și salvată în dashboard.');
      res.redirect('/dashboard#programari');
    } catch (error) {
      console.error(error);
      req.flash('error', 'Programarea nu a putut fi creată.');
      res.redirect('/dashboard#programari');
    }
  });
  router.post('/appointments/:id/update', async (req, res) => {
    try {
      const {
        customerName,
        customerEmail,
        customerPhone,
        businessName,
        service,
        status,
        date,
        time,
        notes
      } = req.body;

      await Appointment.findByIdAndUpdate(req.params.id, {
        customerName,
        customerEmail,
        customerPhone,
        businessName,
        service,
        status,
        date,
        time,
        notes
      });

      req.flash('success', 'Programarea a fost actualizată.');
      res.redirect('/dashboard#programari');
    } catch (error) {
      console.error(error);
      req.flash('error', 'Programarea nu a putut fi actualizată.');
      res.redirect('/dashboard#programari');
    }
  });
  router.post('/appointments/:id/delete', async (req, res, next) => {
    try {
      await Appointment.findByIdAndDelete(req.params.id);
      req.flash('success', 'Programare ștearsă.');
      res.redirect('/dashboard#programari');
    } catch (error) {
      next(error);
    }
  });
  router.post('/leads/:id/status', async (req, res, next) => {
    try {
      const lead = await Lead.findById(req.params.id);

      if (!lead) {
        req.flash('error', 'Lead-ul nu a fost găsit.');
        return res.redirect('/dashboard#leaduri');
      }

      lead.completionStatus = req.body.completionStatus;
      lead.callStatus = req.body.callStatus;
      lead.paymentStatus = req.body.paymentStatus;

      const isReadyForReviewReminder =
        lead.completionStatus === 'completed' &&
        lead.paymentStatus === 'paid' &&
        lead.email &&
        !lead.reviewReminderSent;

      if (isReadyForReviewReminder && !lead.reviewReminderDueAt) {
        const threeDaysFromNow = new Date();
        threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);

        lead.reviewReminderDueAt = threeDaysFromNow;
      }

      if (!isReadyForReviewReminder && !lead.reviewReminderSent) {
        lead.reviewReminderDueAt = undefined;
      }

      await lead.save();

      if (isReadyForReviewReminder) {
        req.flash('success', 'Statusul lead-ului a fost actualizat. Reminder-ul pentru review este programat peste 3 zile.');
      } else {
        req.flash('success', 'Statusul lead-ului a fost actualizat.');
      }

      res.redirect('/dashboard#leaduri');
    } catch (error) {
      next(error);
    }
  });
  module.exports = router;