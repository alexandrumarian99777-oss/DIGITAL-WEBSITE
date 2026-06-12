const content = {
  business: {
    name: 'AM Digital Growth',
    shortName: '',
    email: 'alexandru.marian99777@gmail.com',
    phone: '+40 752 679 312',
    whatsapp: 'https://wa.me/40752679312',
    address: 'Galați, România',
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/'
  },
  seo: {
    homeTitle: 'Site-uri Web și Sisteme de Booking pentru Afaceri Locale | AM Digital Growth',
    homeDescription: 'Construim site-uri web, formulare de lead-uri, sisteme de booking, testimoniale video și dashboard-uri pentru afaceri locale din România.',
    keywords: 'site web Galați, creare site România, sistem booking, site prezentare, website pentru afaceri locale, dashboard lead-uri, testimoniale video, marketing local'
  },
  nav: [{
      label: 'Acasă',
      href: '/'
    },
    {
      label: 'Despre',
      href: '/despre'
    },
    {
      label: 'Pachete',
      href: '/#pachete'
    },
    {
      label: 'Blog',
      href: '/blog'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ],
  hero: {
    eyebrow: 'Site-uri care aduc cereri, nu doar arată bine',
    title: 'Construim site-uri și sisteme de booking pentru afaceri locale care vor mai mulți clienți.',
    text: 'Îți transformăm prezența online într-un sistem simplu: pagini clare, cereri de ofertă, testimoniale video, blog SEO și dashboard privat unde vezi lead-uri, review-uri și programări.',
    primary: 'Programează un demo gratuit',
    secondary: 'Vezi pachetele'
  },
  trustStats: [{
      value: '10-14 zile',
      label: 'până la lansare'
    },

    {
      value: '6 luni',
      label: 'abonament minim'
    },
    {
      value: '0€',
      label: 'taxă inițială de setup'
    }
  ],
  fixes: [{
      title: 'Site funcțional, nu broșură moartă',
      text: 'Construim pagini care explică rapid ce vinzi, colectează cereri și direcționează clienții către telefon, WhatsApp sau formularul potrivit.'
    },
    {
      title: 'Afacerea ta devine ușor de găsit',
      text: 'Structurăm paginile cu titluri, descrieri, servicii și locație, astfel încât Google să înțeleagă mai clar ce faci și unde lucrezi.'
    },
    {
      title: 'Arăți review-urile care vând',
      text: 'Adăugăm testimoniale video aprobate din dashboard. Nu mai depinzi de promisiunea clientului că „o să lase un review când are timp”.'
    },
    {
      title: 'Experiență mobilă serioasă',
      text: 'Majoritatea oamenilor intră de pe telefon. Site-ul este gândit să se încarce rapid, să fie lizibil și să ducă utilizatorul spre acțiune.'
    },
    {
      title: 'Pagini pregătite pentru căutări locale',
      text: 'Folosim structură SEO locală: servicii clare, orașe, meta tag-uri, texte descriptive, linkuri interne și conținut util pentru potențiali clienți.'
    },
    {
      title: 'Vanzarile nu mai rămân pierdute',
      text: 'Cereri, review-uri, bloguri și programări se administrează dintr-un dashboard privat, fără să cauți prin mesaje, emailuri și notițe.'
    }
  ],
  system: [{
      title: 'Funnel de review-uri video',
      text: 'Clienții mulțumiți pot trimite testimoniale video, iar tu le aprobi înainte să apară pe site. Simplu, controlat și mult mai credibil decât textul generic.'
    },
    {
      title: 'Reminder mental: cere review-ul corect',
      text: 'Îți oferim structură clară pentru a cere review-uri după livrare. Nu te bazezi pe „sigur las eu un review”, pentru că oamenii uită.'
    },
    {
      title: 'Lead-uri într-un singur loc',
      text: 'Formularele trimit cererile în dashboard. Poți vedea cine a completat, ce dorește, ce status are și ce trebuie făcut mai departe.'
    },
    {
      title: 'Booking cu sloturi curate',
      text: 'Programările create din dashboard acceptă ore de tip 10:00, 10:30, 11:00, 11:30. Nu permitem ore haotice precum 10:17 sau 13:29.'
    }
  ],
  process: [{
      step: '01',
      title: 'Fa o rezervare',
      text: 'Discutăm 15 minute despre afacere, servicii, problemele actuale și ce sistem are sens pentru tine.'
    },
    {
      step: '02',
      title: 'Construim site-ul în 10-14 zile',
      text: 'Pregătim structura, textele, paginile, formularul de contact, blogul, dashboard-ul și secțiunile care cresc încrederea.'
    },
    {
      step: '03',
      title: 'Lansarea',
      text: 'Verificăm împreună site-ul, formularele, dashboard-ul și pașii de administrare. Apoi îl publicăm.'
    }
  ],
  packages: [{
      name: 'Starter Website',
      price: '€99/lună',
      tag: 'Prezență online curată',
      bestFor: 'Afaceri mici care au nevoie de un site profesional, clar și rapid.',
      pages: 'Până la 3 pagini: Acasă, Servicii, Contact.',
      included: [
        'Design responsive pentru mobil',
        'Formular de contact',
        'Buton WhatsApp și click-to-call',
        'Google Maps embed',
        'SEO de bază și meta tag-uri',
        'Administrare hosting',
        '1 actualizare mică pe lună'
      ],
      notIncluded: [
        'Sistem de booking',
        'Plăți online',
        'Dashboard admin',
        'Google Ads',
        'Schimbări nelimitate'
      ]
    },
    {
      name: 'Booking Website',
      price: '€169/lună',
      tag: 'Cel mai bun pentru vanzari',
      featured: true,
      bestFor: 'Afaceri care vor cereri, programări sau oferte direct din site.',
      pages: 'Până la 5-7 pagini: Acasă, Servicii, Booking/Cerere Ofertă, Testimoniale, Contact.',
      included: [
        'Tot ce include Starter',
        'Formular booking / cerere ofertă',
        'Selectare serviciu și dată/oră',
        'Login admin și dashboard privat',
        'Gestionare clienti și programări',
        'Testimoniale video cu aprobare',
        '2 actualizări mici pe lună'
      ],
      notIncluded: [
        'Plăți cu cardul',
        'Stripe setup',
        'Automatizări SMS',
        'Campanie SEO avansată',
        'Redesign complet'
      ]
    },
    {
      name: 'Growth System',
      price: '€249/lună',
      tag: 'Sistem complet de conversie',
      bestFor: 'Afaceri care vor site, booking, plăți, review-uri și suport prioritar.',
      pages: 'Până la 7-10   pagini: Acasă, Servicii, 2 pagini individuale de servicii, Booking, Testimoniale, Contact.',
      included: [
        'Tot ce include Booking Website',
        'Stripe pentru avansuri/plăți',
        'Pagini succes/anulare plată',
        'Structură SEO locală mai puternică',
        'Blog și conținut administrabil',
        'Verificări backup și performanță',
        '4 actualizări mici pe lună'
      ],
      notIncluded: [
        'Administrare reclame plătite',
        'Fotografie profesională',
        'Branding complet',
        'Pagini nelimitate',
        'CRM custom complex',
        'Automatizari SMS'
      ]
    }
  ],
  contractNote: 'Fără taxă de setup. Contract minim 6 luni. Prima lună se plătește înainte de începerea lucrului. După 6 luni, se poate continua lunar. Costul domeniului se plătește separat de client. Hostingul, mentenanța, actualizările mici și suportul sunt incluse. Schimbările mari, funcțiile noi, reclamele, redesignul complet, paginile extra și SEO avansat se taxează separat.',
  footerProducts: ['Site de prezentare', 'Website cu booking', 'Dashboard lead-uri', 'Review-uri video', 'Blog SEO', 'Integrare Stripe'],
  legal: {
    terms: {
      title: 'Termeni și condiții',
      description: 'Acești termeni explică modul în care lucrăm, ce include abonamentul lunar și ce responsabilități are clientul.',
      sections: [
        'Serviciile sunt livrate pe baza pachetului ales și a informațiilor furnizate de client. Paginile, funcționalitățile și actualizările sunt limitate la descrierea pachetului.',
        'Nu există taxă inițială de setup, dar există un acord minim de 6 luni. Prima lună se achită înainte de începerea lucrului.',
        'Costul domeniului este separat și se plătește de client. Domeniul trebuie să fie deținut de client sau achitat în avans dacă este cumpărat prin furnizor.',
        'Monthly fee include hosting management, mentenanță, verificări de bază, suport și actualizări mici conform pachetului. Schimbările mari se cotează separat.',
        'Dacă plata întârzie peste 7 zile, suportul poate fi suspendat. Dacă întârzierea depășește 30 de zile, serviciile de hosting/mentenanță pot fi suspendate.'
      ]
    },
    privacy: {
      title: 'Politica de confidențialitate',
      description: 'Această pagină explică ce date colectăm prin formulare, programări și dashboard.',
      sections: [
        'Colectăm nume, email, telefon, mesaj, serviciul solicitat și informații necesare pentru cereri de ofertă sau programări.',
        'Datele sunt folosite pentru a răspunde solicitărilor, a gestiona lead-uri, a crea programări și a trimite confirmări pe email.',
        'Nu vindem date personale către terți. Datele pot fi procesate prin servicii tehnice precum hosting, email, baze de date sau instrumente de analiză.',
        'Utilizatorii pot solicita acces, corectare sau ștergere a datelor prin pagina de cerere de confidențialitate.',
        'Pentru proiecte reale, această politică trebuie revizuită de un specialist juridic înainte de publicare.'
      ]
    },
    privacyRequest: {
      title: 'Cerere de confidențialitate',
      description: 'Trimite o solicitare dacă vrei acces, modificare sau ștergere a datelor tale.',
      sections: [
        'Poți solicita o copie a datelor trimise prin formularele site-ului.',
        'Poți cere corectarea datelor greșite sau ștergerea lor, dacă nu mai există un motiv legitim pentru păstrare.',
        'Pentru identificare, vom avea nevoie de emailul sau numărul de telefon folosit în formular.',
        'Solicitările se trimit la adresa de contact afișată în footer.'
      ]
    },
    cookies: {
      title: 'Setări cookie',
      description: 'Această pagină explică folosirea cookie-urilor și opțiunile disponibile.',
      sections: [
        'Site-ul poate folosi cookie-uri necesare pentru sesiune, securitate și funcționarea formularului.',
        'Cookie-urile de analiză sau marketing se activează doar dacă sunt configurate instrumente precum analytics sau ads.',
        'Poți controla cookie-urile din setările browserului tău.',
        'Pentru un site real, bannerul de cookie-uri și preferințele trebuie adaptate la instrumentele folosite efectiv.'
      ]
    }
  }
};

module.exports = content;