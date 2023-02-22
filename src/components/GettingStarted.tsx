import React from 'react'

export default function GettingStarted() {
  return (
    <div className="module">
        <div className="RContainer">
          <div className="getting-started-text">
            <h3>To get started on contributing to this project</h3>
            <ul style={{listStyle: 'none'}}>
              <li><b>Download</b> and install Postgres to access SeeQR's Postgres features and/or MySQL to access it's MySQL features. </li>
              <li><b>Ensure</b> that psql and/or mysql are available in the $PATH.</li>
              <li><b>Download</b> the latest version of SeeQR.</li>
            </ul>
          </div>
        </div>
        <div className="LContainer">
          <div className="built-with"> 
          {/* add icons */}
                <li>Electron</li>
                <h3 style={{marginBottom:'0px'}}>Built With</h3> 
                <li>React</li>
                <li>Typescript</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Styled-components</li>
                <li>Material-UI</li>
                <li>React-Flow</li>
                <li>Chart.js</li>
                <li>Faker.js</li>
                <li>CodeMirror</li>
            </div>
        </div>
      </div>
  )
}
