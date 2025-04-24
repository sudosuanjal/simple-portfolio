import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="anon1mb.jpg" width={45} height={45} alt="Profile" />
        <h1>sudosuanjal</h1>
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <a
              href="https://x.com/sudosuanjal"
              target="_blank"
              rel="noopener noreferrer"
            >
              x
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sudosuanjal"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sudosuanjal"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
