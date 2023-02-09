import React from "react";

export default function InterfaceFeatures() {
  return (
    <div className="module">
      <div className="LContainer">
        {/* <h1 style={{ fontSize: "60px", fontWeight: "500" }}>
          Interface & Features Overview
        </h1> */}
        <img src="media/config_demo2.gif" style={{width:'100%'}} alt="" />
      </div>
      <div className="RContainer">
        <div className="applaunch-text">
          <h1>Application Launch</h1>
          <p>
            Upon application launch, navigate to the config menu by clicking on
            the gear icon on the top left.
          </p>
          <p>
            Ensure that your usernames, passwords, and ports are accurate in the
            SeeQR config.
          </p>
          <h2>Creating New Databases</h2>
          <p>
            Besides using the existing databases, the application also provides
            various options to create new databases:
          </p>
          <ul>
            <li>Importing .sql or .tar files.</li>
            <li>
              Navigating to the Create Database view at bottom of sidebar.
            </li>
            <li>
              Copying an existing database (with or without original data).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
