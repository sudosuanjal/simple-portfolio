import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <img src="masked.jpg" width={45} height={45} alt="Profile" />
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
              <img src="xlogo.jpg" width={30} height={30} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/sudosuanjal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="github.png" width={30} height={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sudosuanjal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="linkedin.png" width={30} height={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
