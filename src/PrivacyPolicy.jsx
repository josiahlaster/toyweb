import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <>
        <p>
          Transformative Opportunities for Youth ("TOY," "we," "us," or "our")
          operates the website{" "}
          <a href="https://transformativeyouth.org">transformativeyouth.org</a>{" "}
          (the "Site"). This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our Site. We
          are committed to protecting the privacy of all visitors, especially
          minors ages 8–21 who participate in our programs.
        </p>
        <p>
          By using this Site you agree to the practices described in this
          policy. If you do not agree, please discontinue use of the Site.
        </p>
      </>
    ),
  },
  {
    id: "nonprofit",
    title: "About Our Organization",
    content: (
      <>
        <p>
          Transformative Opportunities for Youth (TOY) is a nonprofit youth
          empowerment initiative dedicated to inspiring personal growth,
          leadership, and resilience in young people ages 8–21. We provide
          safe, supportive spaces where youth can explore their interests,
          build life skills, and strengthen community connections.
        </p>
        <p>
          TOY is an educational and community-based organization. This Site is
          operated solely to share information about our programs, events, and
          mission. We do not sell products, run advertising networks, or
          monetize user data.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    title: "Information We Collect",
    content: (
      <>
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Contact Information</strong> – Name, email address, and
            phone number voluntarily provided through contact forms or program
            registration.
          </li>
          <li>
            <strong>Usage Data</strong> – Anonymous analytics such as pages
            visited, time on site, browser type, and referring URL. This data
            cannot identify you personally.
          </li>
          <li>
            <strong>Cookies</strong> – Small text files placed on your device
            to remember preferences. You can disable cookies in your browser
            settings without affecting the core functionality of this Site.
          </li>
        </ul>
        <p>
          <strong>We do not collect</strong> Social Security numbers, payment
          information, government-issued ID numbers, or sensitive health data
          through this Site.
        </p>
      </>
    ),
  },
  {
    id: "minors",
    title: "Children's Privacy (COPPA Compliance)",
    content: (
      <>
        <p>
          Because TOY serves youth ages 8–21, we take children's privacy
          seriously and comply with the{" "}
          <strong>
            Children's Online Privacy Protection Act (COPPA)
          </strong>
          .
        </p>
        <ul>
          <li>
            We do <strong>not</strong> knowingly collect personal information
            directly from children under 13 through this website.
          </li>
          <li>
            Program enrollment for participants under 13 is handled in person
            or through a parent/guardian, not through this Site.
          </li>
          <li>
            If you believe we have inadvertently collected information from a
            child under 13, please contact us immediately at{" "}
            <a href="mailto:info@transformativeyouth.org">
              info@transformativeyouth.org
            </a>{" "}
            and we will delete it promptly.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    title: "How We Use Your Information",
    content: (
      <>
        <p>Information collected is used exclusively to:</p>
        <ul>
          <li>Respond to inquiries and program registration requests.</li>
          <li>
            Send program updates, newsletters, or event announcements (only if
            you opt in).
          </li>
          <li>
            Improve the content and usability of our Site using anonymous
            analytics.
          </li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
        <p>
          We will <strong>never</strong> sell, rent, or trade your personal
          information to third parties for marketing purposes.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Information Sharing & Disclosure",
    content: (
      <>
        <p>We may share information only in these limited circumstances:</p>
        <ul>
          <li>
            <strong>Service Providers</strong> – Trusted vendors (e.g., email
            hosting, website analytics) who assist us in operating the Site,
            subject to confidentiality agreements.
          </li>
          <li>
            <strong>Legal Requirements</strong> – If required by law,
            subpoena, or government request.
          </li>
          <li>
            <strong>Safety</strong> – To protect the rights, safety, or
            property of TOY, our participants, or the public.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    content: (
      <p>
        We implement reasonable administrative, technical, and physical
        safeguards to protect your information. Our Site is served over HTTPS
        (encrypted). However, no method of transmission over the Internet is
        100% secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "links",
    title: "Third-Party Links",
    content: (
      <p>
        Our Site may contain links to external websites (e.g., social media,
        partner organizations). We are not responsible for the privacy
        practices of those sites and encourage you to review their policies
        before sharing any personal information.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your Rights & Choices",
    content: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>
            <strong>Access</strong> – Request a copy of the personal
            information we hold about you.
          </li>
          <li>
            <strong>Correction</strong> – Request correction of inaccurate
            information.
          </li>
          <li>
            <strong>Deletion</strong> – Request deletion of your personal
            information.
          </li>
          <li>
            <strong>Opt-out</strong> – Unsubscribe from communications at any
            time by emailing us or clicking the unsubscribe link in any
            email.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:info@transformativeyouth.org">
            info@transformativeyouth.org
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. When we do, we will
        revise the "Last Updated" date at the top of this page. We encourage
        you to review this page occasionally to stay informed.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions, concerns, or requests regarding this Privacy
          Policy, please contact us:
        </p>
        <address>
          <strong>Transformative Opportunities for Youth (TOY)</strong>
          <br />
          Phone: <a href="tel:9844447878">984-444-7878</a>
          <br />
          Email:{" "}
          <a href="mailto:info@transformativeyouth.org">
            info@transformativeyouth.org
          </a>
        </address>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <header className="pp-nav">
        <Link to="/" className="pp-back">
          ← Back to Home
        </Link>
        <span className="pp-org">Transformative Opportunities for Youth</span>
      </header>

      <main className="pp-main">
        {/* Hero banner */}
        <div className="pp-hero">
          <h1>Privacy Policy</h1>
          <p className="pp-date">
            Last Updated: <time dateTime="2025-06-17">June 17, 2025</time>
          </p>
          <p className="pp-tagline">
            TOY is committed to transparency and the protection of every
            visitor's privacy — especially the young people we serve.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="pp-toc" aria-label="Page sections">
          <h2>Contents</h2>
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Policy sections */}
        <div className="pp-body">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="pp-section">
              <h2>{s.title}</h2>
              {s.content}
            </section>
          ))}
        </div>

        <div className="pp-footer-note">
          <p>
            This Privacy Policy was written for{" "}
            <strong>Transformative Opportunities for Youth</strong>, a
            nonprofit educational organization serving youth ages 8–21 in the
            Durham, NC area.
          </p>
          <Link to="/" className="pp-back-bottom">
            ← Return to transformativeyouth.org
          </Link>
        </div>
      </main>
    </>
  );
}
