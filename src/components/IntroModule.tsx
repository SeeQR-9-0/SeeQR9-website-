import React from 'react'

export default function IntroModule() {
  return (
    <div className="intro-module">
      <div style={{gap:'0'}} className="module">
        <div style={{padding:'0'}} className="LContainer">
          <div className="intro-text">
            <h2 style={{ fontSize: "90px", fontWeight: "700" }}>SeeQR</h2>
            <h3 style={{ fontSize: "30px", fontWeight: "600" }}>
              A SQL database efficiency testing tool.
            </h3>
            <p>
              SeeQR is a <b>convenient one-stop shop</b> for efficient SQL
              database manipulation and performance testing. SeeQR can be used
              throughout the database life-cycle, from creation to testing.
            </p>
          </div>
        </div>
        <div style={{padding:'0'}} className="RContainer">
          <div className="intro-image">
            <img
              src="favicon.png"
              style={{ width: "20rem", padding: "2rem" }}
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
