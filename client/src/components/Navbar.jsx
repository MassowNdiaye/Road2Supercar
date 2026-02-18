import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logoWhite from "../images/Road2Supercar-white.png";
import logoBlack from "../images/Road2Supercar-black.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="homepage.html">
          <img
            className="logo-white"
            src={logoWhite}
            alt="Road2supercar_logo"
          />
          <img
            className="logo-black"
            src={logoBlack}
            alt="Road2supercar_logo"
          />
        </a>
      </div>

      {/* Navigation links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="homepage.html" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="../index.html" onClick={() => setMenuOpen(false)}>
              Vehicles
            </a>
          </li>
          <li>
            <a href="contact.html" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MassowNdiaye"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/elhadji-massow-ndiaye-b11397299"
              onClick={() => setMenuOpen(false)}
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* Menu icon button */}
      <div className="menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faXmark : null} />
        {!menuOpen && "Menu"}
      </div>

      <div className="account">
        Account <FontAwesomeIcon icon={faCircleUser} />
      </div>
    </nav>
  );
}

export default Navbar;
