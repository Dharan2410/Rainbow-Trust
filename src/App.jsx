import { useState } from "react";
import logo from "./assets/logo.jpg";
import hero from "./assets/hero.jpg"; // DEMO photo - replace with a real school photo
import prayer from "./assets/prayer.jpg";
import awards from "./assets/awards.jpg";
import classroom from "./assets/classroom.jpg";

// ---- Edit all site content here ----
const TRUST = {
  name: "Amarapoondi Rainbow Kalviyiyal Podhu Dharma Arakkattalai",
  school: "Rainbow Matriculation School",
  email: "rainbowcharitabletrustamp@gmail.com",
  phone: "9751226258",
  president: "Ravi S",
  address: ["C50, East Garden, Amarapoondi", "Palani, Dindigul - 624613"],
};

const NAV = [
  ["about", "About"],
  ["school", "Our School"],
  ["life", "School Life"],
  ["achievements", "Achievements"],
  ["contact", "Contact"],
];

const PILLARS = [
  { t: "Quality Education", d: "Every child deserves a strong foundation. Our classrooms focus on clear teaching, curiosity and confidence." },
  { t: "Values & Culture", d: "Daily prayer, respect for elders and good habits shape children into kind, disciplined individuals." },
  { t: "All-round Growth", d: "Beyond textbooks, we encourage sports, arts, yoga and competitions so each child can shine." },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const go = () => setOpen(false);
  return (
    <>
      <header className="nav">
        <a href="#top" className="brand">
          <img src={logo} alt="Rainbow logo" />
          <span>Amarapoondi Rainbow</span>
        </a>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        <nav className={open ? "links open" : "links"}>
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={go}>{label}</a>
          ))}
          <a href="#contact" className="btn small" onClick={go}>Get in touch</a>
        </nav>
      </header>

      <section id="top" className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="overlay" />
        <div className="hero-inner">
          <p className="eyebrow">{TRUST.school}</p>
          <h1>Every child has a dream. Together, we help it rise.</h1>
          <p className="lead">{TRUST.name} runs {TRUST.school} in Amarapoondi, Palani, nurturing young minds with knowledge, values and care.</p>
          <div className="cta">
            <a href="#about" className="btn">Learn more</a>
            <a href="#contact" className="btn ghost">Contact us</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap two">
          <div>
            <p className="tag">About the Trust</p>
            <h2>Education as a service to society</h2>
            <p>{TRUST.name} is a charitable educational trust based in Amarapoondi, near Palani. The trust runs {TRUST.school} with a simple belief: education, given with love and good values, can change a family and a village.</p>
            <p className="muted">Led by our President, <b>{TRUST.president}</b>.</p>
          </div>
          <img className="pic" src={prayer} alt="A student praying before lunch" />
        </div>
      </section>

      <section id="school" className="section alt">
        <div className="wrap">
          <p className="tag center">Our School</p>
          <h2 className="center">What we stand for</h2>
          <div className="cards">
            {PILLARS.map((p) => (
              <div className="card" key={p.t}><h3>{p.t}</h3><p>{p.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="life" className="section">
        <div className="wrap two rev">
          <img className="pic" src={classroom} alt="Teacher teaching Earth and its Continents" />
          <div>
            <p className="tag">School Life</p>
            <h2>Learning that comes alive</h2>
            <p>From the first day of LKG, our teachers use globes, charts and hands-on activities so children understand the world around them. Lunch begins with a prayer, and every day is a chance to learn something new together.</p>
          </div>
        </div>
      </section>

      <section id="achievements" className="section alt">
        <div className="wrap two">
          <div>
            <p className="tag">Achievements</p>
            <h2>Small students, big victories</h2>
            <p>Our students take part in competitions across sports, yoga, arts and more, and bring home trophies and shields for their school. Every award is a proud moment for the children, their teachers and their families.</p>
          </div>
          <img className="pic" src={awards} alt="Students holding trophies" />
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="wrap">
          <p className="tag center light">Contact</p>
          <h2 className="center">We would love to hear from you</h2>
          <div className="cards">
            <div className="card dark"><h3>Address</h3><p>{TRUST.address[0]}<br />{TRUST.address[1]}</p></div>
            <div className="card dark"><h3>Phone</h3><p><a href={`tel:+91${TRUST.phone}`}>{TRUST.phone}</a></p></div>
            <div className="card dark"><h3>Email</h3><p><a href={`mailto:${TRUST.email}`}>{TRUST.email}</a></p></div>
          </div>
        </div>
      </section>

      <footer>
        <img src={logo} alt="" />
        <p>© {new Date().getFullYear()} {TRUST.name}</p>
      </footer>
    </>
  );
}
