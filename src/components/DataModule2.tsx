import React from "react";

export default function DataModule2() {
  return (
    <div className="module">
      <div className="RContainer">
        <div className="applaunch-text" style={{ padding: "1rem 3rem" }}>
          <div>
            <p>
              Within the 'EXECUTION PLAN', users can adjust the thresholds of
              'Percentage of Total Duration' and the 'Planner Rows Accuracy'
              that are used to highlight certain nodes in the tree.
            </p>
            <p>
              The 'Percentage of Total Duration' threshold is used to highlight
              the nodes whose durations are higher than the set limit,
              indicating that these nodes may be areas of improvement.
            </p>
            <p>
              The 'Planner Rows Accuracy' threshold is used to highlight the
              nodes for which the planner's estimate number of rows differs from
              the actual number of rows, indicating that the database might need
              vacuuming.
            </p>
            <p>
              Clicking on a node will display additional details regarding that
              action as well.
            </p>
            <p>
              To execute a new query, simply select the '+' button in the
              sidebar. To go back to a previously saved query, just select it in
              the sidebar.
            </p>
          </div>
        </div>
      </div>
      <div className="LContainer">
        {/* <h1 style={{ fontSize: "60px", fontWeight: "500" }}>
          Interface & Features Overview
        </h1> */}
        <img
          src="media/execplan.png"
          style={{ width: "100%" }}
          alt=""
        />
      </div>
    </div>
  );
}
