import { ExternalLink } from "lucide-react";

function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-text-container">
          <h2 className="projects-heading">Featured Projects</h2>
          <p className="projects-text">
            Explore my latest web development projects across various
            technologies
          </p>
        </div>
        <div className="projects-grid-container">
          <div className="project">
            <img className="project-img" src="omnifoods.webp" alt="" />
            <div className="project-overlay">
              <p className="overlay-text">OmniFoods</p>
              <p className="overlay-description">HTML+CSS+JS</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <ExternalLink color="#a364e2" />
                <a
                  className="project-link"
                  href="https://omnifoods-six.vercel.app/"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img className="project-img" src="k2tours.webp" alt="" />
            <div className="project-overlay">
              <p className="overlay-text">K2-Tours</p>
              <p className="overlay-description">React+TypeScript</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <ExternalLink color="#a364e2" />
                <a className="project-link" href="https://k2tours.vercel.app/">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <img className="project-img" src="pig-game.webp" alt="" />
            <div className="project-overlay">
              <p className="overlay-text">Pig Game</p>
              <p className="overlay-description">HTML CSS JS</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <ExternalLink color="#a364e2" />
                <a
                  className="project-link"
                  href="https://muzammil-gitdev.github.io/pig-game/"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
