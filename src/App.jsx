import { useState } from "react";

const approachItems = [
  {
    title: "Empowerment Through Experience",
    text: "Each trip, workshop, and mentoring session helps youth see themselves as leaders and problem solvers."
  },
  {
    title: "Community Engagement",
    text: "We connect youth to mentors, organizations, and civic leaders who model integrity, service, and compassion."
  },
  {
    title: "Wellness & Belonging",
    text: "Our trauma-informed framework promotes emotional safety, peer connection, and self-expression."
  },
  {
    title: "Skill Development",
    text: "Programs integrate teamwork, communication, and creative thinking that prepare participants for adulthood and civic responsibility."
  }
];

const opportunityItems = [
  {
    title: "Field Experiences",
    text: "Educational trips, such as the TOY Charlotte Experience, expose youth to new environments that spark curiosity and cultural awareness."
  },
  {
    title: "Peer & Mentor Support",
    text: "Structured mentorship and peer programs provide role models who understand youth challenges and aspirations."
  },
  {
    title: "Leadership Pathways",
    text: "Participants are encouraged to lead group projects, volunteer in their communities, and design youth-led initiatives."
  },
  {
    title: "Life Skills Training",
    text: "Workshops on financial literacy, wellness, digital responsibility, and career readiness prepare youth for future success."
  }
];

function NavBar() {
  const logoCandidates = [
    "/assets/toy-logo.png",
    "/assets/ToyLogo.png",
    "/assets/logo.png",
    "/assets/TOYLogo.png",
    "/logo.png"
  ];
  const [logoIndex, setLogoIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  const handleLogoError = () => {
    if (logoIndex < logoCandidates.length - 1) {
      setLogoIndex((idx) => idx + 1);
      return;
    }
    setShowFallback(true);
  };

  return (
    <header className="nav-wrap">
      <a className="logo-mark" href="#home" aria-label="Transformative Opportunities for Youth">
        {showFallback ? (
          <span className="logo-fallback">TOY</span>
        ) : (
          <img
            src={logoCandidates[logoIndex]}
            alt="TOY logo"
            onError={handleLogoError}
          />
        )}
      </a>
      <nav>
        <a className="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#opportunities">Programs</a>
        <a href="#approach">Resources</a>
        <a href="#belief">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>
          <span className="hero-blue">Transformative</span>{" "}
          <span className="hero-green">Opportunities</span>{" "}
          <span className="hero-gold">for</span>{" "}
          <span className="hero-blue">Youth</span>
        </h1>
        <p>
          Empowering young people ages 8-21 through opportunity, support, and
          positive change.
        </p>
        <div className="hero-divider" />
        <div className="hero-actions">
          <a href="#about" className="btn primary">
            Learn More <span aria-hidden="true">→</span>
          </a>
          <a href="#opportunities" className="btn secondary">
            Get Involved <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="contact-card">
        <h3>Contact Us</h3>
        <p className="contact-row">
          
          <strong>Phone:</strong> 984-444-7878
        </p>
        <p className="contact-row">
          <strong>Email:</strong> info@transformativeyouth.org
        </p>
      </div>
      <div className="hero-feature-row">
        <div className="mini-feature">
          <span className="mini-icon" aria-hidden="true">🧗</span>
          <div>
            <h4>Empower</h4>
            <p>Building confidence and leadership in every youth.</p>
          </div>
        </div>
        <div className="mini-feature">
          <span className="mini-icon" aria-hidden="true">👥</span>
          <div>
            <h4>Support</h4>
            <p>Providing resources and guidance to thrive.</p>
          </div>
        </div>
        <div className="mini-feature">
          <span className="mini-icon" aria-hidden="true">👐</span>
          <div>
            <h4>Transform</h4>
            <p>Creating brighter futures and stronger communities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main>
      <NavBar />
      <Hero />

      <section id="about" className="section">
        <h2>About Transformative Opportunities for Youth (TOY)</h2>
        <p>
          Transformative Opportunities for Youth (TOY) is a youth empowerment
          initiative designed to inspire personal growth, leadership, and
          resilience. The program provides safe, supportive spaces where young
          people ages 8-21 can explore their interests, build life skills, and
          strengthen community connections.
        </p>
        <p>
          At TOY, Transformative Opportunities means opening doors that change
          lives, not just through traditional education, but through real-world
          experiences that shape purpose and confidence. We believe
          transformation happens when youth are given the tools, trust, and
          encouragement to take ownership of their own stories.
        </p>
      </section>

      <section id="approach" className="section alt">
        <h2>Our Approach</h2>
        <div className="grid">
          {approachItems.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="opportunities" className="section">
        <h2>Examples of Transformative Opportunities</h2>
        <div className="grid">
          {opportunityItems.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="belief" className="section belief">
        <h2>Our Belief</h2>
        <p>
          Transformation begins with opportunity and opportunity begins with
          access. TOY is committed to ensuring every young person, regardless
          of background, can learn, grow, and thrive through experiences that
          foster independence, empathy, and hope.
        </p>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Transformative Opportunities for Youth
          (TOY)
        </p>
      </footer>
    </main>
  );
}

export default App;
