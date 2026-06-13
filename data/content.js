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
    linkedin: 'https://linkedin.com/'
  },

  seo: {
    homeTitle: 'Site-uri Web și Sisteme de Programări pentru Afaceri Locale | AM Digital Growth',
    homeDescription: 'Construim site-uri web, formulare de lead-uri, sisteme de programări, testimoniale video și dashboard-uri pentru afaceri locale din România.',
    keywords: 'site web Galați, creare site România, sistem de programări, site prezentare, website pentru afaceri locale, dashboard vânzări, testimoniale video, marketing local'
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
    title: 'Construim site-uri și sisteme de programări pentru afaceri locale care vor mai mulți clienți.',
    text: 'Îți transformăm prezența online într-un sistem simplu: pagini clare, cereri de ofertă, testimoniale video, blog SEO și dashboard privat unde vezi vânzările, recenziile și programările.',
    primary: 'Programează un demo gratuit',
    secondary: 'Vezi pachetele'
  },

  trustStats: [{
      value: '30 minute',
      label: 'apel de consultanță'
    },
    {
      value: '10-14 zile',
      label: 'până la lansare'
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
      title: 'Arăți recenziile afacerii tale',
      text: 'Adăugăm testimoniale video aprobate din dashboard. Nu mai depinzi de promisiunea clientului că „o să lase o recenzie când are timp”.'
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
      title: 'Vânzările nu mai rămân pierdute',
      text: 'Cereri, recenzii, bloguri și programări se administrează dintr-un dashboard privat, fără să cauți prin mesaje, emailuri și notițe.'
    }
  ],

  system: [{
      title: 'Funnel de recenzii video',
      text: 'Clienții mulțumiți pot trimite testimoniale video, iar tu le aprobi înainte să apară pe site. Simplu, controlat și mult mai credibil decât textul generic.'
    },
    {
      title: 'Reminder mental: cere recenzii corect',
      text: 'Îți oferim structură clară pentru a cere recenzii după livrare. Nu te bazezi pe „sigur las eu o recenzie”, pentru că oamenii uită.'
    },
    {
      title: 'Vânzări într-un singur loc',
      text: 'Formularele trimit cererile în dashboard. Poți vedea cine a completat, ce dorește, ce status are și ce trebuie făcut mai departe.'
    },
    {
      title: 'Programări cu sloturi curate',
      text: 'Programările create din dashboard acceptă ore de tip 10:00, 10:30, 11:00, 11:30. Nu permitem ore haotice precum 10:17 sau 13:29.'
    }
  ],

  process: [{
      step: '01',
      title: 'Fă o rezervare',
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
        'Sistem de programări',
        'Plăți online',
        'Dashboard admin',
        'Google Ads',
        'Schimbări nelimitate'
      ]
    },
    {
      name: 'Booking Website',
      price: '€197/lună',
      tag: 'Cel mai bun pentru vânzări',
      featured: true,
      bestFor: 'Afaceri care vor cereri, programări sau oferte direct din site.',
      pages: 'Până la 5-7 pagini: Acasă, Servicii, Programări/Cerere Ofertă, Testimoniale, Contact.',
      included: [
        'Tot ce include Starter',
        'Formular programări / cerere ofertă',
        'Selectare serviciu și dată/oră',
        'Login admin și dashboard privat',
        'Gestionare clienți și programări',
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
      price: '€297/lună',
      tag: 'Sistem complet de conversie',
      bestFor: 'Afaceri care vor site, programări, plăți, recenzii și suport prioritar.',
      pages: 'Până la 7-10 pagini: Acasă, Servicii, 2 pagini individuale de servicii, Sistem de Programări, Testimoniale, Contact.',
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
        'Automatizări SMS'
      ]
    }
  ],

  contractNote: 'Fără taxă de setup. Prima lună se plătește înainte de începerea lucrului. Costul domeniului se plătește separat de client. Hostingul, mentenanța, actualizările mici și suportul sunt incluse. Schimbările mari, funcțiile noi, reclamele, redesignul complet, paginile extra și SEO avansat se taxează separat.',

  footerProducts: [
    'Site de prezentare',
    'Website cu programări',
    'Dashboard vânzări',
    'Recenzii video',
    'Blog SEO',
    'Integrare Stripe'
  ],

  legal: {
    terms: {
      title: 'Termeni și condiții',
      description: 'Acești termeni explică modul în care lucrăm, ce include abonamentul lunar, cum se face plata, ce responsabilități are clientul și cum sunt tratate serviciile digitale.',
      sections: [
        `TERMENI ȘI CONDIȚII

Ultima actualizare: [zi/lună/an]

Această pagină stabilește termenii și condițiile de utilizare a website-ului AM Digital Growth și regulile aplicabile serviciilor oferite de [Nume PFA/SRL].

Prin accesarea website-ului, transmiterea unui formular de contact, solicitarea unei oferte sau contractarea serviciilor noastre, confirmați că ați citit, înțeles și acceptat acești Termeni și Condiții.`,

        `1. Datele furnizorului

Furnizorul serviciilor este:

Denumire: [Nume PFA/SRL]
Denumire comercială: AM Digital Growth
Formă juridică: [PFA/SRL]
CUI: [CUI]
Nr. Registrul Comerțului: [Număr ONRC]
Sediu profesional / sediu social: [Adresă sediu]
Email: alexandru.marian99777@gmail.com
Telefon: +40 752 679 312
Website: [website]

În continuare, [Nume PFA/SRL] va fi denumit „Prestatorul”, „noi” sau „furnizorul serviciilor”.`,

        `2. Obiectul website-ului

Website-ul AM Digital Growth prezintă servicii digitale pentru afaceri locale, inclusiv creare website-uri, web design, sisteme de programări, formulare de lead-uri, dashboard-uri, testimoniale video, blog SEO și mentenanță website.

Website-ul are scop informativ și comercial. Informațiile prezentate pe website nu reprezintă automat o ofertă contractuală fermă, cu excepția cazului în care acest lucru este menționat expres.`,

        `3. Serviciile oferite

Prestatorul poate oferi, în funcție de pachetul ales și de oferta acceptată de client, următoarele servicii:

- creare website-uri de prezentare;
- creare landing page-uri;
- web design și design grafic pentru pagini web;
- formulare de contact și formulare de generare lead-uri;
- sisteme de programări;
- dashboard-uri administrative;
- integrare butoane WhatsApp, click-to-call și Google Maps;
- testimoniale video cu aprobare;
- blog și structură SEO de bază;
- mentenanță website;
- administrare pagini web;
- configurare hosting și domeniu, dacă este inclus în ofertă;
- integrare Stripe sau alte servicii de plată, dacă este inclusă în ofertă;
- alte servicii digitale stabilite prin ofertă, contract sau comandă scrisă.

Serviciile exacte, prețul, termenul de livrare, numărul de pagini, funcționalitățile incluse și condițiile de plată se stabilesc prin ofertă, contract, email, factură sau alt document agreat între părți.`,

        `4. Pachete și abonamente

Pachetele prezentate pe website pot funcționa pe bază de abonament lunar. Abonamentul poate include, în funcție de pachet, hosting, mentenanță, actualizări mici, dashboard, formulare, programări, blog, testimoniale sau alte servicii menționate în descrierea pachetului.

Prima lună se achită înainte de începerea lucrului, cu excepția cazului în care părțile stabilesc altfel în scris.

Costul domeniului se achită separat de client, cu excepția cazului în care oferta menționează expres că este inclus.

Schimbările mari, funcțiile noi, paginile extra, redesignul complet, reclamele plătite, SEO avansat, brandingul complet și alte servicii neincluse în pachet se taxează separat.`,

        `5. Solicitarea unei oferte

Clientul poate solicita o ofertă prin formularul de contact, email, telefon, WhatsApp sau alte canale indicate pe website.

Transmiterea unei cereri prin formular nu obligă Prestatorul să accepte proiectul. Prestatorul poate accepta, refuza sau solicita informații suplimentare înainte de emiterea unei oferte.

Dacă oferta nu menționează alt termen de valabilitate, aceasta este valabilă 7 zile calendaristice de la transmitere.`,

        `6. Încheierea contractului

Contractul dintre Prestator și Client se consideră încheiat atunci când Clientul acceptă oferta în scris, achită suma solicitată pentru începerea lucrului sau semnează un contract de prestări servicii.

Acceptarea poate fi făcută prin email, mesaj scris, plată, semnătură pe contract sau altă metodă agreată de părți.

Pentru proiectele mai complexe, Prestatorul poate solicita semnarea unui contract separat. În caz de diferență între acești Termeni și Condiții și contractul semnat, contractul semnat prevalează.`,

        `7. Prețuri, plată și facturare

Prețurile serviciilor sunt stabilite în funcție de pachet, complexitate, număr de pagini, funcționalități, termen de livrare și cerințele clientului.

Plata se face conform ofertei, contractului sau facturii.

Factura se emite conform legislației fiscale aplicabile. Dacă este obligatoriu, factura va fi transmisă și prin sistemul național RO e-Factura.

Clientul înțelege că neplata la timp poate duce la suspendarea lucrului, suspendarea mentenanței sau oprirea serviciilor active, după caz.`,

        `8. TVA

Prestatorul va menționa în ofertă și pe factură dacă este sau nu plătitor de TVA.

Dacă Prestatorul nu este plătitor de TVA, prețurile nu includ TVA. Dacă Prestatorul devine plătitor de TVA, facturarea se va realiza conform legislației fiscale aplicabile la data emiterii facturii.`,

        `9. Obligațiile Clientului

Clientul are obligația să furnizeze informații corecte și complete pentru realizarea proiectului.

Clientul trebuie să transmită la timp materialele necesare, cum ar fi texte, poze, logo, date de contact, descrierea serviciilor, prețuri, program de lucru, linkuri social media și alte informații necesare.

Clientul garantează că are dreptul legal de a folosi materialele transmise Prestatorului, inclusiv texte, imagini, logo-uri, mărci, fotografii, videoclipuri sau alte materiale protejate de drepturi de autor.

Prestatorul nu răspunde pentru probleme legale apărute din cauza materialelor furnizate de Client fără drept de utilizare.

Clientul este responsabil pentru verificarea conținutului final înainte de publicare, inclusiv texte, date de contact, prețuri, informații comerciale, imagini și alte detalii publicate pe website.`,

        `10. Termene de livrare

Termenul de livrare se stabilește prin ofertă sau contract.

Termenul de livrare poate fi prelungit dacă Clientul întârzie transmiterea materialelor, feedbackului, aprobărilor, plăților sau informațiilor necesare.

Prestatorul nu este responsabil pentru întârzieri cauzate de furnizori terți, probleme de hosting, domenii, servicii externe, aplicații terțe, platforme online sau situații de forță majoră.`,

        `11. Revizii și modificări

Numărul de revizii incluse se stabilește în ofertă sau contract.

O revizie înseamnă modificări rezonabile asupra lucrării deja agreate. Nu include schimbarea completă a structurii, designului, direcției proiectului sau adăugarea de funcționalități noi.

Modificările suplimentare, funcționalitățile noi sau cerințele care nu au fost incluse în oferta inițială pot fi taxate separat.`,

        `12. Domeniu, hosting și servicii terțe

Domeniul, hostingul, conturile de email, licențele, pluginurile, API-urile, temele, aplicațiile externe și alte servicii terțe pot fi achiziționate direct de Client sau, dacă se stabilește prin ofertă, pot fi gestionate de Prestator.

Costurile pentru domeniu, hosting, licențe, aplicații externe, servicii de email, API-uri, teme, pluginuri sau alte servicii terțe nu sunt incluse în preț, decât dacă acest lucru este menționat expres în ofertă.

Prestatorul nu răspunde pentru întreruperi, erori, modificări de preț, suspendări, limitări sau probleme tehnice cauzate de furnizori terți.`,

        `13. Mentenanță

Mentenanța este inclusă doar dacă este menționată în pachet, ofertă sau contract.

Mentenanța poate include, în funcție de pachet: modificări mici de conținut, actualizări, verificări tehnice, backup-uri, monitorizare, suport tehnic sau alte servicii agreate.

Mentenanța nu include automat redesign complet, funcționalități noi, pagini suplimentare, campanii de marketing, administrare reclame, SEO avansat sau intervenții complexe.`,

        `14. Predarea proiectului

Proiectul se consideră predat atunci când website-ul sau lucrarea este publicată online, transmisă Clientului sau pusă la dispoziția Clientului pentru utilizare.

Clientul are obligația să verifice proiectul și să transmită eventualele observații în termenul stabilit în ofertă sau contract. Dacă nu este stabilit un termen, observațiile trebuie transmise în maximum 5 zile lucrătoare de la predare.

Dacă Clientul nu transmite observații în termenul stabilit, proiectul poate fi considerat acceptat.`,

        `15. Anulare și încetarea colaborării

Clientul poate solicita anularea proiectului printr-o notificare scrisă.

Sumele achitate pot fi nerambursabile dacă Prestatorul a început deja lucrul, a alocat timp pentru proiect, a realizat design, cod, structură, configurări, documentare sau alte activități legate de proiect.

Dacă proiectul este anulat după începerea lucrului, Clientul poate fi obligat să achite partea de serviciu deja prestată până la data anulării.

Prestatorul poate înceta colaborarea dacă Clientul nu plătește la timp, nu furnizează materialele necesare, solicită activități ilegale, abuzive sau neconforme cu oferta agreată ori are un comportament care face imposibilă continuarea colaborării.`,

        `16. Dreptul de retragere pentru consumatori

Dacă Clientul este consumator, adică persoană fizică ce contractează servicii în afara unei activități profesionale sau comerciale, acesta poate avea drept de retragere conform legislației aplicabile contractelor la distanță.

Dreptul de retragere poate fi limitat sau poate să nu se aplice în anumite situații prevăzute de lege, inclusiv în cazul serviciilor personalizate, lucrărilor realizate după specificațiile Clientului sau serviciilor începute cu acordul expres al Clientului înainte de expirarea perioadei de retragere.

Pentru clienții persoane juridice, PFA, întreprinderi individuale sau alte entități care contractează în scop profesional, dreptul de retragere aplicabil consumatorilor nu se aplică.`,

        `17. Drepturi de autor și proprietate intelectuală

Materialele, designul, codul, structura website-ului, elementele grafice și alte livrabile create de Prestator rămân proprietatea Prestatorului până la plata integrală a serviciilor.

După plata integrală, Clientul primește dreptul de utilizare asupra livrabilelor finale, în limitele stabilite prin ofertă sau contract.

Prestatorul poate reutiliza cunoștințe, metode, fragmente generale de cod, structuri tehnice, componente sau idei generale care nu sunt confidențiale și nu aparțin exclusiv Clientului.

Clientul nu are dreptul să revândă, copieze, distribuie sau modifice livrabilele în afara scopului agreat fără acordul Prestatorului, cu excepția cazului în care oferta sau contractul prevede altfel.`,

        `18. Portofoliu

Prestatorul poate menționa proiectul realizat în portofoliu, pe website, social media sau în materiale de prezentare, folosind numele proiectului, capturi de ecran și o scurtă descriere, cu excepția cazului în care Clientul solicită în scris contrariul.

Dacă proiectul este confidențial, Clientul trebuie să anunțe acest lucru înainte de începerea colaborării.`,

        `19. Confidențialitate

Părțile se obligă să păstreze confidențiale informațiile sensibile primite în cadrul colaborării, inclusiv date de acces, parole, informații comerciale, strategii, documente interne sau alte date considerate în mod rezonabil confidențiale.

Clientul este responsabil să schimbe parolele sau datele de acces după finalizarea colaborării, dacă dorește acest lucru.`,

        `20. Date personale și GDPR

Prestatorul poate colecta și prelucra date personale prin website, formulare de contact, email, telefon, WhatsApp, cereri de ofertă, contracte, facturi, programări sau recenzii.

Datele pot include nume, prenume, email, telefon, nume firmă, mesaj, serviciu solicitat, date de facturare, date contractuale și alte informații transmise voluntar de Client.

Datele sunt prelucrate pentru comunicare, ofertare, prestarea serviciilor, facturare, îndeplinirea obligațiilor legale, administrarea relației contractuale și, dacă este cazul, publicarea recenziilor cu acordul persoanei vizate.

Mai multe informații despre prelucrarea datelor personale sunt disponibile în Politica de Confidențialitate.`,

        `21. Recenzii și testimoniale

Clientul poate transmite recenzii sau testimoniale despre serviciile Prestatorului.

Recenziile pot fi publicate pe website, social media sau în materiale de prezentare doar dacă persoana care transmite recenzia și-a dat acordul pentru publicare.

Prestatorul poate refuza publicarea sau poate elimina recenziile care conțin limbaj ofensator, date personale excesive, afirmații false, conținut ilegal sau informații confidențiale.

Clientul poate solicita ștergerea unei recenzii publicate contactând Prestatorul la adresa de email indicată pe website.`,

        `22. Cookie-uri

Website-ul poate folosi cookie-uri necesare pentru funcționare, precum și, dacă este cazul, cookie-uri de analiză, marketing sau integrare cu servicii terțe.

Utilizatorul poate gestiona preferințele privind cookie-urile prin mecanismul de consimțământ disponibil pe website, dacă acesta este implementat.

Mai multe informații sunt disponibile în Politica de Cookie-uri.`,

        `23. Limitarea răspunderii

Prestatorul depune eforturi rezonabile pentru a furniza servicii profesionale și funcționale, conform ofertei acceptate.

Prestatorul nu garantează că website-ul va genera un anumit număr de clienți, vânzări, programări, lead-uri, poziții în Google sau rezultate comerciale, cu excepția cazului în care acest lucru este menționat expres în contract.

Prestatorul nu răspunde pentru pierderi indirecte, pierderi de profit, întreruperi ale activității, probleme cauzate de furnizori terți, atacuri informatice, erori ale platformelor externe, modificări făcute de Client sau de alte persoane după predarea proiectului.

Nicio prevedere din acești Termeni și Condiții nu exclude răspunderea care nu poate fi exclusă potrivit legii.`,

        `24. Activități interzise

Clientul nu poate solicita Prestatorului realizarea de materiale, pagini, funcționalități sau conținut care sunt ilegale, înșelătoare, discriminatorii, frauduloase, abuzive, care încalcă drepturile altor persoane sau care pot prejudicia imaginea Prestatorului.

Prestatorul poate refuza sau opri orice proiect care implică activități ilegale, frauduloase sau contrare bunelor practici comerciale.`,

        `25. Reclamații și litigii

Orice reclamație privind serviciile prestate poate fi transmisă la adresa de email: alexandru.marian99777@gmail.com.

Prestatorul va analiza reclamația și va încerca soluționarea amiabilă într-un termen rezonabil.

Pentru consumatori, dacă litigiul nu poate fi soluționat amiabil, aceștia se pot adresa autorităților competente, inclusiv Autorității Naționale pentru Protecția Consumatorilor, după caz.

Dacă soluționarea amiabilă nu este posibilă, litigiile vor fi soluționate de instanțele competente din România, conform legislației aplicabile.`,

        `26. Modificarea Termenilor și Condițiilor

Prestatorul poate modifica oricând acești Termeni și Condiții, în funcție de modificări legislative, modificări ale serviciilor oferite sau ale modului de funcționare a website-ului.

Versiunea actualizată va fi publicată pe această pagină și va produce efecte de la data publicării, cu excepția cazului în care se menționează altfel.`,

        `27. Legea aplicabilă

Acești Termeni și Condiții sunt guvernați de legea română.

Prin utilizarea website-ului, transmiterea unei solicitări sau contractarea serviciilor Prestatorului, Clientul confirmă că a citit și acceptă acești Termeni și Condiții.`
      ]
    },

    privacy: {
      title: 'Politica de confidențialitate',
      description: 'Această pagină explică modul în care AM Digital Growth colectează, folosește, stochează și protejează datele personale transmise prin website, formulare, programări, recenzii și alte canale de comunicare.',
      sections: [
        `POLITICA DE CONFIDENȚIALITATE

Ultima actualizare: [zi/lună/an]

Această Politică de Confidențialitate explică modul în care AM Digital Growth / [Nume PFA/SRL] colectează, folosește, stochează și protejează datele personale transmise prin website-ul [website], formulare, email, telefon, WhatsApp, cereri de ofertă, programări, recenzii, testimoniale sau alte canale de comunicare.

Prin utilizarea website-ului sau transmiterea datelor prin formularele disponibile, confirmați că ați citit această Politică de Confidențialitate.`,

        `1. Datele operatorului

Operatorul de date este:

Denumire: [Nume PFA/SRL]
Denumire comercială: AM Digital Growth
Formă juridică: [PFA/SRL]
CUI: [CUI]
Nr. Registrul Comerțului: [Număr ONRC]
Sediu profesional / sediu social: [Adresă sediu]
Email: alexandru.marian99777@gmail.com
Telefon: +40 752 679 312
Website: [website]

În această politică, [Nume PFA/SRL] poate fi denumit „noi”, „operatorul”, „prestatorul” sau „AM Digital Growth”.`,

        `2. Ce date personale putem colecta

Putem colecta următoarele categorii de date personale:

- nume și prenume;
- adresă de email;
- număr de telefon;
- nume firmă / denumire afacere;
- mesaj transmis prin formular;
- serviciul solicitat;
- informații necesare pentru ofertă;
- date pentru programări sau demo-uri;
- date de facturare;
- date contractuale;
- informații transmise prin email, telefon sau WhatsApp;
- recenzii, ratinguri, comentarii sau testimoniale video;
- informații tehnice despre utilizarea website-ului, dacă sunt active instrumente de analiză sau cookie-uri.

Nu vă solicităm să transmiteți prin formularele website-ului date sensibile, cum ar fi CNP, date medicale, date bancare complete, informații despre minori sau alte date care nu sunt necesare pentru solicitarea unei oferte.`,

        `3. Cum colectăm datele

Datele pot fi colectate atunci când:

- completați formularul de contact;
- solicitați un demo gratuit;
- solicitați o ofertă;
- trimiteți un mesaj prin email, telefon sau WhatsApp;
- completați un formular de programare;
- trimiteți o recenzie sau un testimonial;
- semnați un contract;
- primiți o factură;
- interacționați cu website-ul, dacă sunt folosite cookie-uri sau instrumente de analiză.`,

        `4. Scopurile prelucrării datelor

Prelucrăm datele personale pentru următoarele scopuri:

- pentru a răspunde solicitărilor primite prin formular, email, telefon sau WhatsApp;
- pentru a pregăti și transmite oferte comerciale;
- pentru a programa apeluri demo sau întâlniri;
- pentru a presta serviciile contractate;
- pentru a crea, administra și livra website-uri, formulare, dashboard-uri, sisteme de programări sau alte servicii digitale;
- pentru a gestiona relația contractuală cu clienții;
- pentru a emite facturi și documente contabile;
- pentru a transmite facturi prin RO e-Factura, atunci când este obligatoriu;
- pentru a administra recenzii și testimoniale;
- pentru a publica recenzii sau testimoniale doar cu acordul persoanei vizate;
- pentru a asigura funcționarea și securitatea website-ului;
- pentru analiză statistică și îmbunătățirea website-ului, dacă sunt activate instrumente de analiză;
- pentru marketing sau remarketing, doar dacă există consimțământ sau alt temei legal aplicabil;
- pentru respectarea obligațiilor legale;
- pentru apărarea drepturilor și intereselor noastre legitime în cazul unor dispute.`,

        `5. Temeiurile legale ale prelucrării

Prelucrarea datelor se poate baza pe următoarele temeiuri:

- executarea unui contract sau efectuarea de demersuri înainte de încheierea unui contract, atunci când solicitați o ofertă, un demo sau un serviciu;
- obligație legală, atunci când emitem facturi, păstrăm documente contabile sau transmitem facturi prin RO e-Factura;
- consimțământ, atunci când acceptați cookie-uri de analiză/marketing, solicitați publicarea unei recenzii sau vă abonați la comunicări comerciale, dacă acest lucru este implementat;
- interes legitim, pentru comunicare comercială rezonabilă, securitatea website-ului, prevenirea abuzurilor, apărarea drepturilor noastre și îmbunătățirea serviciilor.`,

        `6. Formulare de contact și cereri de ofertă

Când completați un formular de contact sau solicitați o ofertă, putem colecta numele, emailul, telefonul, numele firmei, serviciul dorit și mesajul transmis.

Aceste date sunt folosite pentru a vă răspunde, pentru a înțelege nevoile afacerii dumneavoastră și pentru a pregăti o ofertă.

Dacă nu furnizați datele necesare, este posibil să nu putem răspunde solicitării sau să nu putem pregăti o ofertă corectă.`,

        `7. Programări și demo-uri gratuite

Dacă solicitați un demo gratuit sau o programare, putem prelucra numele, emailul, telefonul, data și ora preferată, numele afacerii și detalii despre serviciile care vă interesează.

Aceste date sunt folosite pentru organizarea discuției, confirmarea programării și comunicarea ulterioară privind serviciile solicitate.`,

        `8. Recenzii și testimoniale

Dacă trimiteți o recenzie sau un testimonial, putem colecta numele, ratingul, comentariul, emailul pentru verificare și, dacă este cazul, material video sau imagine.

Recenziile și testimonialele pot fi publicate pe website, social media sau în materiale de prezentare doar dacă v-ați dat acordul pentru publicare.

Emailul folosit pentru verificare nu va fi afișat public.

Puteți solicita oricând ștergerea unei recenzii sau retragerea acordului pentru publicare, contactându-ne la adresa de email menționată în această politică.`,

        `9. Dashboard, programări și lead-uri

Dacă website-ul include un dashboard privat, sistem de programări sau sistem de gestionare lead-uri, datele trimise prin formulare pot fi stocate în baza de date pentru administrarea solicitărilor, programărilor, statusurilor și comunicării cu potențialii clienți.

Accesul la dashboard este limitat persoanelor autorizate.`,

        `10. Facturare și documente contractuale

Pentru clienții care contractează servicii, putem colecta date necesare pentru contractare și facturare, cum ar fi nume, denumire firmă, CUI, adresă, email, telefon, date contractuale și informații despre serviciile achiziționate.

Aceste date sunt prelucrate pentru emiterea facturilor, respectarea obligațiilor fiscale și contabile, transmiterea facturilor prin RO e-Factura, gestionarea contractului și apărarea drepturilor noastre.`,

        `11. Cookie-uri și tehnologii similare

Website-ul poate folosi cookie-uri necesare pentru funcționare, securitate, formulare, sesiuni și preferințe.

Cookie-urile de analiză sau marketing, cum ar fi Google Analytics, Meta Pixel, Google Ads sau alte instrumente similare, se folosesc doar dacă sunt implementate pe website și, acolo unde este necesar, doar după acordul utilizatorului.

Utilizatorul poate accepta, refuza sau modifica preferințele privind cookie-urile prin bannerul de cookie-uri sau prin butonul „Schimbă setările cookie”.

Butonul „Schimbă setările cookie” permite redeschiderea panoului de consimțământ pentru cookie-uri, astfel încât utilizatorul să poată modifica opțiunile exprimate anterior.

Mai multe informații sunt disponibile în Politica de Cookie-uri.`,

        `12. Marketing și comunicări comerciale

Putem transmite comunicări comerciale doar în situațiile permise de lege, de exemplu dacă v-ați dat consimțământul sau dacă există un interes legitim aplicabil pentru comunicări privind servicii similare.

Vă puteți dezabona sau puteți solicita oprirea comunicărilor comerciale oricând, prin email la alexandru.marian99777@gmail.com sau prin mecanismul de dezabonare inclus în mesajele comerciale, dacă acesta este disponibil.`,

        `13. Destinatarii datelor

Datele personale pot fi accesate sau prelucrate, după caz, de următoarele categorii de destinatari:

- furnizori de hosting;
- furnizori de email;
- furnizori de baze de date;
- furnizori de formulare și aplicații web;
- aplicații de facturare;
- contabil sau firmă de contabilitate;
- servicii de plată, dacă sunt folosite;
- servicii de analiză și marketing, dacă sunt activate;
- furnizori de notificări email, WhatsApp, Telegram sau alte sisteme similare, dacă sunt implementate;
- autorități publice, dacă există o obligație legală;
- instanțe, avocați sau consultanți, dacă este necesar pentru apărarea drepturilor noastre.

Nu vindem datele personale către terți.`,

        `14. Transferuri în afara UE/SEE

Unele servicii tehnice folosite pentru hosting, email, analiză, marketing, plăți sau comunicare pot implica furnizori care procesează date în afara Uniunii Europene sau Spațiului Economic European.

În aceste situații, vom folosi, pe cât posibil, furnizori care oferă garanții adecvate pentru protecția datelor personale, conform legislației aplicabile.`,

        `15. Perioada de păstrare a datelor

Datele transmise prin formularele de contact sau cereri de ofertă pot fi păstrate atât timp cât este necesar pentru comunicare, ofertare și urmărirea solicitării, dar nu mai mult decât este rezonabil pentru scopul pentru care au fost colectate.

Datele aferente contractelor, facturilor și documentelor contabile sunt păstrate conform termenelor prevăzute de legislația fiscală și contabilă aplicabilă.

Datele privind recenziile și testimonialele sunt păstrate până la retragerea consimțământului, ștergerea recenziei sau încetarea scopului pentru care au fost publicate.

Datele colectate prin cookie-uri sunt păstrate conform duratelor setate în instrumentele respective și conform preferințelor exprimate prin bannerul de cookie-uri.`,

        `16. Securitatea datelor

Luăm măsuri rezonabile pentru protejarea datelor personale împotriva accesului neautorizat, pierderii, modificării sau divulgării neautorizate.

Aceste măsuri pot include controlul accesului, parole, servicii securizate de hosting, actualizări tehnice, limitarea accesului la date și alte măsuri organizatorice sau tehnice.

Totuși, nicio metodă de transmitere prin internet sau de stocare electronică nu este complet lipsită de risc.`,

        `17. Drepturile dumneavoastră

Conform legislației privind protecția datelor, aveți următoarele drepturi:

- dreptul de acces la date;
- dreptul la rectificarea datelor;
- dreptul la ștergerea datelor;
- dreptul la restricționarea prelucrării;
- dreptul la opoziție;
- dreptul la portabilitatea datelor;
- dreptul de a retrage consimțământul, atunci când prelucrarea se bazează pe consimțământ;
- dreptul de a depune o plângere la autoritatea de supraveghere.

Pentru exercitarea acestor drepturi, ne puteți contacta la: alexandru.marian99777@gmail.com.

Pentru protecția datelor, este posibil să solicităm informații suplimentare pentru verificarea identității persoanei care face solicitarea.`,

        `18. Dreptul de a depune plângere

Dacă considerați că datele dumneavoastră personale nu sunt prelucrate conform legislației aplicabile, aveți dreptul să depuneți o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal — ANSPDCP.`,

        `19. Retragerea consimțământului

Dacă prelucrarea se bazează pe consimțământ, puteți retrage consimțământul oricând.

Retragerea consimțământului nu afectează legalitatea prelucrării efectuate înainte de retragere.

Pentru cookie-uri, puteți modifica preferințele prin butonul „Schimbă setările cookie”, dacă acesta este disponibil pe website.`,

        `20. Decizii automate și profilare

Nu folosim datele personale pentru decizii automate care produc efecte juridice sau efecte similare semnificative asupra utilizatorilor.

Dacă vom folosi instrumente de analiză sau marketing, acestea pot crea statistici sau audiențe, dar nu vor fi folosite pentru luarea unor decizii automate cu efect juridic asupra utilizatorilor.`,

        `21. Date ale minorilor

Serviciile AM Digital Growth sunt destinate în principal adulților și afacerilor locale.

Nu colectăm intenționat date personale ale minorilor. Dacă aflăm că am colectat accidental date ale unui minor fără acordul reprezentantului legal, vom lua măsuri pentru ștergerea acestor date, dacă legea permite.`,

        `22. Linkuri către alte website-uri

Website-ul poate conține linkuri către platforme externe, cum ar fi Facebook, Instagram, Google, Stripe, WhatsApp sau alte servicii terțe.

Nu suntem responsabili pentru politicile de confidențialitate sau practicile acestor platforme. Vă recomandăm să consultați politicile lor înainte de utilizare.`,

        `23. Modificarea politicii

Putem modifica această Politică de Confidențialitate atunci când apar modificări legislative, modificări ale serviciilor oferite sau modificări ale modului în care prelucrăm datele.

Versiunea actualizată va fi publicată pe această pagină și va produce efecte de la data publicării.`,

        `24. Contact

Pentru orice întrebări privind această Politică de Confidențialitate sau modul în care prelucrăm datele personale, ne puteți contacta la:

Email: alexandru.marian99777@gmail.com
Telefon: +40 752 679 312
Adresă: [Adresă sediu profesional / sediu social]`
      ]
    },

    privacyRequest: {
      title: 'Cerere de confidențialitate',
      description: 'Trimite o solicitare dacă vrei acces, corectare, ștergere, restricționare sau retragerea consimțământului privind datele tale personale.',
      sections: [
        `CERERE DE CONFIDENȚIALITATE

Această pagină explică modul în care poți trimite o solicitare privind datele personale prelucrate de AM Digital Growth / [Nume PFA/SRL].`,

        `1. Ce poți solicita

Poți solicita:

- acces la datele personale pe care le deținem despre tine;
- corectarea datelor incorecte sau incomplete;
- ștergerea datelor, acolo unde legea permite;
- restricționarea prelucrării;
- opoziția față de anumite prelucrări;
- portabilitatea datelor, dacă este aplicabilă;
- retragerea consimțământului pentru recenzii, testimoniale sau cookie-uri, acolo unde prelucrarea se bazează pe consimțământ.`,

        `2. Cum trimiți solicitarea

Solicitarea se poate trimite prin email la:

alexandru.marian99777@gmail.com

În mesaj, te rugăm să menționezi clar ce drept dorești să exerciți și, dacă este posibil, contextul în care ai transmis datele: formular de contact, cerere de ofertă, programare, recenzie, testimonial sau contract.`,

        `3. Verificarea identității

Pentru protecția datelor, este posibil să solicităm informații suplimentare pentru confirmarea identității persoanei care face cererea.

Nu vom furniza date personale către o persoană care nu poate demonstra că este persoana vizată sau reprezentantul autorizat al acesteia.`,

        `4. Termen de răspuns

Vom analiza solicitarea și vom răspunde într-un termen rezonabil, conform legislației aplicabile privind protecția datelor personale.`,

        `5. Contact

Pentru orice solicitare privind datele personale, ne poți contacta la:

Email: alexandru.marian99777@gmail.com
Telefon: +40 752 679 312`
      ]
    },

    cookies: {
      title: 'Politica de cookie-uri',
      description: 'Această pagină explică folosirea cookie-urilor și opțiunile disponibile.',
      sections: [
        `POLITICA DE COOKIE-URI

Website-ul poate folosi cookie-uri necesare pentru funcționare, securitate, formulare, sesiuni și experiență de navigare.`,

        `Cookie-urile de analiză sau marketing se folosesc doar dacă sunt configurate instrumente precum Google Analytics, Meta Pixel, Google Ads sau alte servicii similare.`,

        `Utilizatorul poate controla cookie-urile din setările browserului sau prin bannerul/setările de cookie-uri disponibile pe website, dacă acestea sunt implementate.`,

        `Pentru un website real, această politică trebuie adaptată la instrumentele efectiv folosite pe site. Nu activa analytics, pixel sau tracking fără să ai mecanism de consimțământ corespunzător.`
      ]
    }
  }
};

module.exports = content;