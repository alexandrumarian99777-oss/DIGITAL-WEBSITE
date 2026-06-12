# AM Digital Growth - Romanian Website System

Site românesc pentru vânzare de website-uri lunare, cu dashboard admin, lead-uri, review-uri video, blog SEO, programări și email.

## Include

- Homepage de conversie în limba română
- Secțiune testimoniale video
- Despre noi
- Prezentarea sistemului
- Ce rezolvăm / ce facem
- Pachete lunare
- Contact page
- About page
- Blog page
- Blog detail pages
- Legal pages: termeni, privacy, privacy request, cookie settings
- Logo SVG custom
- SEO meta title, description, keywords, canonical, LocalBusiness schema
- Admin login `/login`
- Dashboard `/dashboard`
- CRUD lead-uri
- CRUD review-uri video cu upload video
- CRUD bloguri cu upload imagine
- CRUD programări
- Email către client când creezi programare
- Validare programări doar pe minute `00` sau `30`
- Protecție dublare programare pe aceeași dată/oră

## Instalare

```bash
npm install
copy .env.example .env
npm run seed
npm run dev
```

Pe Mac/Linux:

```bash
cp .env.example .env
```

## Linkuri

```txt
http://localhost:8000
http://localhost:8000/login
```

## Login implicit

```txt
Email: admin@example.com
Password: admin12345
```

## MongoDB

Dacă nu ai MongoDB local, pune MongoDB Atlas în `.env`:

```env
MONGO_URI=mongodb+srv://USER:PAROLA@CLUSTER.mongodb.net/web_growth_agency_ro_v2?retryWrites=true&w=majority
```

## Email

Dacă SMTP este gol, programarea se creează și emailul apare în terminal ca preview.

Pentru email real, completează:

```env
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
SMTP_FROM="AM Digital <no-reply@example.com>"
```

## Uploaduri

Blog images:

```txt
public/uploads/blogs
```

Review videos:

```txt
public/uploads/reviews
```

Nu urca `.env` pe GitHub.
