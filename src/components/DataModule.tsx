import React from 'react'

export default function DataModule() {
  return (
    <div className="module">
      <div className="LContainer">
        {/* <h1 style={{ fontSize: "60px", fontWeight: "500" }}>
          Interface & Features Overview
        </h1> */}
        <img src="media/Query_Exec_Plan.gif" style={{ width: "100%" }} alt="" />
      </div>
      <div className="RContainer">
        <div className="applaunch-text" style={{ padding: "1rem 3rem" }}>
          <div>
            <h1 style={{ paddingBottom: "1rem" }}>Data</h1>
            <p>
              Once executed, the query's output will be displayed. In addition,
              for eligible queries, users will be able to view the queries'
              planning time, execution time, total run time, and plan of
              execution.
            </p>
            <p>
              Eligible queries include any SELECT, INSERT, UPDATE, DELETE,
              VALUES, EXECUTE, DECLARE, CREATE TABLE AS, or CREATE MATERIALIZED
              VIEW AS statement.
            </p>
            <p>
              Users can toggle between the executed query's 'RESULTS' and
              'EXECUTION PLAN'.
            </p>
            <p>
              The 'RESULTS' view displays the executed query's returned results.
            </p>
            <p>
              The 'EXECUTION PLAN' view displays the executed query's plan of
              execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
