import { useState } from 'react';
import Header from './Header';
import './OfficeSpacePage.css';

const amenities = [
  { title: 'Premium Coffee', icon: '☕' },
  { title: 'Video Conference Rooms', icon: '🎥' },
  { title: 'Premium Chairs', icon: '🪑' },
  { title: 'Print & Scan', icon: '🖨️' },
  { title: 'Fitness Access', icon: '🏋️' },
  { title: 'Beach Nearby', icon: '🏖️' },
  { title: 'Sea Views', icon: '🌊' },
  { title: 'Private Offices', icon: '🚪' },
];

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
];

const faqs = [
  {
    q: 'What is a Dedicated and Flexi desk in ADGM?',
    a: 'A Dedicated Desk is fully yours — you keep the same spot every time, for AED 1,150/month. A Flexi Desk gives you any open desk in the space for AED 1,000/month. Both include 24/7 access and full use of the meeting rooms and business lounge.',
  },
  {
    q: "What's included in the one-time Due Diligence Fee?",
    a: 'The AED 1,100 Due Diligence Fee covers the compliance and background checks ADGM requires before your licence and registered address can be activated. It is a one-time cost, separate from monthly rent.',
  },
  {
    q: 'Can I use this office space to register my ADGM business?',
    a: 'Yes. A Dedicated Desk includes a registered address that qualifies for your ADGM commercial licence application and meets the physical presence requirement, so you can operate fully compliant from day one.',
  },
  {
    q: 'What are the lease term options?',
    a: 'Leases run from 12 to 36 months, with pricing that improves the longer you commit — annual, bi-annual, and quarterly rates are all available.',
  },
  {
    q: 'Does this office space include 24/7 access?',
    a: 'Yes — desk members get secure building access around the clock, every day of the week, not just during standard business hours.',
  },
];

function OfficeSpacePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="office-page">
      <Header />

      <section className="hero">
        <span className="eyebrow">ADGM · ADDAX TOWER · AL REEM ISLAND</span>
        <h1>Office Space in ADGM</h1>
        <p className="hero-subtitle">Dedicated &amp; Flexi Desks from AED 1,000/month</p>
        <p className="hero-desc">
          ADGM-ready workspace and a professional business address at Addax Tower — 24/7 access,
          meeting-room access, and everything you need to register and run your business.
        </p>
        <a href="https://aegiscoworking.ae/contact" className="btn-primary">
          Request a Quote
        </a>
      </section>

      <section id="services" className="pricing">
        <h2>Choose Your Desk</h2>
        <div className="pricing-grid">
          <div className="price-card">
            <p className="price-card-label">Your own permanent workspace</p>
            <h3>Dedicated Desk</h3>
            <p className="price">
              AED 1,150<span>/month</span>
            </p>
            <p className="price-desc">
              Always set up, always yours — a dedicated desk that qualifies for your ADGM
              registered address. Only AED 150 more than a Flexi Desk.
            </p>
            <ul>
              <li>No deposit</li>
              <li>No admin fees</li>
              <li>No setup fees</li>
              <li>Free registration</li>
            </ul>
            <a href="https://aegiscoworking.ae/contact" className="btn-outline">
              Request Quote
            </a>
          </div>

          <div className="price-card">
            <p className="price-card-label">Coworking space in Al Reem Island</p>
            <h3>Flexi Desk</h3>
            <p className="price">
              AED 1,000<span>/month</span>
            </p>
            <p className="price-desc">
              A practical choice if you don't need the same workstation every day, with full
              access to meeting rooms and the business lounge.
            </p>
            <ul>
              <li>No deposit</li>
              <li>No admin fees</li>
              <li>No setup fees</li>
              <li>Free registration</li>
            </ul>
            <a href="https://aegiscoworking.ae/contact" className="btn-outline">
              Request Quote
            </a>
          </div>
        </div>
        <p className="pricing-note">
          A one-time AED 1,100 due diligence fee applies, covering the ADGM compliance checks
          needed to activate your licence and registered address. Leases run 12–36 months.
        </p>
      </section>

      <section id="about" className="amenities">
        <span className="eyebrow">WHAT'S INCLUDED</span>
        <h2>Amenities</h2>
        <div className="amenities-grid">
          {amenities.map((item) => (
            <div className="amenity-item" key={item.title}>
              <span className="amenity-icon">{item.icon}</span>
              <span className="amenity-title">{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="location">
        <span className="eyebrow">THE NEIGHBORHOOD</span>
        <h2>Located in the Heart of ADGM</h2>
        <p className="location-desc">
          Aegis Coworking sits at Office 3812, Addax Tower, Al Reem Island — one of Abu Dhabi's
          most established business districts, surrounded by everything a workday needs.
        </p>
        <div className="location-grid">
          {nearby.map((group) => (
            <div className="location-block" key={group.title}>
              <div className="location-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="faq">
        <h2>Common Questions</h2>
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

      <footer className="office-footer">
        <p className="footer-address">3812 Addax Tower, Al Reem Island RT3, Abu Dhabi</p>
        <p>
          <a href="tel:+971503926316">+971 50 392 6316</a> ·{' '}
          <a href="mailto:contact@aegiscoworking.ae">contact@aegiscoworking.ae</a>
        </p>
        <p className="footer-copy">© 2026 Aegis Coworking. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default OfficeSpacePage;
