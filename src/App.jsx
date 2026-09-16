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
const MAIN_SITE = 'https://aegiscoworking.ae'

/* ---------- Secondary services (link out to the main site) ---------- */
const otherServices = [
  {
    id: 'private-office',
    img: privateOfficeImg,
    title: 'Private Office in ADGM',
    blurb: 'A private, lockable room for your team, with your own ADGM business address included.',
    price: 'From AED 4,500/month',
    href: `${MAIN_SITE}/private-office`,
  },
  {
    id: 'virtual-office',
    img: virtualOfficeImg,
    title: 'Virtual Office in ADGM',
    blurb: 'A registered ADGM business address and mail handling, with no physical desk required.',
    price: 'From AED 292/month',
    href: `${MAIN_SITE}/virtual-office`,
  },
  {
    id: 'meeting-room',
    img: meetingRoomImg,
    title: 'Meeting Room in ADGM',
    blurb: 'Hourly meeting rooms with WiFi and presentation screens, for members and non-members.',
    price: 'Members get credits — contact for rates',
    href: `${MAIN_SITE}/meeting-room`,
  },
  {
    id: 'presentation-room',
    img: null,
    title: 'Presentation Room in ADGM',
    blurb: '4K projection, professional audio, and recording/live-streaming, seating up to 50 guests.',
    price: 'Contact for hourly & half-day rates',
    href: `${MAIN_SITE}/presentation-room`,
  },
  {
    id: 'day-pass',
    img: dayPassImg,
    title: 'Day Pass in ADGM',
    blurb: 'One day of drop-in workspace access, no membership or commitment required.',
    price: 'AED 100/day',
    href: `${MAIN_SITE}/day-pass`,
  },
]

/* ---------- Requirements ---------- */
const requirements = [
  {
    q: 'Do You Need a Physical Office in ADGM?',
    a: "It depends on your entity type and licence activity. Some ADGM categories require a physical presence, others accept a registered address such as a Dedicated Desk or Virtual Office. Check the current requirements for your specific activity with ADGM directly, or ask us and we'll point you in the right direction.",
  },
  {
    q: 'Can You Use Coworking Space for an ADGM Business?',
    a: 'Yes — many businesses register their ADGM entity using a Dedicated Desk or Private Office as their official business address, subject to their licence category.',
  },
  {
    q: 'When Does a Dedicated Desk Make Sense?',
    a: 'When you want a registered ADGM business address and a consistent desk you can return to every day, at a lower cost than a Private Office.',
  },
  {
    q: 'What Should You Check Before Choosing an ADGM Workspace?',
    a: "Confirm your licence category's address requirements, whether a shared or virtual address is accepted, and how long a lease term you actually need before committing.",
  },
  {
    q: 'Physical Office vs Flexible Workspace',
    a: 'A flexible desk (Hot Desk, Flexi Desk, or Dedicated Desk) costs less and requires no long-term lease. A Private Office costs more but gives your team a private, lockable room of your own.',
  },
]

/* ---------- Business centre ---------- */
const businessCentre = [
  {
    h: 'What Is an ADGM Business Centre?',
    p: 'A shared facility that provides workspace, a registered business address, and meeting facilities for ADGM-licensed businesses — all under one roof, without the overhead of a traditional lease.',
  },
  {
    h: 'Business Centre vs Traditional Office',
    p: 'A traditional office means a long lease and your own fit-out costs. A business centre in ADGM gives you a ready-to-use desk or room, shared amenities, and the flexibility to scale up or down.',
  },
  {
    h: 'Workspace, Address & Meeting Facilities',
    p: 'Aegis Coworking provides all three together at Addax Tower — a desk or office, a registered ADGM business address, and bookable meeting and presentation rooms.',
  },
]

/* ---------- Pricing table ---------- */
const pricingRows = [
  { name: 'Day Pass', price: 'AED 100', period: '/day' },
  { name: 'Flexi Desk (Hot Desk)', price: 'AED 1,000', period: '/month' },
  { name: 'Dedicated Desk', price: 'AED 1,150', period: '/month' },
  { name: 'Virtual Office', price: 'AED 292', period: '/month' },
  { name: 'Private Office', price: 'AED 4,500', period: '/month' },
  { name: 'Meeting Room', price: 'Contact for rates', period: '' },
  { name: 'Presentation Room', price: 'Contact for rates', period: '' },
]

