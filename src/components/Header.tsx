import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinks = ["Home", "Projects", "About", "Process", "Contact"];

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <header className="header-container">
      <div className="header-inside-container">
        <nav className="nav-container">
          <img className="nav-logo" src="logo.png" alt="" />
          <ul
            className={
              isNavOpen ? "nav-links-container nav-open" : "nav-links-container"
            }
          >
            {navLinks.map((curr, i) => {
              const refe = `${curr.toLowerCase()}`;
              return (
                <a
                  onClick={() => scrollToElement(refe)}
                  key={i}
                  className="nav-links"
                >
                  {curr}
                </a>
              );
            })}
          </ul>
          <Menu className="btn-nav-open" onClick={toggleNav} />
          <button
            onClick={() => scrollToElement("contact")}
            className="btn btn-cta"
          >
            Get in Touch
          </button>
        </nav>
      </div>
    </header>
  );
}
