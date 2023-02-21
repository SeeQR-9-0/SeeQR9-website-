import React from "react";

export default function DatabasesModule() {
  return (
    <div className="module">
      <div className="LContainer">
        {/* <h1 style={{ fontSize: "60px", fontWeight: "500" }}>
          Interface & Features Overview
        </h1> */}
        <img src="media/dummy_data.gif" style={{ width: "100%" }} alt="" />
      </div>
      <div className="RContainer">
        <div className="applaunch-text" style={{padding: '1rem 3rem'}}>
          <head>
            <title>Databases</title>
          </head>
          <body>
            <h1 style={{paddingBottom:'1rem'}}>Databases</h1>
            <p>
              In the 'DATABASES' view, an interactive Entity Relationship
              Diagram (ER DIAGRAM) is displayed for the selected database.
            </p>
            <p>
              Users can select TABLE to see selected database in tabular form.
            </p>
            <p>
              Users can select a table from a list of all the tables in the
              schema of the currently selected database. Information about the
              selected table is then displayed.
            </p>
            <p>
              The name and size of the selected database are also displayed at
              the top of the page.
            </p>
            <p>
              Users can also generate large amounts of foreign-key compliant
              dummy data for the selected table in the current database.
              Currently supported data types are:
            </p>
            <ul style={{display: 'flex', flexDirection:'row',paddingTop:'1rem', fontWeight: 'bold', flexWrap:'wrap'}}>
              <li>INT</li>
              <li>BIGINT</li>
              <li>VARCHAR</li>
              <li>BOOLEAN</li>
              <li>DATE</li>
            </ul>
          </body>
        </div>
      </div>
    </div>
  );
}
