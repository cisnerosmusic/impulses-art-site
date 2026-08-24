// Shared structured data — loaded by all pages
// Contains Organization, Person, and WebSite schemas
// Version 2.0 — corrected April 2026
(function () {
  var shared = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://impulses.online/#organization",
      "name": "IMPULSES.ART",
      "alternateName": "IMPULSES ART Therapeutic Music",
      "url": "https://impulses.online",
      "logo": {
        "@type": "ImageObject",
        "url": "https://impulses.online/assets/images/portrait.jpg",
        "width": 400,
        "height": 400
      },
      "description": "Therapeutic music project combining live piano performance with research-informed approaches to wellbeing. Supporting immigrant and refugee communities in the United States.",
      "founder": { "@id": "https://impulses.online/#person" },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Miami-Dade County"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Broward County"
        },
        {
          "@type": "Country",
          "name": "United States"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Therapeutic Music Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Individual Therapeutic Music Sessions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Group Therapeutic Music Sessions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Community Workshops" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Virtual Therapeutic Music Sessions" } }
        ]
      },
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
      "image": {
        "@type": "ImageObject",
        "url": "https://impulses.online/assets/images/portrait.jpg",
        "width": 400,
        "height": 400
      },
      "jobTitle": ["Pianist", "Composer", "Educator", "Visual Artist"],
      "description": "Internationally experienced pianist, composer, educator, and visual artist. Founder and director of IMPULSES.ART, a therapeutic music project.",
      "knowsLanguage": ["en", "es"],
      "worksFor": { "@id": "https://impulses.online/#organization" },
      "sameAs": [
        "https://orcid.org/0009-0002-2833-1787",
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
      "description": "Therapeutic live piano: performance combined with research-informed approaches to wellbeing.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://impulses.online/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ];
  shared.forEach(function (schema) {
    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
})();
