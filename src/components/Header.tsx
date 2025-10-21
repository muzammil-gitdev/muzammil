import { Menu } from "lucide-react";

export default function Header() {
  const navLinks = ["Home", "Projects", "About", "Skills", "Services"];
  return (
    <header className="header-container">
      <div className="header-inside-container">
        <nav className="nav-container">
          <img className="nav-logo" src="logo.png" alt="" />
          <ul className="nav-links-container">
            {navLinks.map((curr, i) => (
              <li key={i} className="nav-links">
                {curr}
              </li>
            ))}
          </ul>
          <Menu className="btn-nav-open" />
          <button className="btn btn-cta">Get in Touch</button>
        </nav>
      </div>
    </header>
  );
}
