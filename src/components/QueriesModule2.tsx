import React from "react";

export default function QueriesModule2() {
  return (
    <div className="module">
      <div className="RContainer">
        <div className="applaunch-text" style={{ padding: "4rem 3rem" }}>
          <div>
            <h3 style={{paddingBottom:'1rem'}}>Save/Load Queries</h3>
            <p>
              In the 'QUERIES' view, the file upload icon will open a file
              explorer window to select a .JSON to import query data from.
            </p>
            <p>
              The file icon to the right of the upload icon will designate the
              file path to save query data to if you press the save button on
              the queries.
            </p>
            <p>
              To save individual query data press the save icon on the
              individual queries in the dropdowns.
            </p>
          </div>
        </div>
      </div>
      <div className="LContainer">
        {/* <h1 style={{ fontSize: "60px", fontWeight: "500" }}>
          Interface & Features Overview
        </h1> */}
        <img
          src="media/Save_Load_Queries.gif"
          style={{ width: "100%" }}
          alt=""
        />
      </div>
    </div>
  );
}
