import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import aegisLogo from './assets/aegis-logo-transparent.png'
import dedicatedDeskImg from './assets/Dedicated-desk-ADGM-Abu-Dhabi.webp'
import flexiDeskImg from './assets/aegis-coworking-hot-desk-ADGM.webp'
import privateOfficeImg from './assets/Aegis coworking private office adgm.webp'
import virtualOfficeImg from './assets/Aegis coworking virtual office adgm.webp'
import meetingRoomImg from './assets/Meeting room adgm abu dhabi.webp'
import dayPassImg from './assets/aegis-coworking-day-pass-adgm.webp'
import './App.css'

const SITE_URL = 'https://officespaceinadgm.aegiscoworking.ae'
const MAIN_SITE = 'https://www.aegiscoworking.ae'
const WHATSAPP = 'https://wa.me/971503926316'

const services = [
  {
    id: 'hot-desk',
    image: flexiDeskImg,
    title: 'Hot Desk ADGM',
    price: 'AED 1,000 per month',
    tag: 'Flexible seating',
    text: 'A flexible shared workspace for professionals who want a ready-to-use desk without committing to a fixed workstation.',
    href: `${MAIN_SITE}/office-space`,
    bullets: ['Shared workspace', 'Flexible seating', 'Professional environment', '24/7 member access'],
  },
  {
    id: 'dedicated-desk',
    image: dedicatedDeskImg,
    title: 'Dedicated Desk ADGM',
    price: 'AED 1,150 per month',
    tag: 'Your fixed workspace',
    text: 'A dedicated workstation for regular users who want a consistent place to work, with an ADGM business address included with the plan.',
    href: `${MAIN_SITE}/office-space`,
    bullets: ['Permanent workstation', 'Registered ADGM business address', '24/7 access', 'Lockable storage'],
  },
  {
    id: 'private-office',
    image: privateOfficeImg,
    title: 'Private Office ADGM',
    price: 'AED 4,500 per month',
    tag: 'Privacy for teams',
    text: 'A private, lockable office for businesses that need a dedicated room and a professional workspace in Addax Tower.',
    href: `${MAIN_SITE}/private-office`,
    bullets: ['Private lockable room', 'Business address included', 'Suitable for teams', 'Professional client environment'],
  },
  {
    id: 'virtual-office',
    image: virtualOfficeImg,
    title: 'Virtual Office ADGM',
    price: 'AED 292 per month',
    tag: 'Professional presence',
    text: 'A virtual-office option for businesses that need a professional presence without renting a physical desk.',
    href: `${MAIN_SITE}/virtual-office`,
    bullets: ['Professional business presence', 'No physical desk required', 'Monthly option', 'Useful for remote businesses'],
  },
  {
    id: 'meeting-room',
    image: meetingRoomImg,
    title: 'Meeting Room ADGM',
    price: 'Contact for rates',
    tag: 'Meet clients professionally',
    text: 'Bookable meeting rooms for client meetings, interviews, discussions and business appointments.',
    href: `${MAIN_SITE}/meeting-room`,
    bullets: ['Hourly booking', 'Meeting screens', 'WiFi', 'Members can use meeting credits'],
  },
  {
    id: 'day-pass',
    image: dayPassImg,
    title: 'Day Pass ADGM',
    price: 'AED 100 per day',
    tag: 'Workspace for one day',
    text: 'A simple option when you need a professional workspace for a single day without a monthly commitment.',
    href: `${MAIN_SITE}/day-pass`,
    bullets: ['One-day access', 'No monthly membership required', 'Ready-to-use workspace', 'Ideal for visitors and occasional users'],
  },
]

