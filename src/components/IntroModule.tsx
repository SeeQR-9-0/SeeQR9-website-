import React from 'react'

export default function IntroModule() {
  return (
    <div className="module">
        <div className="LContainer">
          <div className="intro-text">
            <h2 style={{fontSize: '80px', fontWeight: '500'}}>SeeQR</h2>
            <p>SeeQR is a <b>convenient one-stop shop</b> for efficient SQL database manipulation and performance testing. SeeQR can be used throughout the database life-cycle, from creation to testing.</p>
          </div>
        </div>
        <div className="RContainer">
          <div className="intro-image">
            <img src = 'favicon.png' style={{width:'20rem', padding:'2rem'}} alt="logo"></img>
          </div>
        </div>
      </div>
  )
}
