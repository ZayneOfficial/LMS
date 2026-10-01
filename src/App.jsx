import { useState } from 'react'
import './App.css'

const subjects = [
  { number: '01', title: 'Mathematics', detail: 'Algebra, geometry, calculus & statistics' },
  { number: '02', title: 'Physics', detail: 'Make the big ideas finally click' },
  { number: '03', title: 'Study skills', detail: 'Habits that make every subject easier' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Maya Bennett home">
          <span className="wordmark-mark">mb</span>
          <span>Zayne <small>PRIVATE TUTOR</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span>
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#subjects" onClick={() => setMenuOpen(false)}>Subjects</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>My approach</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowIcon /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot"></span> ONE-TO-ONE TUTORING · BROOKLYN & ONLINE</p>
          <h1>Big ideas.<br /><span>Brighter</span> futures.</h1>
          <p className="hero-intro">Math and science tutoring that turns “I can’t” into “oh, I get it.” A little patience, a lot of curiosity, and a plan that’s made for you.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Book a free intro <ArrowIcon /></a>
            <a className="text-link" href="#approach">Get to know me <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof">
            <span className="proof-mark" aria-hidden="true">✳</span>
            <p><strong>One student at a time</strong><br />A plan that fits how you learn</p>
          </div>
        </div>
        <div className="hero-art">
          <div className="photo-frame">
            <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1100&q=85" alt="Tutor smiling while holding a notebook" />
          </div>
          <div className="floating-note"><span className="note-spark">✳</span><span>Curiosity looks<br />good on you.</span></div>
          <div className="image-caption"><span>01 / 03</span><span>LEARNING, YOUR WAY</span></div>
          <div className="hero-sticker" aria-hidden="true"><span>GOOD<br />THINGS<br />GROW HERE</span><span className="sticker-star">✳</span></div>
        </div>
        <div className="hero-side-label" aria-hidden="true">A GOOD PLACE TO BEGIN</div>
      </section>

      <section className="intro-band" id="about">
        <p className="eyebrow">A NOTE FROM MAYA</p>
        <div className="intro-content">
          <h2>There’s no such thing as a “math person.” <span>There’s just the moment it starts to make sense.</span></h2>
          <div className="intro-note"><p>I’m Maya, a tutor and lifelong question-asker. I help students find their footing, build real confidence, and discover they’re more capable than they thought.</p><a href="#approach" className="round-link" aria-label="Read about my approach"><ArrowIcon /></a></div>
        </div>
      </section>

      <section className="subjects-section" id="subjects">
        <div className="section-heading">
          <div><p className="eyebrow">WHAT WE CAN WORK ON</p><h2>A little less “ugh.”<br /><span>A lot more “aha!”</span></h2></div>
          <p className="section-aside">Every session starts where you are. We’ll figure out where you want to go together.</p>
        </div>
        <div className="subject-list">
          {subjects.map((subject) => (
            <a className="subject-row" href="#contact" key={subject.number}>
              <span className="subject-number">{subject.number}</span>
              <span className="subject-title">{subject.title}</span>
              <span className="subject-detail">{subject.detail}</span>
              <span className="subject-arrow"><ArrowIcon /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-visual">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85" alt="Students sharing ideas around a table" loading="lazy" />
          <div className="visual-label"><span>LESS PRESSURE.</span><span>MORE PROGRESS.</span></div>
        </div>
        <div className="approach-copy">
          <p className="eyebrow">HOW WE’LL GET THERE</p>
          <h2>Good learning<br />starts with <span>you.</span></h2>
          <div className="approach-step"><span>01</span><div><h3>First, we listen.</h3><p>We’ll start with what feels tricky and what you’d love to feel confident about.</p></div></div>
          <div className="approach-step"><span>02</span><div><h3>Then, we make a plan.</h3><p>Clear goals, the right pace, and sessions built around how you learn best.</p></div></div>
          <div className="approach-step"><span>03</span><div><h3>And celebrate the wins.</h3><p>Small breakthroughs add up. We’ll notice every one of them.</p></div></div>
        </div>
      </section>

      <section className="quote-section">
        <span className="quote-mark" aria-hidden="true">“</span>
        <blockquote>A good tutor doesn’t hand you answers. They help you see you can <em>find them.</em></blockquote>
        <p>THE IDEA BEHIND EVERY SESSION</p>
        <div className="quote-pagination"><span></span><span></span><span></span></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy"><p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>Let’s make<br />it <span>click.</span></h2><p>Tell me a little about what you’re looking for. I’ll be in touch within one school day.</p><a href="mailto:hello@mayabennett.tutoring" className="email-link">hello@mayabennett.tutoring <ArrowIcon /></a></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? <div className="form-success" role="status"><span>✳</span><h3>Thanks for reaching out!</h3><p>Your note is ready for Maya. She’ll be in touch soon.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another message</button></div> : <>
            <label htmlFor="parent-name">Your name</label><input id="parent-name" name="name" placeholder="What should I call you?" required />
            <label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" required />
            <label htmlFor="student">What would you like help with?</label><select id="student" name="subject" defaultValue=""><option value="" disabled>Select a subject</option><option>Mathematics</option><option>Physics</option><option>Study skills</option><option>Something else</option></select>
            <button className="button button-dark form-submit" type="submit">Send a note <ArrowIcon /></button>
            <p className="form-footnote">No pressure, no commitment. Just a friendly hello.</p>
          </>}
        </form>
      </section>

      <footer className="site-footer"><a className="wordmark footer-wordmark" href="#top"><span className="wordmark-mark">mb</span><span>Zayne <small>PRIVATE TUTOR</small></span></a><p>Good things grow with a little help.</p><span className="copyright">© 2026 ZAYNE BENNETT</span></footer>
    </main>
  )
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

export default App
