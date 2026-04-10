# IMPULSES.ART

A professional music therapy platform combining live piano performance with scientific approaches to healing, supporting immigrant and refugee communities in the United States.

**Website:** [impulses.online](https://impulses.online)  
**Personal Site:** [ernestocisneros.art](https://ernestocisneros.art)

---

## About

**IMPULSES.ART** is a music therapy initiative founded by **Ernesto Cisneros Cino**, a pianist, composer, educator, visual artist, and music therapist based in Miami, Florida.

The project bridges the intersection of clinical music therapy and creative performance, offering evidence-based therapeutic interventions through live piano music. IMPULSES.ART serves diverse communities, with specialized focus on supporting immigrant and refugee populations.

### Founder
- **Ernesto Cisneros Cino**
- Pianist | Composer | Educator | Visual Artist | Music Therapist
- Miami, Florida, USA
- Languages: English, Spanish

---

## Services

The platform offers multiple service delivery models:

- **Individual Sessions** — One-on-one music therapy
- **Group Sessions** — Therapeutic drumming circles and group experiences
- **Community Workshops** — Public education events on music therapy applications
- **Virtual Sessions** — Remote access to services for distributed communities

All services are grounded in peer-reviewed research on the physiological and psychological effects of live music exposure.

---

## Technical Stack

### Platform & Hosting
- **Static Site Generator:** HTML5, CSS3, ES6 JavaScript
- **Hosting:** GitHub Pages with custom domain
- **Domain:** impulses.online (via GoDaddy)
- **DNS Configuration:** 4 A records (185.199.108-111.153) + CNAME for www subdomain

### Analytics & Privacy
- **Analytics:** GoatCounter (privacy-friendly, cookie-free, GDPR/CCPA compliant)
- **Contact Form:** Formspree
- **Privacy Policy:** Therapeutic privacy policy (marked noindex)

### Design System

#### Color Palette
- **Navy Base:** `#0a0c1f` — Primary background and text emphasis
- **Gold Accents:** `#d4a030` — Interactive elements, highlights
- **Text Primary:** `#e8e6e1` — Main content text
- **Text Secondary:** `#b0aea5` — Secondary information and borders

#### Typography
All fonts served via Google Fonts:
- **Cinzel** — Display headlines and branding
- **Cormorant Garamond** — Body text and content
- **Space Mono** — Code and monospace elements

#### Responsive Design
- Mobile-first architecture
- Hamburger navigation on small screens
- Fully responsive across devices

---

## Site Structure

```
impulses-art-site/
├── index.html                 # Home — Hero section + areas of expertise
├── faq.html                   # 12 FAQ items with scientific references
├── services.html              # Service offerings and descriptions
├── research.html              # Scientific background on music therapy
├── contact.html               # Contact form + business information
├── blog.html                  # Blog (coming soon)
├── privacy-policy.html        # Therapeutic privacy policy
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── llms.txt
├── humans.txt
├── site.webmanifest
├── CNAME
├── README.md
└── assets/
    ├── css/
    │   └── style.css          # Main stylesheet
    ├── js/
    │   └── schema-shared.js    # Shared structured data
    └── images/
        ├── portrait.jpg
        ├── hands-dark.jpg
        ├── hands-light.jpg
        ├── piano-keys.jpeg
        ├── banner.jpg
        ├── og-image.jpg
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── apple-touch-icon.png
        ├── android-chrome-192x192.png
        └── android-chrome-512x512.png
```

---

## SEO & AI Discoverability

The site implements a comprehensive structured data strategy for search engines and AI agents:

### Structured Data
- **Hybrid Approach:** Shared JSON-LD via `schema-shared.js` + per-page inline JSON-LD
- **Home Page:** ProfessionalService schema (primary service) + Organization + Person + WebSite
- **FAQ Page:** FAQPage schema with structured Q&A
- **Services Page:** ItemList with individual Service entries
- **Research Page:** WebPage with MedicalTherapy context
- **Contact Page:** ContactPage schema
- **Blog Page:** Blog schema (future content)

### SEO Features
- Full Open Graph tags on all pages
- Twitter Card metadata
- Canonical URLs
- hreflang for language variants
- XML sitemap (`sitemap.xml`)
- `robots.txt` configured to allow all crawlers

### AI Agent Configuration
- **robots.txt includes:** GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended
- **llms.txt:** Brand Information Optimization for LLM discoverability
- **humans.txt:** Team and attribution information

---

## Getting Started

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/cisnerosmusic/impulses-art-site.git
   ```

2. Open any `.html` file in your browser or serve locally:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. Visit `http://localhost:8000`

### Deploying to GitHub Pages
This repository is configured for automatic GitHub Pages deployment. Push to the `main` branch and GitHub will automatically build and deploy the site to the custom domain `impulses.online`.

---

## Configuration Files

### CNAME
Contains the custom domain: `impulses.online`

### site.webmanifest
Progressive Web App (PWA) manifest for app-like experiences on mobile devices.

### robots.txt
Allows all crawlers and specifically permits AI agents (GPTBot, ClaudeBot, etc.).

### sitemap.xml
XML sitemap for search engine discovery and indexing guidance.

### llms.txt
Machine-readable brand information for large language model optimization.

### humans.txt
Team attribution and project information.

---

## Privacy & Analytics

### Privacy Policy
- Located at `/privacy-policy.html`
- Marked with `noindex` meta tag
- Covers therapeutic confidentiality and data protection
- HIPAA-adjacent considerations for sensitive health information

### Analytics
- **Provider:** GoatCounter
- **Privacy Features:** No cookies, GDPR compliant, CCPA compliant
- Minimal tracking philosophy aligned with therapeutic ethics

---

## Contact & Social

### Direct Contact
- **Email:** ernest@ernestocisneros.art / ernestocisnerosmusic@gmail.com
- **Phone:** +1-786-816-9791

### Social Media
- **X/Twitter:** [@Impulses_ART](https://x.com/Impulses_ART)
- **Instagram:** [@impulses.art](https://instagram.com/impulses.art)
- **LinkedIn:** [Ernesto Cisneros](https://linkedin.com/company/impulses-art)
- **YouTube:** [@ernestocisneros](https://youtube.com/@ernestocisneros)

---

## License

### Content
All content, music, artwork, and photography are © Ernesto Cisneros Cino. Use is permitted for viewing and sharing only. Commercial reproduction or distribution requires explicit written permission.

### Code & Markup
The HTML/CSS/JavaScript code is shared for reference and educational purposes. While you're welcome to study the implementation, please respect the copyright and do not use for commercial reproduction without permission.

### Brand
The IMPULSES.ART name, logo, and branding are trademarked intellectual property. Use requires explicit permission from Ernesto Cisneros Cino.

---

## Contributing

This is a professional portfolio and service site. External contributions are not accepted at this time. For feedback or collaboration inquiries, please contact directly via email or phone.

---

## Support

If you appreciate IMPULSES.ART and the work being done to support healing through music therapy, consider:
- Following on social media
- Sharing with your community
- Attending workshops or sessions
- Referring friends and family

---

**Last Updated:** April 2026  
**Repository:** [github.com/cisnerosmusic/impulses-art-site](https://github.com/cisnerosmusic/impulses-art-site)
