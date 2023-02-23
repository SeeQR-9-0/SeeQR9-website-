import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";


export default function Navbar() {
  const location = useLocation();
  const isDemoPage = location.pathname === "/demo";


  return (
    <div className="Navbar">
      <div className="left-nav">
        <img src="logo_monochrome.png" className="logo" alt="logo"></img>
        <h1>SeeQR</h1>
      </div>
      {isDemoPage && (
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
            <li>
              <ScrollLink
                activeClass="active"
                className="scroll-link"
                to="application-launch"
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
              >
                Application Launch
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="scroll-link"
                activeClass="active"
                to="databases"
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
              >
                Databases
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="scroll-link"
                activeClass="active"
                to="queries"
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
              >
                Queries
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="scroll-link"
                activeClass="active"
                to="data"
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
              >
                Data
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="scroll-link"
                activeClass="active"
                to="compare"
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
              >
                Compare
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
      <div className="right-nav">
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
              <Link to="https://github.com/open-source-labs/SeeQR">
                <img
                  src="media/github-mark.png"
                  style={{ width: "30px", marginTop: "0px" }}
                />{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
