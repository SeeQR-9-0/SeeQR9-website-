import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="left-nav">
        <img src="logo_monochrome.png" className="logo" alt="logo"></img>
        <h1>SeeQR</h1>
      </div>
      <div className="center-nav">
        <ul>
          <li>
            <ScrollLink 
              className="scroll-link" 
              activeClass="active" 
              to="getting-started"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              >
              Getting Started
            </ScrollLink>
          </li>
          <li><ScrollLink 
              activeClass="active" 
              className="scroll-link" 
              to="interface-features"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              >
              Interface & Features
            </ScrollLink></li>
            <li><ScrollLink
              className="scroll-link" 
              activeClass="active" 
              to="databases"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              >
              Databases
            </ScrollLink></li>
          <li><ScrollLink
              className="scroll-link" 
              activeClass="active" 
              to="contributing"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              >
              Contributing
            </ScrollLink></li>
        </ul>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo">Demo</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="https://github.com/">
              <img
                src="media/github-mark.png"
                style={{ width: "30px", marginTop: "-4px" }}
              />{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
