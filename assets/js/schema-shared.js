// Shared structured data — loaded by all pages
// Contains Organization, Person, and WebSite schemas
(function () {
  var shared = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://impulses.online/#organization",
      "name": "IMPULSES.ART",
      "alternateName": "IMPULSES ART Professional Music Therapy",
      "url": "https://impulses.online",
      "logo": "https://impulses.online/assets/images/portrait.jpg",
      "description": "Professional music therapy project combining live piano performance with scientific approaches to healing. Supporting immigrant and refugee communities in the United States.",
      "founder": { "@id": "https://impulses.online/#person" },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "serviceType": ["Music Therapy", "Group Therapy", "Individual Therapy", "Community Workshops", "Virtual Therapy Sessions"],
      "knowsLanguage": ["en", "es"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-786-816-9791",
        "email": "ernest@ernestocisneros.art",
        "contactType": "customer service",
        "availableLanguage": ["English", "Spanish"]
      },
      "sameAs": [
        "https://x.com/Impulses_ART",
        "https://instagram.com/impulses.art",
        "https://linkedin.com/company/impulses-art",
        "https://youtube.com/@ernestocisnerosmusic"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://impulses.online/#person",
      "name": "Ernesto Cisneros Cino",
      "givenName": "Ernesto",
      "familyName": "Cisneros Cino",
      "url": "https://ernestocisneros.art",
      "image": "https://impulses.online/assets/images/portrait.jpg",
      "jobTitle": ["Pianist", "Composer", "Educator", "Visual Artist", "Music Therapist"],
      "description": "Internationally experienced pianist, composer, educator, and visual artist. Founder and director of IMPULSES.ART professional music therapy project.",
      "knowsLanguage": ["en", "es"],
      "worksFor": { "@id": "https://impulses.online/#organization" },
      "sameAs": [
        "https://ernestocisneros.art",
        "https://x.com/Impulses_ART",
        "https://instagram.com/impulses.art",
        "https://linkedin.com/company/impulses-art",
        "https://youtube.com/@ernestocisnerosmusic"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://impulses.online/#website",
      "name": "IMPULSES.ART",
      "url": "https://impulses.online",
      "publisher": { "@id": "https://impulses.online/#organization" },
      "inLanguage": "en",
      "description": "Professional music therapy combining live piano performance with scientific approaches to healing."
    }
  ];

  shared.forEach(function (schema) {
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
})();
