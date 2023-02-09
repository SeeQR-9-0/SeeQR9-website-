import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
  <div className="Navbar">
    <div className="left-nav">
      <img src = "logo_monochrome.png" className ='logo' alt="logo"></img>
      <h1>SeeQR</h1>
    </div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/team">Team</Link></li>
        <li><Link to="https://github.com/"><img src='media/github-mark.png' style={{width: '30px', marginTop: '-4px' }} /> </Link></li>
      </ul>
    </nav>
  </div>
  )
}

