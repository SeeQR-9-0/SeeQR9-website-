import React from "react";

export default function QueriesModule() {
  return (
    <div className="module">
      <div className="LContainer">
        {/* <h1 style={{ fontSize: "60px", fontWeight: "500" }}>
          Interface & Features Overview
        </h1> */}
        <img src="media/query_execution.gif" style={{ width: "100%" }} alt="" />
      </div>
      <div className="RContainer">
        <div className="applaunch-text" style={{ padding: "1rem 3rem" }}>
          <div>
            <h1  style={{paddingBottom:'1rem'}}>Queries</h1>
            <p>
              In the 'QUERIES' view, the main panel is where the query input
              text field is located, utilizing CodeMirror. The paint button in
              the top right corner of the panel auto-formats the inputted query.
            </p>
            <p>
              Users can select the database to use in the 'Database' dropdown
              above the main panel.
            </p>
            <p>
              Users also have the option to execute a labelled/grouped or
              unlabelled/ungrouped query — simply provide a label/group in the
              'Label'/'Group' field above the main panel to identify the query
              in later comparisons against other queries.
            </p>
            <p>
              <b>Please note</b> that only labelled queries will be saved in the
              current session for future references.
            </p>
            <p>
              To execute the query, simply select the 'RUN QUERY' button at the
              bottom of the panel or press 'Ctrl-Enter' on the keyboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
