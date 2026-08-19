import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BarChart3, Bot, Boxes, CalendarDays, CheckCircle2, Code2, DatabaseZap, Globe2, LayoutDashboard, Lightbulb, Megaphone, Menu, MessageCircle, MousePointerClick, Rocket, Search, Send, ShieldCheck, Smartphone, Sparkles, Target, UserRound, UsersRound, X } from 'lucide-react'
import './App.css'
import logo from './assets/BB-Logo.png'
import heroBackground from './assets/bg-image.png'
import beemaRao from './assets/BeemaRav-Image.png'
import siteQr from './assets/BB-Site-QR.png'

const services = [
  [Bot, 'AI Powered Solutions', 'Intelligent systems that automate, optimise and scale your business.'],
  [UserRound, 'AI-Based Personal Branding', 'Build authority and an influential digital presence with AI-led strategy.'],
  [Boxes, 'Metaverse & Mixed Reality (AR/VR)', 'Immersive AR and VR experiences for training, marketing and engagement.'],
  [Search, 'SEO · AEO · GEO', 'Get discovered across search, answers and generative engines.'],
  [Megaphone, 'AI-Based Digital Marketing', 'Data-driven campaigns designed to attract and convert better customers.'],
  [BarChart3, 'Business Analytics', 'Turn complex data into clear, confident business decisions.'],
  [LayoutDashboard, 'Real-Time Sales Dashboards', 'Monitor sales, teams and revenue performance with live business insights.'],
  [Globe2, 'Web Application Development', 'Fast, secure and scalable web platforms built around your workflows.'],
  [Code2, 'Custom Software Development', 'Purpose-built software that simplifies operations and supports growth.'],
  [Smartphone, 'Mobile App Development', 'Modern mobile experiences for customers, teams and field operations.'],
  [MousePointerClick, 'Google Ads & Meta Ads', 'Targeted advertising campaigns focused on reach, leads and conversions.'],
  [DatabaseZap, 'API Integration & Security', 'Secure integrations, reliable data exchange and protected digital systems.'],
]
const stats = [['50+', 'Projects Delivered', Rocket], ['200+', 'Happy Clients', UsersRound], ['10+', 'Years Experience', BarChart3], ['30+', 'Expert Developers', Code2], ['99%', 'Client Satisfaction', CheckCircle2], ['15+', 'Countries Served', Globe2]]
const reasons = [
  ['Innovative Solutions', Lightbulb, 'Future-ready technology shaped around real business needs.'],
  ['Result Driven', Target, 'Every decision is connected to a clear and measurable outcome.'],
  ['Customer Oriented', UsersRound, 'Collaborative execution with your goals at the centre.'],
  ['Quality & Trust', ShieldCheck, 'Reliable delivery, transparent communication and lasting value.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  function submitInquiry(e) { e.preventDefault(); const d = new FormData(e.currentTarget); const msg = `Hello BitByte Technologies!\n\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone')}\n\nRequirement: ${d.get('message')}`; window.open(`https://wa.me/918248654541?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer'); setSent(true) }
  function saveContact() { const card = ['BEGIN:VCARD', 'VERSION:3.0', 'N:Rao;Beema;;;', 'FN:BeemaRao. N', 'ORG:BitByte Technologies', 'TITLE:Managing Director', 'TEL;TYPE=CELL:+918248654541', 'EMAIL:md@bitbytetech.org', 'URL:https://www.bitbytetech.org', 'END:VCARD'].join('\n'); const url = URL.createObjectURL(new Blob([card], { type: 'text/vcard' })); const link = document.createElement('a'); link.href = url; link.download = 'BeemaRao-N-BitByte.vcf'; link.click(); URL.revokeObjectURL(url) }
  return <main>
    <header className="header">
      <a className="logo" href="#home"><img src={logo} alt="BitByte Technologies" /></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>{['Home', 'About', 'Services', 'Impact', 'Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{x}</a>)}</nav>
      <a className="button header-cta" href="#appointment"><CalendarDays size={17} /> Book Appointment <ArrowRight size={16} /></a>
      <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <section className="hero" id="home" style={{ backgroundImage: `url(${heroBackground})` }}><div className="hero-content">
      <span className="pill"><Sparkles size={14} /> AI Science for Business</span><h1>Imagination<br />to <em>Reality</em></h1><div className="gold-line" />
      <p>We transform bold ideas into <strong className="ai-solution-highlight">"AI-based digital solutions"</strong> that drive growth and deliver measurable business results.</p>
      <div className="hero-actions"><a className="button" href="https://www.bitbytetech.org" target="_blank" rel="noreferrer"><Globe2 size={18} /> Visit Our Website</a><a className="button outline gold" href="#appointment"><CalendarDays size={18} /> Book Appointment</a><a className="button outline" href="https://wa.me/918248654541" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp Now</a></div>
    </div><div className="hero-director"><div className="director-halo" /><img src={beemaRao} alt="BeemaRao. N, Managing Director" /><div className="director-card" tabIndex="0" aria-label="BeemaRao. N, Managing Director of BitByte Technologies"><div className="director-badge"><Sparkles/><span>Managing Director</span></div><strong>BeemaRao. N</strong><i>BitByte Technologies</i><small><b/>Leadership · Vision · Growth</small></div></div><a className="hero-qr" href="https://www.bitbytetech.org" target="_blank" rel="noreferrer" aria-label="Scan or open the BitByte Technologies website"><span>Scan to visit</span><img src={siteQr} alt="QR code for the BitByte Technologies website" /><strong>Our Website</strong></a></section>
    <section className="stats">{stats.map(([v, l, I]) => <article key={l}><I /><div><strong>{v}</strong><span>{l}</span></div></article>)}</section>
    <section className="section intro-grid" id="about">
      <article className="card about-card leadership-about"><div className="about-top"><Title over="Meet the Leadership" title="Vision backed by execution." /><span className="leadership-label"><Sparkles/>Driving digital growth</span></div><div className="about-profile-layout"><figure className="leader-portrait"><div className="portrait-orbit"/><img src={beemaRao} alt="BeemaRao. N, Managing Director" /><figcaption><span>Managing Director</span><strong>BeemaRao. N</strong><small>BitByte Technologies</small></figcaption></figure><div className="leader-story"><p className="leader-intro">Turning ambitious business ideas into future-ready digital products and brands.</p><p>I lead BitByte Technologies with one clear goal: combine strategy, technology and market intelligence to create <strong className="ai-solution-highlight">AI-based digital solutions</strong> that deliver measurable outcomes.</p><div className="expertise-tags"><span>AI Strategy</span><span>Digital Growth</span><span>Product Vision</span></div><div className="leader-metrics"><span><strong>10+</strong>Years of experience</span><span><strong>200+</strong>Happy clients</span></div><a className="leader-connect" href="#contact"><span>Start a conversation<small>Discuss your next big idea</small></span><ArrowRight/></a></div></div></article>
      <article className="card why-card"><Title over="Why BitByte" title="Built around your success." light /><p className="why-intro">A committed technology partner that brings strategy, creativity and execution together under one roof.</p><div className="reason-list">{reasons.map(([l, I,d]) => <div key={l}><i><I /></i><span><strong>{l}</strong><small>{d}</small></span><ArrowRight className="reason-arrow"/></div>)}</div><div className="why-promise"><span><Sparkles/>Our promise</span><blockquote>“We don’t just build software. We transform imagination into digital reality.”</blockquote><small>From first conversation to long-term growth, we stay invested in your success.</small></div></article>
    </section>
    <section className="section services" id="services"><div className="services-glow"/><div className="section-heading"><Title over="Our Core Expertise" title="Powering every stage of your digital growth." /><div className="services-intro"><p>From strategy to scalable technology, we bring everything together to turn ambitious ideas into measurable business outcomes.</p><div className="service-proof"><span><b>12</b> Specialised Services</span><span><b>AI</b> First Approach</span><span><b>360°</b> Growth Support</span></div></div></div><div className="services-grid">{services.map(([I, t, d],index) => <article className="service-card" key={t} tabIndex="0"><span className="service-number">{String(index+1).padStart(2,'0')}</span><i><I /></i><h3>{t}</h3><span className="service-hint">View details</span><div className="service-popup" role="tooltip"><div className="popup-heading"><span><I/></span><small>Capability overview</small></div><strong>{t}</strong><p>{d}</p><div className="popup-footer"><i/><span>Built for measurable growth</span><ArrowRight/></div></div></article>)}</div><div className="services-cta"><div><strong>Have an idea worth building?</strong><span>Let’s turn it into your next competitive advantage.</span></div><a className="button" href="#contact">Start Your Project <ArrowRight size={17} /></a></div></section>
    <section className="impact section" id="impact"><div className="impact-copy"><span className="eyebrow">Our impact in numbers</span><h2>Technology that creates<br />measurable momentum.</h2><p>From a first idea to a growing digital product, we stay focused on outcomes that matter.</p><span className="impact-pulse"><i />Live business impact</span></div><div className="impact-numbers"><article tabIndex="0"><CountUp value={1} suffix="M+" /><span>Users Impacted</span><i className="metric-line" /></article><article tabIndex="0"><CountUp value={120} suffix="+" /><span>Products Built</span><i className="metric-line" /></article><article tabIndex="0"><CountUp value={98} suffix="%" /><span>Project Success</span><i className="metric-line" /></article></div></section>
    <section className="section contact-section" id="contact"><div className="section-heading"><Title over="Let’s Connect" title="Ready to build your digital future?" /><p>Tell us what you’re working on. We’ll open a pre-filled WhatsApp conversation so you can reach us instantly.</p></div><div className="contact-grid">
      <form className="inquiry card" onSubmit={submitInquiry}><h3><Send />Send us an inquiry</h3><div className="form-row"><input name="name" placeholder="Your name *" required /><input name="email" type="email" placeholder="Your email *" required /></div><input name="phone" placeholder="Your phone number *" required /><textarea name="message" rows="5" placeholder="Tell us about your project *" required /><button className="button" type="submit">Send Inquiry <ArrowRight size={17} /></button>{sent && <small>Your inquiry is ready in WhatsApp—tap send to complete it.</small>}</form>
      <aside className="appointment card" id="appointment"><span className="appointment-icon"><CalendarDays /></span><span className="eyebrow">Make an appointment</span><h2>Meet with<br />Mr. Beema Rav N</h2><p>Let’s discuss your idea, business challenge and the best path forward.</p><a className="button" href="mailto:md@bitbytetech.org?subject=Book%20an%20appointment">Book Appointment <ArrowRight size={17} /></a><a className="button outline" href="https://wa.me/918248654541" target="_blank" rel="noreferrer"><MessageCircle size={18} />WhatsApp Now</a><div className="social-connect"><span>Connect with us</span><div><a className="instagram" href="https://www.instagram.com/bit_byte.technologies/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a><a className="facebook" href="https://www.facebook.com/profile.php?id=61590062057662" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a><a className="linkedin" href="https://www.linkedin.com/company/bitbyte-technologie/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a><a className="youtube" href="https://www.youtube.com/@BitByteTechnologies" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a><a className="whatsapp" href="https://wa.me/918248654541" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a><button type="button" onClick={saveContact} aria-label="Save contact"><i className="fa-solid fa-address-card" /></button></div><small>Follow us or save our contact</small></div></aside>
    </div></section>
    <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><span className="footer-logo"><img src={logo} alt="BitByte Technologies" /></span><p>We combine strategy, design and technology to build intelligent digital experiences that create real business results.</p><a className="footer-website" href="https://www.bitbytetech.org" target="_blank" rel="noreferrer"><Globe2 /> Visit our website</a></div><div className="footer-column"><h3>Quick links</h3>{['Home', 'About', 'Services', 'Impact', 'Contact'].map(x => <a key={x} href={`#${x.toLowerCase()}`}><ArrowRight />{x}</a>)}</div><div className="footer-column"><h3>Our services</h3>{['AI Solutions', 'Web Development', 'Digital Marketing', 'Business Analytics', 'Mobile Apps'].map(x => <a key={x} href="#services"><ArrowRight />{x}</a>)}</div><div className="footer-column footer-contact"><h3>Get in touch</h3><a href="tel:+918248654541"><i className="fa-solid fa-phone" />+91 97892 74743</a><a href="mailto:md@bitbytetech.org"><i className="fa-solid fa-envelope" />md@bitbytetech.org</a><p><i className="fa-solid fa-location-dot" />Salem, Tamil Nadu, India</p><div className="footer-socials"><a href="https://www.instagram.com/bit_byte.technologies/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a><a href="https://www.facebook.com/profile.php?id=61590062057662" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a><a href="https://www.linkedin.com/company/bitbyte-technologie/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a><a href="https://www.youtube.com/@BitByteTechnologies" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a></div></div></div><div className="footer-bottom"><p>© 2026 BitByte Technologies. All rights reserved.</p><span>AI Science for Business</span><div><a href="#home">Privacy Policy</a><a href="#home">Terms & Conditions</a></div></div></footer>
  </main>
}
function Title({ over, title, light = false }) { return <div className={`section-title${light ? ' light' : ''}`}><span>{over}</span><h2>{title}</h2></div> }

function CountUp({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const node = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const start = performance.now()
      const duration = 1200
      const animate = (now) => { const progress = Math.min((now - start) / duration, 1); setCount(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) requestAnimationFrame(animate) }
      requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: .4 })
    if (node) observer.observe(node)
    return () => observer.disconnect()
  }, [value])
  return <strong ref={ref}>{count}{suffix}</strong>
}
export default App
