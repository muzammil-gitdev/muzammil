import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid-container">
          <div className="hero-text-container">
            <p className="hero-name">Syed Muzammil Ali Shah</p>
            <p className="hero-skill">Web Developer</p>
            <p className="hero-text">
              I'm a front-end developer passionate about building clean and
              responsive websites using HTML, CSS, and JavaScript. I specialize
              in crafting dynamic and interactive user interfaces with React.
            </p>
            <div>
              <button
                style={{ fontSize: "1.8rem", padding: "1.2rem 2.4rem" }}
                className="btn"
              >
                View projects
                <MoveRight />
              </button>
            </div>
          </div>
          <img className="hero-img" src="APC_0631g.JPG" alt="muzammil" />
        </div>
      </div>
    </section>
  );
}
