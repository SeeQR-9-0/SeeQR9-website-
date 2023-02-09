import React from "react";

export default function InterfaceFeatures2() {
  return (
    <div className="module">
      <div className="RContainer">
        <div className="applaunch-text" style={{padding: '5rem 2rem'}}>
          <h2>Exporting Databases</h2>
          <p>Users can export any database onto their local machine.</p>
          <h2>Toggling Views</h2>
          <ul>
            <li>
              Users can toggle between the 'DATABASES' view and the 'QUERIES'
              view.
            </li>
            <li>
              Users can toggle between an 'ER DIAGRAM' view and the 'TABLES'
              view for each database.
            </li>
          </ul>
        </div>
      </div>
        <div className="LContainer">
          <img src="media/quick_start.gif" style={{width: '100%'}} alt="" />
        </div>
    </div>
  );
}
