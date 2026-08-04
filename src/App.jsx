import { useState } from 'react'
import {
  BarChart3,
  Bot,
  Calendar,
  CalendarClock,
  CalendarDays,
  Code2,
  Contact,
  DatabaseZap,
  Globe2,
  Handshake,
  LayoutDashboard,
  Lightbulb,
  Mail,
  MapPin,
  Megaphone,
  MousePointerClick,
  Phone,
  PhoneCall,
  Rocket,
  Search,
  Send,
  Share2,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  Trophy,
  UserRound,
  UsersRound,
} from 'lucide-react'
import './App.css'
import agilanImage from './assets/Agilan-image.jpeg'
import heroBgImage from './assets/image.png'
import bitbyteLogo from './assets/BB-Logo.png'

const navItems = ['Home', 'About', 'Services', 'Contact', 'Business Hours', 'Appointment']

const serviceTiles = [
  { title: 'Web Application Development', icon: Globe2, popup: 'We build scalable, secure, AI-based solutions for modern business workflows, customer portals, dashboards, and high-performance web platforms.', cta: 'View Solution' },
  { title: 'Custom Software Development', icon: Code2, popup: 'AI-based solutions tailored to your operations, approvals, reporting, task flows, and internal business automation.', cta: 'Build Custom' },
  { title: 'Mobile App Development', icon: Smartphone, popup: 'AI-based solutions for smart mobile experiences, customer engagement, field updates, notifications, and mobile-first business access.', cta: 'Plan App' },
  { title: 'Digital Marketing', icon: Megaphone, popup: 'We use AI-based solutions to plan campaigns, improve targeting, analyze audiences, and drive measurable digital growth.', cta: 'Grow Online' },
  { title: 'SEO | AEO | GEO', icon: Search, popup: 'AI-based solutions for search, answer, and generative-engine visibility with content structure, schema, and intent optimization.', cta: 'Improve SEO' },
  { title: 'Google Ads & Meta Ads', icon: MousePointerClick, popup: 'AI-based solutions for ad optimization, audience testing, creative insights, campaign tracking, and lead quality improvement.', cta: 'Run Ads' },
  { title: 'Personal Branding', icon: UserRound, popup: 'AI-based solutions to build authority, content direction, digital presence, profile positioning, and brand visibility.', cta: 'Build Brand' },
  { title: 'Business Analytics', icon: BarChart3, popup: 'AI-based solutions for data-driven decisions, customer insights, performance tracking, and business intelligence dashboards.', cta: 'Analyze Data' },
  { title: 'Real-Time Sales Dashboards', icon: LayoutDashboard, popup: 'AI-based solutions for live performance tracking, sales visibility, team accountability, and smarter revenue reporting.', cta: 'Track Sales' },
  { title: 'SaaS Product Development', icon: DatabaseZap, popup: 'AI-based solutions for scalable product platforms, subscriptions, user workflows, admin systems, and cloud-ready SaaS tools.', cta: 'Launch SaaS' },
  { title: 'API Integration & Security', icon: ShieldCheck, popup: 'AI-based solutions for secure connected systems, API automation, access control, data safety, and integration reliability.', cta: 'Secure Systems' },
  { title: 'AI Powered Solutions', icon: Bot, popup: 'We create custom AI-based solutions including automation, smart assistants, analytics, recommendation systems, and intelligent business tools.', cta: 'Explore AI' },
]

const quickActions = [
  { label: 'Call Now', icon: Phone, tone: 'call', href: 'tel:+919943743136' },
  { label: 'WhatsApp', icon: Phone, tone: 'whatsapp', href: 'https://wa.me/919943743136' },
  { label: 'Email', icon: Mail, tone: 'email', href: 'mailto:reachus@bitbytech.org?subject=Project%20Inquiry%20for%20BitByte%20Technologies' },
  { label: 'Visit Website', icon: Globe2, tone: 'website', href: 'https://bitbytetech.org' },
  {
    label: 'Navigate',
    icon: MapPin,
    tone: 'navigate',
    href: 'https://www.google.com/maps/search/?api=1&query=Bit%20Byte%20Technologies%2C%202nd%20Floor%2C%20Raja%20Complex%2C%20Omalur%20Main%20Road%2C%20Salem',
  },
  { label: 'Save Contact', icon: Contact, tone: 'save', action: 'save' },
  { label: 'Share Card', icon: Share2, tone: 'share', action: 'share' },
]

