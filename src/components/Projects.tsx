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
            <img
              className="project-img"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt=""
            />
            <div className="project-overlay">
              <p className="overlay-text">React + TypeScript</p>
              <p className="overlay-description">Bus Travel Website</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <ExternalLink color="#a364e2" />
                <a className="project-link" href="https://www.facebook.com">
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img
              className="project-img"
              src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt=""
            />
            <div className="project-overlay">
              <p className="overlay-text">React + TypeScript</p>
              <p className="overlay-description">School Management System</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <ExternalLink color="#a364e2" />
                <a className="project-link" href="https://www.facebook.com">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="project">
            <img
              className="project-img"
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
              alt=""
            />
            <div className="project-overlay">
              <p className="overlay-text">React + TypeScript</p>
              <p className="overlay-description">School Management System</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <ExternalLink color="#a364e2" />
                <a className="project-link" href="https://www.facebook.com">
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