const requirements = [
  {
    title: 'Do you need a physical office in ADGM?',
    text: 'It depends on your entity type, activity and applicable ADGM requirements. Confirm the current requirement for your specific business before choosing a workspace plan.',
  },
  {
    title: 'Can coworking space be used for an ADGM business?',
    text: 'Workspace arrangements can differ by licence and business activity. Aegis can explain what each available plan provides, while your final eligibility should be confirmed against the current ADGM requirements.',
  },
  {
    title: 'When does a Dedicated Desk make sense?',
    text: 'A Dedicated Desk suits someone who works regularly, wants a fixed workstation and needs the business-address features included with that plan.',
  },
  {
    title: 'What should you check before choosing?',
    text: 'Check your licence category, address requirements, workspace type, access needs, team size, meeting requirements and total recurring costs before committing.',
  },
]

const pricing = [
  ['Day Pass', 'AED 100', 'per day'],
  ['Flexi Desk / Hot Desk', 'AED 1,000', 'per month'],
  ['Dedicated Desk', 'AED 1,150', 'per month'],
  ['Virtual Office', 'AED 292', 'per month'],
  ['Private Office', 'AED 4,500', 'per month'],
  ['Meeting Room', 'Contact', ''],
]

const audiences = [
  ['Founders & entrepreneurs', 'Flexible desks, dedicated workspaces and private offices for different stages of business.'],
  ['Freelancers & consultants', 'Professional workspace when you need a place to focus, meet clients or work away from home.'],
  ['SMEs & growing teams', 'Move from individual desks to private office space as your team requirements change.'],
  ['Remote professionals', 'Use a Day Pass or flexible desk when you need a professional work environment.'],
  ['International businesses', 'Explore workspace and business-presence options in an ADGM location.'],
  ['Finance & professional services', 'Client-facing workspace and meeting facilities in Addax Tower.'],
]

const problems = [
  ['I only need workspace for one day.', 'Day Pass', `${MAIN_SITE}/day-pass`],
  ['I want a flexible monthly desk.', 'Flexi Desk / Hot Desk', '#services'],
  ['I need my own fixed workstation.', 'Dedicated Desk ADGM', '#services'],
  ['I need privacy for my team.', 'Private Office ADGM', `${MAIN_SITE}/private-office`],
  ['I need a professional business presence.', 'Virtual Office ADGM', `${MAIN_SITE}/virtual-office`],
  ['I need somewhere to meet clients.', 'Meeting Room ADGM', `${MAIN_SITE}/meeting-room`],
]

const blogGuides = [
  {
    title: 'Affordable Coworking on Al Reem Island',
    text: 'A practical guide to finding flexible workspace around Al Reem Island and ADGM, including what to consider when comparing desk and office options.',
  },
  {
    title: 'ADGM Coworking, Visa Quota & Employees Per Desk',
    text: 'Aegis explains the relationship between workspace arrangements and employee capacity questions, helping businesses understand what they should verify before choosing a plan.',
  },
  {
    title: 'Addax Tower ADGM Business Workspace Location',
    text: 'A location-focused guide explaining why Addax Tower matters when looking for workspace in ADGM and Al Reem Island.',
  },
  {
    title: 'ADGM vs DIFC: Where Does Workspace Cost Fit Into the Decision?',
    text: 'A comparison guide for businesses considering the two financial-centre locations, with workspace cost as one part of the wider decision.',
  },
  {
    title: 'Do You Need One Dedicated Desk Per Employee in ADGM?',
    text: 'A guide focused on the difference between physical seating and business capacity, and the questions businesses should check for their specific setup.',
  },
]