/* ---------- Decision section ---------- */
const decisions = [
  { q: 'Need a Desk for One Day?', a: 'Day Pass', href: `${MAIN_SITE}/day-pass` },
  { q: 'Need Flexible Monthly Workspace?', a: 'Flexi Desk', href: '#services' },
  { q: 'Need Your Own Fixed Workstation?', a: 'Dedicated Desk', href: '#services' },
  { q: 'Need Privacy for Your Team?', a: 'Private Office', href: `${MAIN_SITE}/private-office` },
  { q: 'Need a Professional Business Presence?', a: 'Virtual Office', href: `${MAIN_SITE}/virtual-office` },
  { q: 'Need Somewhere to Meet Clients?', a: 'Meeting Room', href: `${MAIN_SITE}/meeting-room` },
]

/* ---------- Amenities (grouped) ---------- */
const amenityGroups = [
  { h: 'Work-Ready Coworking Spaces', items: ['Premium Chairs', 'Print & Scan'] },
  { h: 'Meeting & Conference Facilities', items: ['Video Conference Rooms'] },
  { h: 'Presentation Facilities', items: ['Presentation Room'] },
  { h: 'Professional Business Environment', items: ['Premium Coffee', 'Sea Views'] },
  { h: 'Flexible Access', items: ['24/7 Access', 'Beach Nearby', 'Fitness Access'] },
]

/* ---------- Audience ---------- */
const audiences = [
  { h: 'For Founders & Entrepreneurs', p: 'A professional ADGM business address and workspace from day one of registering.' },
  { h: 'For Freelancers & Consultants', p: 'Flexible desk access without a long-term lease.' },
  { h: 'For SMEs', p: 'Private office space for a growing team.' },
  { h: 'For Remote Professionals', p: 'A Day Pass or Flexi Desk for when you need to get out of the house.' },
  { h: 'For International Businesses', p: 'A registered ADGM address and meeting rooms without renting a full office.' },
  { h: 'For Finance & Professional Services', p: 'A professional address and meeting rooms in a prestigious ADGM tower for client-facing work.' },
  { h: 'For Small & Growing Teams', p: 'Desks that scale from one Dedicated Desk to a Private Office as you grow.' },
]

/* ---------- Problems -> Solutions ---------- */
const problems = [
  { q: "I don't need a full-time office.", a: 'Flexi Desk / Hot Desk', href: '#services' },
  { q: 'I need a fixed desk.', a: 'Dedicated Desk', href: '#services' },
  { q: 'I need more privacy.', a: 'Private Office', href: `${MAIN_SITE}/private-office` },
  { q: 'I only need workspace for one day.', a: 'Day Pass', href: `${MAIN_SITE}/day-pass` },
  { q: 'I need somewhere to meet clients.', a: 'Meeting Room', href: `${MAIN_SITE}/meeting-room` },
  { q: 'I need a larger space for a presentation.', a: 'Presentation Room', href: `${MAIN_SITE}/presentation-room` },
  { q: 'I need a professional business address.', a: 'Virtual Office', href: `${MAIN_SITE}/virtual-office` },
]

/* ---------- Blog / knowledge hub ---------- */
const blogCategories = [
  { h: 'ADGM Coworking & Workspace Guides', p: 'How coworking works in ADGM, and what to expect as a member.' },
  { h: 'Dedicated Desk ADGM Guides', p: 'Deeper guides on using a Dedicated Desk as your registered business address.' },
  { h: 'ADGM Cost & Comparison Guides', p: "Including “ADGM vs DIFC: Where Does Workspace Cost Fit Into the Decision?”" },
  { h: 'Addax Tower & Location Guides', p: 'What it’s like working from Addax Tower, Al Reem Island.' },
]

