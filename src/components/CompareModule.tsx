import React from 'react'

export default function CompareModule() {
  return (
    <div className="module">
      <div className="LContainer">
        {/* <h1 style={{ fontSize: "60px", fontWeight: "500" }}>
          Interface & Features Overview
        </h1> */}
        <img
          src="media/Comparing_Queries.gif"
          style={{ width: "100%" }}
          alt=""
        />
      </div>
      <div className="RContainer">
        <div className="applaunch-text" style={{ padding: "1rem 3rem" }}>
        <h1 style={{paddingBottom:'1rem'}}>Compare</h1>
          <p>
            Click on the 'bar graph' icon at the top of the sidebar to get to
            the 'Compare Queries' view.
          </p>
          <p>
            The comparison table is flexible to the user’s preferences as the
            user selects which queries to compare side by side.
          </p>
          <p>
            Simply check or uncheck the box next to each saved query to add or
            remove the query from the graph.
          </p>
          <p>
            Graph will be organized along the x-axis by group, and colored by
            schema.
          </p>
          <p>
            Aside from the visualized performance comparison of the selected
            queries, a table will display information about each selected query,
            including its total run time and performance relative to other
            queries with the same label, with the most performant query
            highlighted.
          </p>
        </div>
      </div>
    </div>
  );
}