const faqs = [
  ['What is a coworking space in ADGM?', 'A coworking space in ADGM is a shared professional workspace where businesses and professionals can use desks, offices and meeting facilities instead of taking a conventional office lease.'],
  ['How much does coworking in ADGM cost?', 'At Aegis, current listed prices include AED 100/day for a Day Pass, AED 1,000 per month for a Flexi Desk, AED 1,150 per month for a Dedicated Desk, AED 4,500 per month for a Private Office and AED 292 per month for a Virtual Office.'],
  ['What is a Hot Desk in ADGM?', 'A Hot Desk is a shared, unassigned workspace. At Aegis, the Hot Desk/Flexi Desk option is AED 1,000 per month.'],
  ['What is a Dedicated Desk in ADGM?', 'A Dedicated Desk is a fixed workstation assigned to you. Aegis currently lists it at AED 1,150 per month, with a registered ADGM business address included with the plan.'],
  ['What is the difference between a Hot Desk and a Dedicated Desk?', 'A Hot Desk/Flexi Desk is shared and flexible. A Dedicated Desk gives you a consistent workstation and includes the business-address feature described for that plan.'],
  ['How much is a Private Office in ADGM?', 'Aegis currently lists Private Office space from AED 4,500 per month. Private offices are intended for businesses and teams that need a private, lockable room.'],
  ['How much is a Virtual Office in ADGM?', 'Aegis currently lists its Virtual Office option from AED 292 per month.'],
  ['Does Aegis offer meeting rooms?', 'Yes. Meeting rooms can be booked by the hour, with meeting-room credits available for members.'],
  ['Does Aegis offer a Day Pass?', 'Yes. The current listed Day Pass price is AED 100 per day.'],
  ['Where is Aegis Coworking located?', 'Aegis Coworking is at Office 3812, Addax Tower, Al Reem Island, Abu Dhabi, UAE.'],
  ['Is Aegis Coworking at Addax Tower?', 'Yes. Aegis Coworking is located in Addax Tower on Al Reem Island.'],
  ['How do I book a workspace?', 'Contact Aegis to discuss the workspace you need or arrange a tour.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const closeMenu = () => setMenuOpen(false)
  const toggleFaq = (index) => setOpenFaq((current) => (current === index ? null : index))

  const faqSchema = faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  }))

  const serviceOffers = pricing.slice(0, 5).map(([name, price, period]) => ({
    '@type': 'Offer',
    name,
    price: price.replace(/[^0-9.]/g, ''),
    priceCurrency: 'AED',
    description: `${name} at Aegis Coworking, Addax Tower, Abu Dhabi.`,
    url: `${SITE_URL}/#services`,
  }))

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Coworking Space in ADGM, Abu Dhabi | Desks & Offices</title>
        <meta
          name="description"
          content="Find coworking space in ADGM at Addax Tower, Abu Dhabi. Compare Hot Desk, Flexi Desk, Dedicated Desk, Private Office, Virtual Office, meeting rooms and Day Pass options."
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Coworking Space in ADGM, Abu Dhabi | Desks & Offices" />
        <meta
          property="og:description"
          content="Explore ADGM workspace at Addax Tower with flexible desks, dedicated desks, private offices, virtual-office options and meeting facilities."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${MAIN_SITE}/og-image.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coworking Space in ADGM, Abu Dhabi | Desks & Offices" />
        <meta
          name="twitter:description"
          content="Explore coworking space and office space in ADGM at Addax Tower, Al Reem Island."
        />
        <meta name="twitter:image" content={`${MAIN_SITE}/og-image.jpg`} />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                name: 'Coworking Space ADGM',
                url: `${SITE_URL}/`,
                publisher: { '@id': `${SITE_URL}/#organization` },
              },
              {
                '@type': 'Organization',
                '@id': `${SITE_URL}/#organization`,
                name: 'Aegis Coworking',
                url: MAIN_SITE,
                logo: aegisLogo,
                sameAs: [
                  'https://www.linkedin.com/company/aegis-coworking/',
                  'https://www.instagram.com/aegis.coworking/',
                  'https://www.facebook.com/aegis.coworking',
                ],
              },
              {
                '@type': 'LocalBusiness',
                '@id': `${SITE_URL}/#business`,
                name: 'Aegis Coworking',
                url: SITE_URL,
                image: `${MAIN_SITE}/og-image.jpg`,
                telephone: '+971503926316',
                email: 'contact@aegiscoworking.ae',
                description: 'Coworking space, desks, private offices, virtual-office options and meeting facilities in Addax Tower, Al Reem Island, Abu Dhabi.',
                priceRange: 'AED 100–4500',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Office 3812, Addax Tower, Al Reem Island',
                  addressLocality: 'Abu Dhabi',
                  addressRegion: 'Abu Dhabi',
                  addressCountry: 'AE',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 24.4989303,
                  longitude: 54.4031693,
                },
                hasMap: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
                sameAs: [
                  'https://www.linkedin.com/company/aegis-coworking/',
                  'https://www.instagram.com/aegis.coworking/',
                  'https://www.facebook.com/aegis.coworking',
                ],
              },
              {
                '@type': 'WebPage',
                '@id': `${SITE_URL}/#webpage`,
                url: SITE_URL,
                name: 'Coworking Space in ADGM, Abu Dhabi',
                isPartOf: { '@id': `${SITE_URL}/#website` },
                about: { '@id': `${SITE_URL}/#business` },
                mainEntity: { '@id': `${SITE_URL}/#business` },
              },
              {
                '@type': 'Service',
                name: 'Coworking Space in ADGM',
                serviceType: 'Flexible workspace',
                provider: { '@id': `${SITE_URL}/#business` },
                areaServed: { '@type': 'City', name: 'Abu Dhabi' },
                offers: serviceOffers,
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: SITE_URL,
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqSchema,
              },
            ],
          })}
        </script>
      </Helmet>

      <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aegis Coworking on WhatsApp">
        <span>WA</span>
      </a>

      <header className="site-header">
        <nav className="navbar" aria-label="Primary navigation">
          <a href="/" className="brand" onClick={closeMenu}>
            <img src={aegisLogo} alt="Aegis Coworking" width="56" height="56" />
            <span>
              <strong>AEGIS</strong>
              <small>COWORKING</small>
            </span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="https://www.aegiscoworking.ae/office-space" onClick={closeMenu}>Office Space</a>
            <a href="https://www.aegiscoworking.ae/virtual-office" onClick={closeMenu}>Virtual Office</a>
            <a href="https://www.aegiscoworking.ae/private-office" onClick={closeMenu}>Private Office</a>
            <a href="https://www.aegiscoworking.ae/meeting-room" onClick={closeMenu}>Meeting Room</a>
            <a href="https://www.aegiscoworking.ae/day-pass" onClick={closeMenu}>Day Pass</a>
            <a href="https://www.aegiscoworking.ae/contact" onClick={closeMenu}>Contact Us</a>
            <a className="nav-cta" href={`${MAIN_SITE}/contact`} onClick={closeMenu}>Book a Tour</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="eyebrow">ADGM · ADDAX TOWER · AL REEM ISLAND</p>
              <h1>Your ADGM Workspace Starts Here</h1>
              <p className="hero-lead">
                Find a coworking space in ADGM, Abu Dhabi that fits the way you work —
                from a Hot Desk or Flexi Desk to a Dedicated Desk, Private Office,
                Virtual Office, meeting room or Day Pass.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#services">Explore ADGM Workspace</a>
                <a className="button button-light" href={`${MAIN_SITE}/contact`}>Book a Tour</a>
              </div>

              <div className="hero-proof" aria-label="Workspace starting prices">
                <div><strong>AED 100</strong><span>Day Pass</span></div>
                <div><strong>AED 1,000</strong><span>Flexi Desk</span></div>
                <div><strong>AED 1,150</strong><span>Dedicated Desk</span></div>
                <div><strong>AED 4,500</strong><span>Private Office</span></div>
              </div>
            </div>

            <div className="hero-visual">
              <img src={flexiDeskImg} alt="Coworking workspace at Aegis Coworking in Addax Tower, ADGM" />
              <div className="hero-location-card">
                <strong>Addax Tower</strong>
                <span>Al Reem Island · ADGM</span>
              </div>
            </div>
          </div>
        </section>

        <section className="answer-section section-narrow">
          <p className="eyebrow">QUICK ANSWER</p>
          <h2>Looking for Coworking Space in ADGM? Start Here.</h2>
          <p>
            Aegis Coworking provides flexible workspace at Addax Tower, Al Reem Island,
            Abu Dhabi. Options include Hot Desk/Flexi Desk, Dedicated Desk, Private Office,
            Virtual Office, meeting rooms and Day Pass access.
            Current listed workspace prices start at AED 100/day.
          </p>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading">
            <p className="eyebrow">WORKSPACE OPTIONS</p>
            <h2>Explore Coworking &amp; Office Space in ADGM</h2>
            <p>
              Choose a workspace around how often you work, how much privacy you need,
              whether you need a fixed desk, and whether your business needs meeting or
              meeting facilities.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" id={service.id} key={service.id}>
                <div className="service-image">
                  {service.image ? (
                    <img src={service.image} alt={`${service.title} at Aegis Coworking in Addax Tower`} loading="lazy" decoding="async" />
                  ) : (
                    <div className="image-placeholder" aria-hidden="true">PRESENT</div>
                  )}
                </div>
                <div className="service-body">
                  <p className="service-tag">{service.tag}</p>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <div className="service-price">{service.price}</div>
                  <ul>
                    {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <a className="text-link" href={service.href}>
                    Explore this option <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="requirements" className="section split-section">
          <div className="section-heading">
            <p className="eyebrow">ADGM WORKSPACE GUIDE</p>
            <h2>Before You Choose an ADGM Workspace, Know What to Check</h2>
            <p>
              Workspace and address requirements can depend on the business, licence
              category and activity. Use these questions as a starting point and verify
              the current requirements that apply to your entity.
            </p>
          </div>
          <div className="info-list">
            {requirements.map((item) => (
              <article className="info-item" key={item.title}>
                <span>01</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section business-centre-section">
          <div className="section-heading centered">
            <p className="eyebrow">BUSINESS CENTRE ADGM</p>
            <h2>Need a Business Centre in ADGM? Look Beyond the Desk.</h2>
            <p>
              A business centre in ADGM can bring workspace, business-presence options
              and meeting facilities together in one professional location. At Aegis,
              these options are available at Addax Tower on Al Reem Island.
            </p>
          </div>
          <div className="three-column">
            <article>
              <span className="number">01</span>
              <h3>Workspace</h3>
              <p>Choose flexible seating, a fixed desk or a private office based on your working needs.</p>
            </article>
            <article>
              <span className="number">02</span>
              <h3>Business Presence</h3>
              <p>Explore the business-address features associated with the relevant Aegis plan.</p>
            </article>
            <article>
              <span className="number">03</span>
              <h3>Meeting Facilities</h3>
              <p>Use meeting rooms when your business needs a more formal setting.</p>
            </article>
          </div>
        </section>

        <section id="pricing" className="section pricing-section">
          <div className="section-heading">
            <p className="eyebrow">CURRENT LISTED PRICES</p>
            <h2>What Does an ADGM Workspace Actually Cost?</h2>
            <p>
              Use the table below as a quick price reference. Meeting facilities are quoted separately.
            </p>
          </div>

          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr><th>Workspace</th><th>Starting price</th></tr>
              </thead>
              <tbody>
                {pricing.map(([name, price, period]) => (
                  <tr key={name}>
                    <td>{name}</td>
                    <td><strong>{price}</strong> {period && <span>{period}</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pricing-note">
            <strong>Pricing note:</strong> Confirm current inclusions, eligibility and any applicable
            one-time fees with Aegis before purchase or registration.
          </div>
        </section>

        <section className="section comparison-section">
          <div className="section-heading">
            <p className="eyebrow">COMPARE</p>
            <h2>Which ADGM Workspace Fits the Way You Work?</h2>
          </div>
          <div className="comparison-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Need</th>
                  <th>Day Pass</th>
                  <th>Flexi Desk</th>
                  <th>Dedicated Desk</th>
                  <th>Private Office</th>
                  <th>Virtual Office</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>One-day workspace</td><td>✓</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
                <tr><td>Flexible seating</td><td>✓</td><td>✓</td><td>—</td><td>—</td><td>—</td></tr>
                <tr><td>Fixed workstation</td><td>—</td><td>—</td><td>✓</td><td>—</td><td>—</td></tr>
                <tr><td>Private room</td><td>—</td><td>—</td><td>—</td><td>✓</td><td>—</td></tr>
                <tr><td>Business-address feature</td><td>—</td><td>—</td><td>Included</td><td>Included</td><td>Plan dependent</td></tr>
                <tr><td>Best suited for</td><td>Visitors</td><td>Flexible users</td><td>Regular users</td><td>Teams</td><td>Remote businesses</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="section decision-section">
          <div className="section-heading centered">
            <p className="eyebrow">NOT SURE WHERE TO START?</p>
            <h2>Got an ADGM Workspace Problem? Start Here.</h2>
          </div>
          <div className="problem-grid">
            {problems.map(([question, answer, href]) => (
              <a href={href} className="problem-card" key={question}>
                <span>“</span>
                <h3>{question}</h3>
                <strong>{answer} →</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="section audience-section">
          <div className="section-heading centered">
            <p className="eyebrow">BUILT AROUND REAL WORK</p>
            <h2>Workspace for the Way You Work</h2>
          </div>
          <div className="audience-grid">
            {audiences.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="location" className="section location-section">
          <div className="location-copy">
            <p className="eyebrow">ADDAX TOWER · AL REEM ISLAND</p>
            <h2>Work Where ADGM Meets Al Reem Island</h2>
            <p>
              Aegis Coworking is located at Office 3812, Addax Tower, Al Reem Island,
              Abu Dhabi. The location gives businesses a professional workspace in the
              ADGM area with access to coworking, desks, offices and meeting facilities.
            </p>
            <div className="address-box">
              <strong>Aegis Coworking</strong>
              <span>Office 3812, Addax Tower</span>
              <span>Al Reem Island, Abu Dhabi, UAE</span>
            </div>
            <div className="location-links">
              <a href="https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z" target="_blank" rel="noopener noreferrer">Open in Google Maps →</a>
              <a href={`${MAIN_SITE}/contact`}>Get directions / contact →</a>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title="Aegis Coworking location at Addax Tower, Al Reem Island"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.6108984947837!2d54.400594374417075!3d24.498935159630403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67ada3bb067b%3A0x5674c5ba5c0f061e!2sAegis%20Coworking%20Space%20ADGM!5e0!3m2!1sen!2s!4v1786701334186!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <section className="section facilities-section">
          <div className="section-heading">
            <p className="eyebrow">AMENITIES & FACILITIES</p>
            <h2>Everything You Need to Get Business Done</h2>
          </div>
          <div className="facility-grid">
            <article><h3>Work-Ready Spaces</h3><p>Furnished coworking areas with practical work facilities.</p></article>
            <article><h3>Meeting Facilities</h3><p>Meeting rooms for client conversations and business appointments.</p></article>
            <article><h3>Professional Environment</h3><p>A business-focused environment in Addax Tower, Al Reem Island.</p></article>
            <article><h3>Flexible Access</h3><p>Desk members have 24/7 access according to their applicable plan.</p></article>
            <article><h3>Business Support</h3><p>Choose a workspace and contact Aegis for help understanding the available options.</p></article>
          </div>
        </section>

        <section className="section guides-section">
          <div className="section-heading">
            <p className="eyebrow">AEGIS KNOWLEDGE HUB</p>
            <h2>The ADGM Workspace Questions People Actually Ask</h2>
            <p>
              These guides provide deeper context around ADGM coworking, dedicated desks,
              workspace costs, Addax Tower and business setup questions.
            </p>
          </div>
          <div className="guides-grid">
            {blogGuides.map((guide) => (
              <article className="guide-card" key={guide.title}>
                <p className="guide-label">AEGIS GUIDE</p>
                <h3>{guide.title}</h3>
                <p>{guide.text}</p>
                <a className="text-link" href={`${MAIN_SITE}/blogs`}>Read the full Aegis guide →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="section-heading centered">
            <p className="eyebrow">FAQ</p>
            <h2>Still Wondering How ADGM Workspace Works?</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <article className={`faq-item ${openFaq === index ? 'open' : ''}`} key={question}>
                <button type="button" onClick={() => toggleFaq(index)} aria-expanded={openFaq === index}>
                  <span>{question}</span>
                  <b>{openFaq === index ? '−' : '+'}</b>
                </button>
                {openFaq === index && <div className="faq-answer"><p>{answer}</p></div>}
              </article>
            ))}
          </div>
        </section>

        <section className="final-cta">
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h2>Find the ADGM Workspace That Fits Your Business.</h2>
          <p>
            Explore desks, offices and meeting facilities at Aegis Coworking in Addax Tower,
            Al Reem Island, Abu Dhabi.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={`${MAIN_SITE}/contact`}>Book a Tour</a>
            <a className="button button-outline-light" href={MAIN_SITE}>Explore Aegis Coworking</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand footer-brand-link" href={MAIN_SITE}>
              <img src={aegisLogo} alt="Aegis Coworking" width="52" height="52" />
              <span><strong>AEGIS</strong><small>COWORKING</small></span>
            </a>
            <p>Business centre in ADGM · Addax Tower, Al Reem Island, Abu Dhabi.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/aegis-coworking/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/aegis.coworking/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/aegis.coworking" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>

          <div>
            <h3>WORKSPACE</h3>
            <a href="#services">Coworking Space ADGM</a>
            <a href="#hot-desk">Hot Desk ADGM</a>
            <a href="#dedicated-desk">Dedicated Desk ADGM</a>
            <a href={`${MAIN_SITE}/private-office`}>Private Office ADGM</a>
            <a href={`${MAIN_SITE}/virtual-office`}>Virtual Office ADGM</a>
            <a href={`${MAIN_SITE}/meeting-room`}>Meeting Room ADGM</a>
            <a href={`${MAIN_SITE}/day-pass`}>Day Pass ADGM</a>
          </div>

          <div>
            <h3>ADGM</h3>
            <a href="#requirements">ADGM Workspace Guide</a>
            <a href="#pricing">ADGM Workspace Prices</a>
            <a href="#services">ADGM Office Space</a>
            <a href="#location">Business Centre ADGM</a>
            <a href="#location">Business Address</a>
          </div>

          <div>
            <h3>LOCATION</h3>
            <a href="#location">Addax Tower</a>
            <a href="#location">Al Reem Island</a>
            <a href="#location">Abu Dhabi</a>
            <a href="#location">Near ADGM</a>
            <a href="https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z" target="_blank" rel="noopener noreferrer">Google Maps</a>
          </div>

          <div>
            <h3>CONTACT</h3>
            <a href="tel:+971503926316">+971 50 392 6316</a>
            <a href="mailto:contact@aegiscoworking.ae">contact@aegiscoworking.ae</a>
            <span>Office 3812, Addax Tower,<br />Al Reem Island, Abu Dhabi</span>
            <a className="footer-contact" href={`${MAIN_SITE}/contact`}>Contact Aegis →</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Aegis Coworking. All rights reserved.</span>
          <span>
            <a href={`${MAIN_SITE}/terms`}>Terms &amp; Conditions</a>
            {' · '}
            <a href={`${MAIN_SITE}/privacy`}>Privacy Policy</a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default App
