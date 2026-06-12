require('dotenv').config();

const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');
const Admin = require('../models/Admin');
const Review = require('../models/Review');
const Blog = require('../models/Blog');

async function seed() {
  await connectDB();

  const email = process.env.ADMIN_EMAIL || 'admin@example.com';
  const password = process.env.ADMIN_PASSWORD || 'admin12345';
  const hashedPassword = await bcrypt.hash(password, 10);

  await Admin.findOneAndUpdate(
    { email },
    { email, password: hashedPassword },
    { upsert: true, new: true }
  );

  const reviewCount = await Review.countDocuments();
  if (reviewCount === 0) {
    await Review.create([
      {
        customerName: 'Andrei Popescu',
        businessName: 'Renovări Galați Pro',
        rating: 5,
        quote: 'Site-ul arată mult mai profesionist, iar cererile sunt mai ușor de urmărit. Dashboard-ul ne ajută să nu mai pierdem lead-uri.',
        videoUrl: '',
        approved: true
      },
      {
        customerName: 'Maria Ionescu',
        businessName: 'Salon Urban Beauty',
        rating: 5,
        quote: 'Înainte primeam mesaje amestecate pe Facebook și WhatsApp. Acum totul intră organizat prin formular și pot vedea rapid cine trebuie contactat.',
        videoUrl: '',
        approved: true
      }
    ]);
  }

  const blogCount = await Blog.countDocuments();
  if (blogCount === 0) {
    await Blog.create([
      {
        title: 'De ce afacerile locale au nevoie de un site care colectează lead-uri',
        slug: 'de-ce-afacerile-locale-au-nevoie-de-un-site-care-colecteaza-lead-uri',
        excerpt: 'Un site simplu de prezentare nu mai este suficient. Afacerile locale au nevoie de formulare, încredere și structură clară.',
        content: `Un site web bun nu trebuie doar să arate bine. Trebuie să explice rapid ce oferă afacerea, să arate dovadă socială și să transforme vizitatorul într-o cerere.

Pentru o afacere locală, cele mai importante elemente sunt serviciile clare, locația, butoanele de contact, formularul de lead-uri, testimoniale reale și o structură mobilă rapidă.

Dacă vizitatorul nu înțelege în primele secunde ce faci și cum te contactează, site-ul pierde bani.`,
        coverImage: '',
        coverAlt: 'Site web pentru afaceri locale care colectează lead-uri',
        metaTitle: 'Site web pentru afaceri locale care colectează lead-uri',
        metaDescription: 'Află de ce un site local trebuie să colecteze lead-uri, să prezinte servicii clar și să creeze încredere.',
        keywords: 'site afaceri locale, colectare lead-uri, website Galați, creare site România',
        tags: ['site web', 'lead-uri', 'SEO local'],
        published: true
      },
      {
        title: 'Cum ajută testimoniale video o afacere locală să câștige încredere',
        slug: 'cum-ajuta-testimoniale-video-o-afacere-locala-sa-castige-incredere',
        excerpt: 'Testimonialele video sunt mai credibile decât textele perfecte și reduc neîncrederea clienților noi.',
        content: `Oamenii au încredere în alți oameni. De aceea, un testimonial video poate convinge mai repede decât o listă lungă de promisiuni.

Un review video arată fața, vocea și experiența reală a clientului. Pentru afaceri locale, acest lucru este valoros pentru că reduce riscul perceput.

Important este să controlezi ce apare pe site. De aceea, un sistem cu aprobare din dashboard este mai bun decât afișarea automată a tuturor mesajelor.`,
        coverImage: '',
        coverAlt: 'Testimoniale video pentru încredere în afaceri locale',
        metaTitle: 'Testimoniale video pentru afaceri locale',
        metaDescription: 'Vezi cum review-urile video cresc încrederea și ajută clienții să aleagă o afacere locală.',
        keywords: 'testimoniale video, review-uri clienți, afaceri locale, încredere online',
        tags: ['review-uri', 'video', 'încredere'],
        published: true
      }
    ]);
  }

  console.log('Seed complet.');
  console.log(`Admin email: ${email}`);
  console.log(`Admin password: ${password}`);
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
