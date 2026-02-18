import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="links">
          <div className="foot-links">
            <ul>
              <li>Helpful links:</li>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="shop.html">Vehicles</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <p>Copyright © 2026 Road2Supercars Inc. All rights reserved.</p>
          </div>

          <div className="social-links">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/massow.ndiaye/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/elhadji-massow-ndiaye-b11397299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/MassowNdiaye"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
