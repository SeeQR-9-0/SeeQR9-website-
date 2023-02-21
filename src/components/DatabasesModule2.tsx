import React from "react";

export default function DatabasesModule() {
  return (
    <div className="module">
      <div className="RContainer">
        <div className="applaunch-text" style={{padding: '4rem 3rem'}}>
          {/* <p>
            Users can also generate large amounts of foreign-key compliant dummy
            data for the selected table in the current database. Currently
            supported data types are:
          </p>
          <ul>
            <li>INT</li>
            <li>BIGINT</li>
            <li>VARCHAR</li>
            <li>BOOLEAN</li>
            <li>DATE</li>
          </ul> */}
          <div>
            <h3 style={{paddingBottom:'1rem'}}>Create/Edit Database (currently in beta)</h3>
            <p>
              Users can create a new database from scratch by clicking the{" "}
              <b>Create New Database</b> button at the bottom of the sidebar.
            </p>
            <p>
              Users can modify the newly created database as well as any
              existing databases using the ER Diagram to create/change/delete
              tables and columns.
            </p>
            <p>
              The <b>Export</b> button will write a .sql file on the user's
              desktop of the selected database.
            </p>
          </div>
        </div>
        {/* <img src="media/modify_db.gif" style={{ width: "50%" }} alt="" /> */}
      </div>
      <div className="LContainer">
        {/* <h1 style={{ fontSize: "60px", fontWeight: "500" }}>
          Interface & Features Overview
        </h1> */}
        <img src="media/create_db3.gif" style={{ width: "100%" }} alt="" />
      </div>
    </div>
  );
}
