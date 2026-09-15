import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import aegisLogo from './assets/aegis-logo-transparent.png'
import dedicatedDeskImg from './assets/Dedicated-desk-ADGM-Abu-Dhabi.webp'
import flexiDeskImg from './assets/aegis-coworking-hot-desk-ADGM.webp'
import './App.css'

const SITE_URL = 'https://officespaceinadgm.aegiscoworking.ae'
const MAIN_SITE = 'https://aegiscoworking.ae'

const nearby = [
  {
    title: 'Shopping',
    icon: '🛍️',
    items: ['Boutik Mall — fashion, electronics & daily essentials', 'The Galleria, Al Reem Island', 'Reem Central Mall'],
  },
  {
    title: 'Services',
    icon: '🏦',
    items: ['Abu Dhabi Commercial Bank (ADCB)', 'Al Ansari Exchange', 'Pharmacies & supermarkets'],
  },
  {
    title: 'Transport',
    icon: '🚗',
    items: ['Abu Dhabi public bus stops nearby', 'Direct access to main highways', '15 minutes to Abu Dhabi Airport'],
  },
]

const faqs = [
  {
    q: 'Flexi Desk vs Dedicated Desk in ADGM — what\u2019s the difference?',
    a: (
      <>
        A Flexi Desk in ADGM (also known as a Hot Desk) is a shared workspace
        in ADGM, ideal if you don't need the same spot every day. A Dedicated Desk in ADGM gives you a
        permanent workspace plus a registered ADGM business address. See the full{' '}
        <a href={`${MAIN_SITE}/pricing`}>pricing and plans</a>.
      </>
    ),
    schemaText:
      "A Flexi Desk (also known as a Hot Desk — they're the same thing) is a shared workspace in ADGM, ideal if you don't need the same spot every day. A Dedicated Desk gives you a permanent workspace plus a registered ADGM business address.",
  },
  {
    q: "What's included in the one-time Due Diligence Fee?",
    a: 'The AED 1,100 Due Diligence Fee covers the compliance and background checks ADGM requires before your licence and registered address can be activated. It is a one-time cost, separate from monthly rent.',
  },
  {
    q: 'Can I use this workspace in ADGM to register my business?',
    a: 'Yes. A Dedicated Desk in ADGM includes a registered business address that qualifies for your ADGM commercial licence application and meets the physical presence requirement, so you can operate fully compliant from day one.',
  },

   {
    q: 'How much does office space in ADGM cost?',
    a: 'Office space at Aegis Coworking in ADGM starts from AED 1,000 per month for a Flexi Desk. A Dedicated Desk starts from AED 1,150 per month. Both options are available at Addax Tower on Al Reem Island, Abu Dhabi.',
  },
  
  {
    q: 'Does Aegis Coworking offer more than desks — private offices too?',
    a: (
      <>
        Yes — beyond the dedicated and flexi desk in ADGM, Aegis Coworking is a full business
        center in ADGM offering{' '}
        <a href={`${MAIN_SITE}/private-office`}>Private Office</a> for teams that need a
        dedicated room, from AED 4,500 per month.
      </>
    ),
    schemaText:
      'Yes — beyond the dedicated and flexi desk in ADGM, Aegis Coworking is a full business center in ADGM offering private offices for teams that need a dedicated room, from AED 4,500/month.',
  },
  {
    q: 'Do I need a physical desk, or can I use a virtual office instead?',
    a: (
      <>
        No — ADGM accepts a registered virtual office address for most licence categories.
        Aegis Coworking's <a href={`${MAIN_SITE}/virtual-office`}>Virtual Office in ADGM</a>{' '}
        starts from AED 292 per month if you don't need a physical desk.
      </>
    ),
    schemaText:
      "No — ADGM accepts a registered virtual office address for most licence categories. Aegis Coworking's virtual office in ADGM starts from AED 292/month if you don't need a physical desk.",
  },
  {
    q: 'Can I book a meeting room at this business center in ADGM?',
    a: (
      <>
        Yes. <a href={`${MAIN_SITE}/meeting-room`}>Meeting room</a> at this business center in
        ADGM can be booked by the hour, with members receiving meeting room credits.
      </>
    ),
    schemaText:
      'Yes. Meeting rooms at this business center in ADGM can be booked by the hour, with members receiving meeting room credits.',
  },
  {
    q: 'Is there a day pass if I only need the workspace occasionally?',
    a: (
      <>
        Yes — a <a href={`${MAIN_SITE}/day-pass`}>Coworking Day Pass</a> is available from AED
        100, with no membership required.
      </>
    ),
    schemaText:
      'Yes — a coworking day pass is available from AED 100, with no membership required.',
  },
  {
    q: 'Does this workspace in ADGM include 24/7 access?',
    a: 'Yes — desk members get secure building access around the clock, every day of the week, not just during standard business hours.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const closeMenu = () => setMenuOpen(false)
  const toggleFaq = (index) => setOpenFaq((prev) => (prev === index ? null : index))

  return (
    <>
      <Helmet>
        <title>Office Space in ADGM | Dedicated & Flexi Desks | Aegis Coworking</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Get a dedicated or flexi desk in ADGM from AED 1,000/month — 24/7 access, a registered business address, and meeting rooms at Addax Tower. Book a tour today."
        />
       <link
  rel="canonical"
  href="https://officespaceinadgm.aegiscoworking.ae/"
/>

        <meta property="og:title" content="Office Space in ADGM | Aegis Coworking" />
        <meta
          property="og:description"
          content="Dedicated and flexi desks in ADGM, Addax Tower, from AED 1,000/month with 24/7 access."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Office Space in ADGM | Aegis Coworking" />
        <meta
          name="twitter:description"
          content="Dedicated and flexi desks in ADGM, Addax Tower, from AED 1,000/month with 24/7 access."
        />
        <meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${SITE_URL}/#business`,
            name: 'Aegis Coworking – Office Space in ADGM',
            url: `${SITE_URL}/`,
            logo: 'https://www.aegiscoworking.ae/logo.png',
            image: 'https://www.aegiscoworking.ae/og-image.jpg',
            telephone: '+971503926316',
            email: 'contact@aegiscoworking.ae',
            description:
              'Dedicated and flexi desk office space in ADGM, Addax Tower, Al Reem Island, with 24/7 access and an ADGM-compliant registered address.',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Office 3812, Addax Tower, Al Reem Island, Tamouh',
              addressLocality: 'Abu Dhabi',
              addressRegion: 'Abu Dhabi',
              addressCountry: 'AE',
            },
            geo: { '@type': 'GeoCoordinates', latitude: 24.4989303, longitude: 54.4031693 },
            hasMap: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
            openingHours: 'Mo-Su 00:00-23:59',
            sameAs: [
              'https://www.linkedin.com/company/aegis-coworking/',
              'https://www.instagram.com/aegis.coworking/',
            ],
            isPartOf: { '@id': 'https://www.aegiscoworking.ae/#organization' },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.aegiscoworking.ae/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Office Space in ADGM',
                item: `${SITE_URL}/`,
              },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Dedicated & Flexi Desk Coworking Space',
            name: 'Office Space in ADGM',
            description:
              'Furnished office space in ADGM, Addax Tower, with dedicated and flexi desk options and 24/7 access.',
            provider: { '@id': `${SITE_URL}/#business` },
            areaServed: 'Abu Dhabi',
            offers: [
              {
                '@type': 'Offer',
                name: 'Dedicated Desk',
                price: '1150',
                priceCurrency: 'AED',
                availability: 'https://schema.org/InStock',
              },
              {
                '@type': 'Offer',
                name: 'Flexi Desk',
                price: '1000',
                priceCurrency: 'AED',
                availability: 'https://schema.org/InStock',
              },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.schemaText || f.a },
            })),
          })}
        </script>
      </Helmet>

      <a
        href="https://wa.me/971503926316"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat with Aegis Coworking on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.646 4.53 1.77 6.4L4 29l7.79-1.73A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-1.97 0-3.85-.52-5.48-1.5l-.39-.23-4.63 1.03 1-4.5-.25-.4A9.63 9.63 0 0 1 5.3 15c0-5.9 4.8-10.7 10.7-10.7S26.7 9.1 26.7 15 21.9 24.7 16.004 24.7Zm5.86-8.01c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.73-1.77-1-2.42-.26-.63-.53-.55-.73-.56h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.67 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.46 5.48 4.85.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>

      <nav className="navbar">
        <a href="/" className="logo-link" onClick={closeMenu}>
          <div className="logo">
            <img
              src={aegisLogo}
              alt="Aegis Coworking"
              className="logo-img"
              width="1254"
              height="1254"
              decoding="async"
            />
            AEGIS <span className="logo-accent">COWORKING</span>
          </div>
        </a>

        <ul className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
          <li>
            <a href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
          </li>
          <li>
            <a href="#find-us" onClick={closeMenu}>Find Us</a>
          </li>
          <li className="nav-mobile-cta">
            <a href="https://aegiscoworking.ae" onClick={closeMenu}>
              <button className="btn-primary">VISIT AEGIS COWORKING</button>
            </a>
          </li>
        </ul>

        <a href="https://aegiscoworking.ae" className="nav-desktop-cta">
          <button className="btn-primary">VISIT AEGIS COWORKING</button>
        </a>

        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <section className="hero">
        <span className="eyebrow">ADGM · ADDAX TOWER · AL REEM ISLAND</span>
        <h1>OFFICE SPACE in ADGM</h1>
        <p className="hero-subtitle">Dedicated Desk &amp; Flexi Desk in ADGM from AED 1,000/month</p>
        <p className="hero-desc">
          A business center in ADGM and coworking space in ADGM at Addax Tower — with a
          professional business address, 24/7 access, meeting-room access, and everything you
          need to register and run your business. 
        </p>
        <a href="https://aegiscoworking.ae/contact" className="btn-primary">
          REQUEST QUOTE
        </a>
      </section>

      <section id="services" className="pricing">
        <span className="eyebrow">SERVICES</span>
        <h2>Dedicated Desk &amp; Flexi Desk in ADGM</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-card-image">
              <img
                src={dedicatedDeskImg}
                alt="Dedicated desk workspace in ADGM, Addax Tower"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="price-card-body">
              <h3>Dedicated Desk in ADGM</h3>
              <p className="price-card-label">Your own permanent workspace</p>
              <p className="price-desc">
                A Dedicated Desk in ADGM gives you a permanent workstation at Aegis Coworking in Addax Tower. The Dedicated Desk is available from AED 1,150 per month.{' '}
                <strong>
                  Only AED 150 more than a Flexi Desk — making it an excellent option for regular
                  users.
                </strong>
              </p>
              <p className="price-desc">
               No hidden charges apply and only due diligence fee applies for one time only. Book your ADGM Coworking Space with Aegis Coworking that sits in office 3812, Addax Tower, Al Reem Island.
              </p>
              <p className="price-rent-label">DISCOUNTED PRICE:</p>
              <p className="price">AED 1,150</p>
              <p className="price-period">Monthly</p>
              <hr className="price-divider" />
              <div className="price-perks">
                <div>✓ No Deposit</div>
                <div>✓ No Admin Fees</div>
                <div>✓ No Setup Fees</div>
                <div>✓ Free Registration</div>
              </div>
              <a href="https://aegiscoworking.ae/contact" className="price-card-link">
                Request Quote &gt;
              </a>
            </div>
          </div>

          <div className="price-card">
            <div className="price-card-image">
              <img
                src={flexiDeskImg}
                alt="Flexi desk, also known as hot desk, workspace in ADGM, Addax Tower"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="price-card-body">
              <h3>Flexi Desk in ADGM (Hot Desk)</h3>
              <p className="price-card-label">Coworking space in Al Reem Island</p>
              <p className="price-desc">
               A Flexi Desk provides flexible workspace at Aegis Coworking for people who don't need a permanently assigned workstation. The Flexi Desk starts from AED 1,000 per month.
              </p>
              <p className="price-desc">
                Book your ADGM Coworking Space with Aegis Coworking that sits in office 3812,
                Addax Tower, Al Reem Island.{' '}
                <strong>Need your own permanent desk? Upgrade to a Dedicated Desk for AED 150
                more per month.</strong>
              </p>
              <p className="price-rent-label">DISCOUNTED PRICE:</p>
              <p className="price">AED 1,000</p>
              <p className="price-period">Monthly</p>
              <hr className="price-divider" />
              <div className="price-perks">
                <div>✓ No Deposit</div>
                <div>✓ No Admin Fees</div>
                <div>✓ No Setup Fees</div>
                <div>✓ Free Registration</div>
              </div>
              <a href="https://aegiscoworking.ae/pricing" className="price-card-link">
                Other Discounts &gt;
              </a>
            </div>
          </div>
        </div>
       
      </section>

      <section id="about" className="about">
        <span className="eyebrow">WHO WE ARE</span>
        <h2>A Business Center in ADGM, Built for Growing Businesses</h2>
        <p className="about-lead">
          Aegis Coworking is a business center in ADGM at Addax Tower, Al Reem Island — built
          around one idea: registering in ADGM shouldn't mean choosing between a prestigious
          address and an affordable one. See our <a href="#services">desk pricing</a> to compare
          options.
        </p>
        <div className="about-grid">
          <div className="about-block">
            <div className="about-block-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              We make ADGM easier to operate in, whatever stage your business is at — a dedicated
              desk in ADGM or private office for teams that need a fixed base, and a virtual
              office for companies that need a real business address without renting a desk. Need
              to meet a client properly? Our meeting room in ADGM covers that too.
            </p>
          </div>
          <div className="about-block">
            <div className="about-block-icon">🤝</div>
            <h3>Our Values</h3>
            <p>
              Professionalism, flexibility, integrity, and community — run as a business center
              in ADGM you can rely on, and one of the more affordable, low-cost workspace options
              in ADGM, because values shouldn't come with a premium price tag.
            </p>
          </div>
          <div className="about-block">
            <div className="about-block-icon">📍</div>
            <h3>Where We Are</h3>
            <p>
              Office 3812, Addax Tower, Al Reem Island — a registered ADGM business address with
              everything a startup needs for its ADGM tech startup licence, from a flexi desk in
              ADGM to meeting rooms.
            </p>
          </div>
        </div>
      </section>

      
      <section id="faq" className="faq">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className={`faq-item ${openFaq === index ? 'faq-item-open' : ''}`} key={item.q}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                {item.q}
                <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && <p className="faq-answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <span className="eyebrow">GET STARTED</span>
        <h2>Ready to see it for yourself?</h2>
        <p>Book a free tour and experience the space before you commit to anything.</p>
        <a href="https://aegiscoworking.ae/contact" className="btn-primary">
          Book a Tour
        </a>
      </section>

      <section id="find-us" className="location-highlight">
        <div className="location-content">
          <div className="location-text">
            <span className="contact-eyebrow">BUSINESS ADDRESS</span>
            <h2>Located in Addax Tower, Al Reem Island</h2>
            <p>
              This workspace in ADGM sits in Addax Tower, Al Reem Island, within ADGM, Abu
              Dhabi's leading financial free zone. Easy access to banks, restaurants, business
              hubs, and the waterfront makes it a convenient business center in ADGM for
              startups, freelancers, and small businesses. Have questions? Check our{' '}
              <a href="#faq">FAQs</a>.
            </p>
            <div className="address-card">
              <div className="address-icon">📍</div>
              <div>
                <strong>Addax Tower</strong>
                <span>Al Reem Island, Abu Dhabi, United Arab Emirates</span>
              </div>
            </div>
            <div className="location-stats">
              <div className="location-stat">
                <div className="stat-icon">✈️</div>
                <strong>15 minutes</strong>
                <span>To Abu Dhabi Airport</span>
              </div>
              <div className="location-stat">
                <div className="stat-icon">🏖️</div>
                <strong>5 minutes</strong>
                <span>To the Waterfront</span>
              </div>
              <div className="location-stat">
                <div className="stat-icon">🔑</div>
                <strong>24/7</strong>
                <span>Member Access</span>
              </div>
            </div>
          </div>
          <div className="location-map-frame">
            <iframe
              title="Addax Tower Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.6108984947837!2d54.400594374417075!3d24.498935159630403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67ada3bb067b%3A0x5674c5ba5c0f061e!2sAegis%20Coworking%20Space%20ADGM!5e0!3m2!1sen!2s!4v1786701334186!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="office-footer">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="logo footer-logo">
              AEGIS <span className="logo-accent">COWORKING</span>
            </div>
            <p>Business center in ADGM · Addax Tower, Al Reem Island, Abu Dhabi.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/aegis.coworking/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/aegis-coworking/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
                  <rect x="6.5" y="10" width="2.5" height="8" fill="currentColor" />
                  <circle cx="7.75" cy="6.75" r="1.5" fill="currentColor" />
                  <path d="M11.5 18V10H14V11.2C14.5 10.4 15.5 9.7 17 9.7C19 9.7 20 11 20 13.3V18H17.5V13.7C17.5 12.5 17 11.8 16 11.8C15 11.8 14.3 12.5 14.3 13.7V18H11.5Z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.facebook.com/aegis.coworking" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <path d="M14.5 8.5H13C12.5 8.5 12 9 12 9.5V11H14.5L14 13.5H12V19H9.5V13.5H8V11H9.5V9.2C9.5 7.4 10.8 6 12.7 6H14.5V8.5Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3>QUICK LINKS</h3>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#find-us">Find Us</a>
          </div>

          <div className="footer-col">
            <h3>OUR SPACES</h3>
            <a href="https://aegiscoworking.ae/office-space">Office Spaces</a>
            <a href="https://aegiscoworking.ae/private-office">Private Office</a>
            <a href="https://aegiscoworking.ae/virtual-office">Virtual Office</a>
            <a href="https://aegiscoworking.ae/meeting-room">Meeting Room</a>
            <a href="https://aegiscoworking.ae/day-pass">Day Pass</a>
            <a href="https://aegiscoworking.ae/about">About Us</a>
          </div>

          <div className="footer-col">
            <h3>CONTACT US</h3>
            <p><strong>Phone:</strong> <a href="tel:+971503926316">+971 50 392 6316</a></p>
            <p><strong>Email:</strong> <a href="mailto:contact@aegiscoworking.ae">contact@aegiscoworking.ae</a></p>
            <p><strong>Address:</strong> 3812 Addax Tower, Al Reem Island RT3, Abu Dhabi</p>
          </div>

          <div className="footer-col">
            <h3>OPENING HOURS</h3>
            <p>24/7 Access for Members</p>
            <p>Tours: Mon–Fri</p>
            <p>Timings: 9:00 AM – 6:00 PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Aegis Coworking. All rights reserved.</p>
          <p>
            <a href="https://aegiscoworking.ae/terms">Terms &amp; Conditions</a> ·{' '}
            <a href="https://aegiscoworking.ae/privacy">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