const socialLinks = [
  { label: 'Facebook', iconClass: 'fa-brands fa-facebook', tone: 'facebook', href: 'https://www.facebook.com/profile.php?id=61590062057662' },
  { label: 'Instagram', iconClass: 'fa-brands fa-instagram', tone: 'instagram', href: 'https://www.instagram.com/bit_byte.technologies/' },
  { label: 'LinkedIn', iconClass: 'fa-brands fa-linkedin', tone: 'linkedin', href: 'https://www.linkedin.com/company/bitbyte-technologie/posts/?feedView=all' },
  { label: 'YouTube', iconClass: 'fa-brands fa-youtube', tone: 'youtube', href: 'https://www.youtube.com/@BitByteTechnologies' },
]

const whyItems = ['Innovative Solution', 'Result Driven', 'Customer Focused', 'Quality & Trust']

const valueIcons = [Trophy, Target, Rocket, Handshake, Star]
const whyIcons = [Lightbulb, Target, UsersRound, ShieldCheck]

function App() {
  const [formStatus, setFormStatus] = useState('')
  const [actionStatus, setActionStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setFormStatus('Thanks. Your inquiry is ready to be sent to the BitByte team.')
    event.currentTarget.reset()
  }

  function saveContact() {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Agilan;N;;;',
      'FN:Mr. Agilan.N',
      'ORG:BitByte Technologies',
      'TITLE:Managing Director',
      'TEL;TYPE=CELL:+919943743136',
      'EMAIL:reachus@bitbytech.org',
      'URL:https://bitbytetech.org',
      'ADR;TYPE=WORK:;;2nd Floor, Raja Complex (West Wing), Opp. Sago Serve, Omalur Main Road;Salem;Tamil Nadu;636302;India',
      'NOTE:BitByte Technologies - Imagination to Reality',
      'END:VCARD',
    ].join('\n')

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Agilan-N-BitByte-Technologies.vcf'
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
    setActionStatus('Contact card downloaded.')
  }

  async function shareCard() {
    const shareData = {
      title: 'Mr. Agilan.N - BitByte Technologies',
      text: 'Managing Director, BitByte Technologies. Imagination to Reality.',
      url: 'https://bitbytetech.org',
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        setActionStatus('Card shared successfully.')
        return
      }

      await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\nPhone: +91 99437 43136\nEmail: reachus@bitbytech.org\n${shareData.url}`)
      setActionStatus('Card details copied to clipboard.')
    } catch {
      setActionStatus('Share was cancelled.')
    }
  }

  function handleQuickAction(item) {
    if (item.action === 'save') {
      saveContact()
      return
    }

    if (item.action === 'share') {
      shareCard()
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="BitByte Technologies home">
          <img src={bitbyteLogo} alt="BitByte Technologies" />
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <a className="primary-button compact" href="#appointment">Book Appointment</a>
      </header>

      <section className="hero" id="home">
        <img className="hero-background-image" src={heroBgImage} alt="Agilan N hero background" />

        <div className="hero-copy">
          <p className="eyebrow">Hello, I'm</p>
          <h1>AGILAN.N</h1>
          <p className="role">Managing Director</p>
          <div className="hero-rule"><span></span></div>
          <h2>BITBYTE TECHNOLOGIES</h2>
          <p className="hero-tagline">Imagination to Reality</p>
          <p className="hero-lead">
            We transform your imagination into powerful digital solutions that drive growth and deliver real results.
          </p>
          <div className="hero-actions">
            <a className="secondary-button visit-site-button" href="https://bitbytetech.org" target="_blank" rel="noreferrer"><Globe2 size={24} />Visit Our Website</a>
            <a className="primary-button" href="#appointment"><Calendar size={24} />Book Appointment</a>
            <a className="secondary-button" href="https://wa.me/919943743136" target="_blank" rel="noreferrer"><Phone size={24} />WhatsApp Now</a>
          </div>
        </div>

        <div className="hero-brand-panel">
        </div>
      </section>

      <section className="about-services-section" id="about">
        <div className="about-value-strip">
          {['Visionary Leader', 'Result Driven', 'Growth Strategist', 'Client Focused', 'Excellence Always'].map((item, index) => {
            const Icon = valueIcons[index]
            return (
            <div className="about-value-item" key={item}>
              <span><Icon size={34} strokeWidth={2.4} /></span>
              <strong>{item}</strong>
            </div>
          )})}
        </div>

        <div className="about-why-grid">
          <article className="about-card">
            <img src={agilanImage} alt="Agilan N" />
            <div>
              <h2>About Me</h2>
              <p>I help businesses transform ideas into scalable digital solutions through innovative technology, strategic digital marketing, and data-driven business growth.</p>
              <p>At BitByte Technologies, our mission is to build future-ready web applications, powerful digital brands, and measurable business outcomes.</p>
              <a className="about-button" href="#contact">Know More About Agilan.N</a>
            </div>
          </article>

          <article className="why-card">
            <h2>Why BitByte Technologies</h2>
            <div className="why-content">
              <ul>
                {whyItems.map((item, index) => {
                  const Icon = whyIcons[index]
                  return <li key={item}><span><Icon size={24} strokeWidth={2.4} /></span>{item}</li>
                })}
              </ul>
              <blockquote>We don't just build software, we transform imagination into digital reality.</blockquote>
            </div>
          </article>
        </div>

        <div className="services-showcase" id="services">
          <h2>Our Services</h2>
          <p>End-to-end digital solutions designed to grow your business.</p>
          <div className="service-hover-hint">Hover a service to view AI-based solution details.</div>
          <div className="service-tile-grid">
            {serviceTiles.map((service) => (
              <button type="button" className="showcase-service-card" key={service.title}>
                <div className="service-popup">
                  <div className="popup-icon"><service.icon size={30} strokeWidth={2.2} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.popup}</p>
                  <span>{service.cta}</span>
                </div>
                <span className="service-icon"><service.icon size={42} strokeWidth={2.2} /></span>
                <strong>{service.title}</strong>
                <i></i>
              </button>
            ))}
          </div>
          <a className="explore-services-button" href="#contact">Explore All Services</a>
        </div>
      </section>

      <section className="contact-showcase-section" id="contact">
        <div className="contact-heading">
          <h2>Let's Connect & Build<br />Your <span>Digital Future</span></h2>
          <p>Reach out, book a consultation, or send your project requirement directly to BitByte Technologies.</p>
        </div>

        <div className="contact-top-grid">
          <article className="contact-box">
            <CardHeader title="Contact Information" />
            <ul className="contact-lines">
              <li><span><PhoneCall size={18} /></span>+91 99437 43136 (WhatsApp Only)</li>
              <li><span><Mail size={18} /></span>reachus@bitbytech.org</li>
              <li><span><Globe2 size={18} /></span>www.bitbytetech.org</li>
              <li><span><MapPin size={18} /></span>2nd Floor, Raja Complex (West Wing), Opp. Sago Serve, Omalur Main Road, Salem - 636302, Tamil Nadu, India.</li>
            </ul>
          </article>

          <article className="contact-box" id="business-hours">
            <CardHeader title="Business Hours" />
            <div className="contact-hours">
              <p><CalendarDays size={22} /><span>Monday - Friday</span><strong>9:30 AM - 7:30 PM</strong></p>
              <p><CalendarDays size={22} /><span>Saturday</span><strong>10:00 AM - 5:00 PM</strong></p>
              <p><CalendarDays size={22} /><span>Sunday</span><strong>Closed</strong></p>
            </div>
            <div className="ready-note">
              <span><CalendarClock size={34} /></span>
              <p>We are always<br />ready to assist you!</p>
            </div>
          </article>

          <article className="contact-box appointment-box" id="appointment">
            <CardHeader title="Make An Appointment" />
            <p>Schedule a meeting with</p>
            <strong>Mr. Agilan.N</strong>
            <a className="appointment-gold" href="mailto:reachus@bitbytech.org?subject=Appointment%20with%20Mr.%20Agilan.N">Book Appointment</a>
            <a className="appointment-whatsapp" href="https://wa.me/919943743136" target="_blank" rel="noreferrer">WhatsApp Now</a>
            <p>Let's discuss how we can grow your business!</p>
          </article>
        </div>

        <div className="contact-bottom-grid">
          <form className="contact-inquiry-box" onSubmit={handleSubmit}>
            <CardHeader title="Send Us An Inquiry" />
            <p>Have a question or project in mind? Fill out the form and we will get back to you shortly.</p>
            <div className="contact-form-grid">
              <input required placeholder="Your Name *" />
              <input required type="email" placeholder="Your Email *" />
              <input required placeholder="Your Phone Number *" />
              <input className="contact-subject" placeholder="Subject" />
              <textarea required placeholder="Your Message / Requirements *" rows="5"></textarea>
            </div>
            <button className="send-inquiry-button" type="submit">Send Inquiry</button>
            {formStatus && <p className="form-status">{formStatus}</p>}
          </form>

          <div className="contact-side-stack">
            <article className="contact-box quick-actions-box">
              <CardHeader title="Quick Actions" />
              <div className="quick-actions-grid">
                {quickActions.map((item) => (
                  item.href ? (
                    <a href={item.href} className={`quick-action ${item.tone}`} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} key={item.label}>
                      <span><item.icon size={26} strokeWidth={2.5} /></span>{item.label}
                    </a>
                  ) : (
                    <button type="button" className={`quick-action ${item.tone}`} onClick={() => handleQuickAction(item)} key={item.label}>
                      <span><item.icon size={26} strokeWidth={2.5} /></span>{item.label}
                    </button>
                  )
                ))}
              </div>
              {actionStatus && <p className="quick-action-status">{actionStatus}</p>}
            </article>

            <article className="contact-box connect-box">
              <CardHeader title="Connect With Us" />
              <div className="connect-icons">
                {socialLinks.map((item) => (
                  <a href={item.href} className={item.tone} target="_blank" rel="noreferrer" key={item.label}><span><i className={item.iconClass}></i></span>{item.label}</a>
                ))}
              </div>
            </article>

            <blockquote className="contact-quote">We don't just build software, we transform imagination into digital reality.</blockquote>
          </div>
        </div>
        <div className="map-card">
          <CardHeader title="Find Us On Map" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.113951897843!2d78.11783357481919!3d11.686335888523264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1fe74e97585%3A0x2f223655340fd0b7!2sBit%20Byte%20Technologies!5e0!3m2!1sen!2sin!4v1785844392109!5m2!1sen!2sin"
            title="BitByte Technologies location map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand-block">
          <img src={bitbyteLogo} alt="BitByte Technologies" />
          <p>Imagination to Reality</p>
        </div>
        <div className="footer-pillars">
          <span><Lightbulb size={24} />Innovative Solution</span>
          <span><Target size={24} />Result Driven</span>
          <span><UsersRound size={24} />Customer Focused</span>
          <span><ShieldCheck size={24} />Quality & Trust</span>
        </div>
        <div className="footer-closing">
          <blockquote>We don't just build software, we transform imagination into digital reality.</blockquote>
          <small>Copyright 2025 BitByte Technologies. All Rights Reserved.</small>
        </div>
      </footer>
    </main>
  )
}

export default App

function CardHeader({ title }) {
  const HeaderIcon = {
    'Contact Information': UserRound,
    'Business Hours': CalendarClock,
    'Make An Appointment': Calendar,
    'Send Us An Inquiry': Send,
    'Quick Actions': Rocket,
    'Connect With Us': UsersRound,
    'Find Us On Map': MapPin,
  }[title] || Star

  return (
    <div className="card-header">
      <span><HeaderIcon size={24} strokeWidth={2.4} /></span>
      <h3>{title}</h3>
    </div>
  )
}