/* ---------- FAQ ---------- */
const faqs = [
  {
    q: 'What is a coworking space in ADGM?',
    a: 'A coworking space in ADGM is a shared workspace inside Abu Dhabi Global Market where businesses can rent a desk or office, often including a registered business address, instead of leasing a traditional office.',
  },
  {
    q: 'Flexi Desk vs Dedicated Desk in ADGM — what’s the difference?',
    a: (
      <>
        A Flexi Desk in ADGM (also known as a Hot Desk) is a shared workspace, ideal if you don't
        need the same spot every day. A Dedicated Desk gives you a permanent workspace plus a
        registered ADGM business address. See the full{' '}
        <a href="#pricing">pricing</a>.
      </>
    ),
    schemaText:
      "A Flexi Desk (also known as a Hot Desk) is a shared workspace in ADGM, ideal if you don't need the same spot every day. A Dedicated Desk gives you a permanent workspace plus a registered ADGM business address.",
  },
  {
    q: "What's included in the one-time Due Diligence Fee?",
    a: 'The AED 1,100 Due Diligence Fee covers the compliance and background checks ADGM requires before your licence and registered address can be activated. It is a one-time cost, separate from monthly rent.',
  },
  {
    q: 'How much does coworking in ADGM cost?',
    a: (
      <>
        Prices start at AED 100 for a Day Pass, AED 1,000/month for a Flexi Desk, and AED
        1,150/month for a Dedicated Desk. See the full{' '}
        <a href="#pricing">pricing table</a> for every option.
      </>
    ),
    schemaText:
      'Prices start at AED 100 for a Day Pass, AED 1,000/month for a Flexi Desk, and AED 1,150/month for a Dedicated Desk.',
  },
  {
    q: 'Can I use this workspace in ADGM to register my business?',
    a: 'Yes. A Dedicated Desk includes a registered business address that qualifies for your ADGM commercial licence application and meets the physical presence requirement, so you can operate fully compliant from day one.',
  },
  {
    q: 'Does Aegis Coworking offer private offices too?',
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
    q: 'How much is a virtual office in ADGM?',
    a: (
      <>
        Aegis Coworking's <a href={`${MAIN_SITE}/virtual-office`}>Virtual Office in ADGM</a>{' '}
        starts from AED 292 per month if you don't need a physical desk, just a registered
        business address.
      </>
    ),
    schemaText:
      "Aegis Coworking's virtual office in ADGM starts from AED 292/month if you don't need a physical desk, just a registered business address.",
  },
  {
    q: 'Does Aegis offer meeting rooms?',
    a: (
      <>
        Yes. <a href={`${MAIN_SITE}/meeting-room`}>Meeting rooms</a> can be booked by the hour by
        members and non-members alike, with members receiving meeting room credits.
      </>
    ),
    schemaText:
      'Yes. Meeting rooms can be booked by the hour by members and non-members alike, with members receiving meeting room credits.',
  },
  {
    q: 'Does Aegis offer a presentation room?',
    a: (
      <>
        Yes. The{' '}
        <a href={`${MAIN_SITE}/presentation-room`}>presentation room</a> seats up to 50 guests
        theatre-style, with 4K projection, professional audio, and recording/live-streaming
        support.
      </>
    ),
    schemaText:
      'Yes. The presentation room seats up to 50 guests theatre-style, with 4K projection, professional audio, and recording/live-streaming support.',
  },
  {
    q: 'Is there a day pass if I only need the workspace occasionally?',
    a: (
      <>
        Yes — a <a href={`${MAIN_SITE}/day-pass`}>Day Pass</a> is available from AED 100, with no
        membership required.
      </>
    ),
    schemaText: 'Yes — a Day Pass is available from AED 100, with no membership required.',
  },
  {
    q: 'Does this workspace in ADGM include 24/7 access?',
    a: 'Yes — desk members get secure building access around the clock, every day of the week, not just during standard business hours.',
  },
  {
    q: 'Where is Aegis Coworking located?',
    a: (
      <>
        Office 3812, Addax Tower, Al Reem Island, Abu Dhabi — within ADGM. See the{' '}
        <a href="#find-us">map and directions</a> below.
      </>
    ),
    schemaText: 'Office 3812, Addax Tower, Al Reem Island, Abu Dhabi — within ADGM.',
  },
  {
    q: 'How do I book a workspace?',
    a: (
      <>
        <a href={`${MAIN_SITE}/contact`}>Contact Aegis Coworking</a> to book a free tour, or reach
        out on WhatsApp — we'll walk you through the options and get you set up.
      </>
    ),
    schemaText:
      'Contact Aegis Coworking to book a free tour, or reach out on WhatsApp — the team will walk you through the options and get you set up.',
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
        <title>Coworking Space in ADGM, Abu Dhabi | Offices & Desks</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Explore coworking space in ADGM at Addax Tower, Abu Dhabi. Compare hot desks, dedicated desks, private offices, virtual offices, meeting rooms and day passes."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />

        <meta property="og:title" content="Coworking Space in ADGM, Abu Dhabi | Offices & Desks" />
        <meta
          property="og:description"
          content="Compare hot desks, dedicated desks, private offices, virtual offices, meeting rooms and day passes at Aegis Coworking, Addax Tower, ADGM."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coworking Space in ADGM, Abu Dhabi | Offices & Desks" />
        <meta
          name="twitter:description"
          content="Compare hot desks, dedicated desks, private offices, virtual offices, meeting rooms and day passes at Aegis Coworking, Addax Tower, ADGM."
        />
        <meta name="twitter:image" content="https://www.aegiscoworking.ae/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            name: 'Office Space in ADGM | Aegis Coworking',
            url: `${SITE_URL}/`,
            publisher: { '@id': 'https://www.aegiscoworking.ae/#organization' },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': `${SITE_URL}/#webpage`,
            url: `${SITE_URL}/`,
            name: 'Coworking Space in ADGM, Abu Dhabi | Offices & Desks',
            isPartOf: { '@id': `${SITE_URL}/#website` },
            about: { '@id': `${SITE_URL}/#business` },
          })}
        </script>

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
              'Coworking space in ADGM, Addax Tower, Al Reem Island — hot desks, flexi desks, dedicated desks, private offices, virtual offices, meeting rooms and day passes.',
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.aegiscoworking.ae/' },
              { '@type': 'ListItem', position: 2, name: 'Coworking Space in ADGM', item: `${SITE_URL}/` },
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Coworking Space in ADGM',
            name: 'Coworking Space in ADGM, Abu Dhabi',
            description:
              'Hot desks, flexi desks, dedicated desks, private offices, virtual offices, meeting rooms and day passes at Addax Tower, ADGM.',
            provider: { '@id': `${SITE_URL}/#business` },
            areaServed: 'Abu Dhabi',
            offers: [
              { '@type': 'Offer', name: 'Day Pass', price: '100', priceCurrency: 'AED', availability: 'https://schema.org/InStock' },
              { '@type': 'Offer', name: 'Flexi Desk', price: '1000', priceCurrency: 'AED', availability: 'https://schema.org/InStock' },
              { '@type': 'Offer', name: 'Dedicated Desk', price: '1150', priceCurrency: 'AED', availability: 'https://schema.org/InStock' },
              { '@type': 'Offer', name: 'Virtual Office', price: '292', priceCurrency: 'AED', availability: 'https://schema.org/InStock' },
              { '@type': 'Offer', name: 'Private Office', price: '4500', priceCurrency: 'AED', availability: 'https://schema.org/InStock' },
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
          <li className="nav-dropdown">
            <span>Services</span>
            <ul className="dropdown-menu">
              <li><a href="#services" onClick={closeMenu}>Hot Desk / Flexi Desk</a></li>
              <li><a href="#services" onClick={closeMenu}>Dedicated Desk</a></li>
              <li><a href={`${MAIN_SITE}/private-office`}>Private Office</a></li>
              <li><a href={`${MAIN_SITE}/virtual-office`}>Virtual Office</a></li>
              <li><a href={`${MAIN_SITE}/meeting-room`}>Meeting Room</a></li>
              <li><a href={`${MAIN_SITE}/presentation-room`}>Presentation Room</a></li>
              <li><a href={`${MAIN_SITE}/day-pass`}>Day Pass</a></li>
            </ul>
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
          <li>
            <a href={`${MAIN_SITE}/contact`} onClick={closeMenu}>Contact Us</a>
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

      {/* ===== HERO ===== */}
      <section className="hero">
        <span className="eyebrow">ADGM · ADDAX TOWER · AL REEM ISLAND</span>
        <h1>Your ADGM Workspace Starts Here</h1>
        <p className="hero-desc">
          Looking for a coworking space in ADGM, Abu Dhabi? Explore flexible workspace at Aegis
          Coworking in Addax Tower, Al Reem Island, including hot desks, flexi desks, dedicated
          desks, private offices, virtual offices, meeting rooms, presentation spaces and day
          passes.
        </p>
        <div className="hero-ctas">
          <a href="#services" className="btn-primary">Explore ADGM Workspace</a>
          <a href={`${MAIN_SITE}/contact`} className="btn-outline">Book a Tour</a>
        </div>
      </section>

      {/* ===== DIRECT ANSWER ===== */}
      <section className="direct-answer">
        <h2>Looking for Coworking Space in ADGM? Start Here.</h2>
        <p>
          Aegis Coworking offers coworking space in ADGM at Addax Tower, Al Reem Island, Abu
          Dhabi — with hot desks, flexi desks, dedicated desks, private offices, virtual
          offices, meeting rooms, a presentation room, and day passes, starting from AED
          100. Most plans include a registered ADGM business address and 24/7 access.
        </p>
      </section>

      {/* ===== CORE TOPIC ===== */}
      <section className="about">
        <span className="eyebrow">WHO WE ARE</span>
        <h2>More Than a Desk: A Complete ADGM Workspace</h2>
        <p className="about-lead">
          A coworking space in ADGM is more than a place to sit — it's a registered business
          address, meeting facilities, and a professional environment, all in one. Aegis
          Coworking brings all of that together at Addax Tower.
        </p>
        <div className="about-grid">
          <div className="about-block">
            <div className="about-block-icon">🎯</div>
            <h3>Why Businesses Choose Flexible Workspace</h3>
            <p>
              No long lease, no fit-out cost, and a registered ADGM address available from day
              one — flexible workspace in ADGM lets you start operating immediately.
            </p>
          </div>
          <div className="about-block">
            <div className="about-block-icon">⚖️</div>
            <h3>Coworking Space vs Traditional Office in ADGM</h3>
            <p>
              A traditional office means a multi-year lease and upfront fit-out. Coworking space
              in ADGM gives you a ready desk or room, shared amenities, and the flexibility to
              scale as your business grows.
            </p>
          </div>
          <div className="about-block">
            <div className="about-block-icon">🧩</div>
            <h3>Flexible Workspace for Different Business Needs</h3>
            <p>
              From a single Day Pass to a Private Office for a growing team — every stage of
              a business has a matching workspace option here.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAIN SERVICE CLUSTER ===== */}
      <section id="services" className="pricing">
        <span className="eyebrow">SERVICES</span>
        <h2>Explore Coworking &amp; Office Space in ADGM</h2>
        <p className="pricing-intro">
          Aegis Coworking's two core desk plans — a shared Hot Desk / Flexi Desk and a
          permanent Dedicated Desk — are detailed below. Every other workspace option, from
          Private Office to Day Pass, follows underneath.
        </p>
        <div className="pricing-grid">
          <div className="price-card">
            <div className="price-card-image">
              <img
                src={flexiDeskImg}
                alt="Hot desk and flexi desk workspace in ADGM, Addax Tower"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="price-card-body">
              <h3>Hot Desk &amp; Flexi Desk in ADGM</h3>
              <p className="price-card-label">Work where you need it, whenever you need it</p>
              <p className="price-desc">
                A Hot Desk and a Flexi Desk are the same offering at Aegis Coworking — a
                shared, unassigned workspace in ADGM you can use any day, ideal if you don't need
                the same spot every day but still want a professional place to work.
              </p>
              <p className="price-desc">
                Fully furnished and accessible 24/7, with full access to meeting rooms, the
                business lounge, and the wider coworking community at Office 3812, Addax Tower,
                Al Reem Island.
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
              <a href={`${MAIN_SITE}/pricing`} className="price-card-link">
                Other Discounts &gt;
              </a>
            </div>
          </div>

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
                A dedicated desk in ADGM — one of Abu Dhabi's most established business
                districts. If you work in ADGM regularly and want a workspace that is always
                yours, a Dedicated Desk gives you the convenience and consistency of a private
                workspace at a much lower cost.{' '}
                <strong>
                  Only AED 150 more than a Flexi Desk — making it an excellent option for
                  regular users.
                </strong>
              </p>
              <p className="price-desc">
                No hidden charges apply and only due diligence fee applies for one time only.
                Book your ADGM Coworking Space with Aegis Coworking that sits in office 3812,
                Addax Tower, Al Reem Island.
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
              <a href={`${MAIN_SITE}/contact`} className="price-card-link">
                Request Quote &gt;
              </a>
            </div>
          </div>
        </div>

        <div className="other-services-grid">
          {otherServices.map((s) => (
            <a href={s.href} className="other-service-card" key={s.id}>
              {s.img && <img src={s.img} alt={s.title} loading="lazy" decoding="async" />}
              {!s.img && <div className="other-service-placeholder">🎤</div>}
              <div className="other-service-body">
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <span className="other-service-price">{s.price}</span>
                <span className="price-card-link">View on Aegis Coworking &gt;</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ===== ADGM REQUIREMENTS ===== */}
      <section className="requirements">
        <span className="eyebrow">GOOD TO KNOW</span>
        <h2>Before You Choose an ADGM Workspace, Know the Requirements</h2>
        <div className="requirements-grid">
          {requirements.map((r) => (
            <div className="requirements-item" key={r.q}>
              <h3>{r.q}</h3>
              <p>{r.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BUSINESS CENTRE ===== */}
      <section className="about">
        <span className="eyebrow">BUSINESS CENTRE</span>
        <h2>Need a Business Centre in ADGM? Here's What to Look For</h2>
        <div className="about-grid">
          {businessCentre.map((b) => (
            <div className="about-block" key={b.h}>
              <h3>{b.h}</h3>
              <p>{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRICING TABLE ===== */}
      <section id="pricing" className="pricing-table-section">
        <span className="eyebrow">PRICING</span>
        <h2>What Does an ADGM Workspace Actually Cost?</h2>
        <p className="pricing-intro">
          Straightforward pricing for coworking space in ADGM — no hidden fees beyond the
          one-time due diligence fee where a registered address is included.
        </p>
        <div className="price-table-wrap">
          <table className="price-table">
            <thead>
              <tr>
                <th>Workspace</th>
                <th>Starting Price</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>
                    {row.price}
                    <span className="price-table-period">{row.period}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== COMPARISON ===== */}
      <section className="comparison">
        <span className="eyebrow">COMPARE</span>
        <h2>Which ADGM Workspace Fits the Way You Work?</h2>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Day Pass</th>
                <th>Flexi Desk</th>
                <th>Dedicated Desk</th>
                <th>Private Office</th>
                <th>Virtual Office</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Short-term workspace</td>
                <td>✓</td><td></td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Flexible seating</td>
                <td>✓</td><td>✓</td><td></td><td></td><td></td>
              </tr>
              <tr>
                <td>Fixed desk</td>
                <td></td><td></td><td>✓</td><td></td><td></td>
              </tr>
              <tr>
                <td>Private office</td>
                <td></td><td></td><td></td><td>✓</td><td></td>
              </tr>
              <tr>
                <td>Business address</td>
                <td>Plan-dependent</td><td>Plan-dependent</td><td>Included</td><td>Included</td><td>Plan-dependent</td>
              </tr>
              <tr>
                <td>Team workspace</td>
                <td></td><td></td><td></td><td>✓</td><td></td>
              </tr>
              <tr>
                <td>Meeting facilities</td>
                <td>Where applicable</td><td>Where applicable</td><td>Where applicable</td><td>Where applicable</td><td></td>
              </tr>
              <tr>
                <td>Best suited for</td>
                <td>Visitors</td><td>Flexible users</td><td>Regular users</td><td>Teams</td><td>Remote businesses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== DECISION ===== */}
      <section className="decision">
        <span className="eyebrow">QUICK DECISION</span>
        <h2>Which ADGM Workspace Do You Actually Need?</h2>
        <div className="decision-grid">
          {decisions.map((d) => (
            <a href={d.href} className="decision-card" key={d.q}>
              <h3>{d.q}</h3>
              <span className="decision-answer">{d.a} &gt;</span>
            </a>
          ))}
        </div>
      </section>

      {/* ===== LOCAL SEO / FIND US ===== */}
      <section id="find-us" className="location-highlight">
        <div className="location-content">
          <div className="location-text">
            <span className="contact-eyebrow">WORK WHERE ADGM MEETS AL REEM ISLAND</span>
            <h2>Located in Addax Tower, Al Reem Island</h2>
            <p>
              This workspace in ADGM sits in Addax Tower, Al Reem Island, within ADGM, Abu
              Dhabi's leading financial free zone. Easy access to banks, restaurants, business
              hubs, and the waterfront makes it a convenient business center in ADGM for
              startups, freelancers, and small businesses. Have questions? Check our{' '}
              <a href="#faq">FAQs</a>.
            </p>
            <div className="local-seo-blurbs">
              <div><strong>Coworking Space at Addax Tower</strong><span>Directly inside Addax Tower, ADGM's own business district.</span></div>
              <div><strong>Coworking Space on Al Reem Island</strong><span>Minutes from the wider Al Reem Island business and residential community.</span></div>
              <div><strong>Coworking Near ADGM</strong><span>Inside ADGM itself — not just nearby.</span></div>
            </div>
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

      {/* ===== AMENITIES ===== */}
      <section className="amenities">
        <span className="eyebrow">AMENITIES</span>
        <h2>Everything You Need to Get Business Done</h2>
        <div className="amenity-groups-grid">
          {amenityGroups.map((g) => (
            <div className="amenity-group" key={g.h}>
              <h3>{g.h}</h3>
              <div className="amenity-chips">
                {g.items.map((item) => (
                  <span className="amenity-chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== AUDIENCE ===== */}
      <section className="audience">
        <span className="eyebrow">WHO IT'S FOR</span>
        <h2>Workspace for the Way You Work</h2>
        <div className="audience-grid">
          {audiences.map((a) => (
            <div className="audience-card" key={a.h}>
              <h3>{a.h}</h3>
              <p>{a.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROBLEMS -> SOLUTIONS ===== */}
      <section className="problems">
        <span className="eyebrow">NOT SURE WHERE TO START?</span>
        <h2>Got an ADGM Workspace Problem? Start Here.</h2>
        <div className="problems-grid">
          {problems.map((p) => (
            <a href={p.href} className="problem-card" key={p.q}>
              <p className="problem-q">“{p.q}”</p>
              <span className="decision-answer">→ {p.a}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ===== BLOG / KNOWLEDGE HUB ===== */}
      <section className="blog-hub">
        <span className="eyebrow">LEARN MORE</span>
        <h2>The ADGM Workspace Questions People Actually Ask</h2>
        <div className="blog-grid">
          {blogCategories.map((b) => (
            <a href={`${MAIN_SITE}/blogs`} className="blog-card" key={b.h}>
              <h3>{b.h}</h3>
              <p>{b.p}</p>
              <span className="price-card-link">Read the Aegis guide &gt;</span>
            </a>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="faq">
        <span className="eyebrow">FAQ</span>
        <h2>Still Wondering How ADGM Workspace Works?</h2>
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

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <span className="eyebrow">GET STARTED</span>
        <h2>Your Next Workspace Is Closer Than You Think</h2>
        <p>
          Explore coworking and office space at Aegis Coworking in Addax Tower, Al Reem Island.
          Choose from flexible desks, dedicated workspaces, private offices, virtual-office
          options and meeting facilities based on your business needs.
        </p>
        <div className="hero-ctas">
          <a href={`${MAIN_SITE}/contact`} className="btn-primary">Book a Tour</a>
          <a href={MAIN_SITE} className="btn-outline">Explore Aegis Workspace</a>
          <a href={`${MAIN_SITE}/contact`} className="btn-outline">Contact Aegis</a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
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
            <h3>WORKSPACE</h3>
            <a href="#services">Coworking Space ADGM</a>
            <a href="#services">Hot Desk ADGM</a>
            <a href="#services">Flexi Desk</a>
            <a href="#services">Dedicated Desk ADGM</a>
            <a href={`${MAIN_SITE}/private-office`}>Private Office ADGM</a>
            <a href={`${MAIN_SITE}/virtual-office`}>Virtual Office ADGM</a>
            <a href={`${MAIN_SITE}/meeting-room`}>Meeting Room ADGM</a>
            <a href={`${MAIN_SITE}/presentation-room`}>Presentation Room</a>
            <a href={`${MAIN_SITE}/day-pass`}>Day Pass</a>
          </div>

          <div className="footer-col">
            <h3>ADGM</h3>
            <a href="#services">ADGM Workspace</a>
            <a href="#services">ADGM Office Space</a>
            <a href="#about">Business Centre ADGM</a>
            <a href={`${MAIN_SITE}/virtual-office`}>Business Address</a>
            <a href={`${MAIN_SITE}/blogs`}>ADGM Workspace Guide</a>
          </div>

          <div className="footer-col">
            <h3>LOCATION</h3>
            <a href="#find-us">Addax Tower</a>
            <a href="#find-us">Al Reem Island</a>
            <a href="#find-us">Abu Dhabi</a>
            <a href="#find-us">Near ADGM</a>
          </div>

          <div className="footer-col">
            <h3>CONTACT US</h3>
            <p><strong>Phone:</strong> <a href="tel:+971503926316">+971 50 392 6316</a></p>
            <p><strong>Email:</strong> <a href="mailto:contact@aegiscoworking.ae">contact@aegiscoworking.ae</a></p>
            <p><strong>Address:</strong> 3812 Addax Tower, Al Reem Island RT3, Abu Dhabi</p>
            <a href={`${MAIN_SITE}/contact`}>Contact Us &gt;</a>
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
