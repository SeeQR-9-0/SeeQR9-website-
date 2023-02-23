import React from 'react'
// import {Banner} from '../components/Banner'
import IntroModule from '../components/IntroModule'
import '../styles/Home.css'

export default function Home() {

  <div className="built-with">
    {/* add icons */}
    <li>Electron</li>
    <h3 style={{ marginBottom: "0px" }}>Built With</h3>
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
  </div>;

    const images = [
      "Electron",
      "React",
      "Typescript",
      "PostgreSQL",
      "MySQL",
      "Styled-components",
      "Material-UI",
      "React-Flow",
      "Chart.js",
      "Faker.js",
      "CodeMirror",
    ].map((image, idx) => ({
      id: idx,
      image,
    }));


  return (
    <div className="Home">
      <IntroModule />
      {/* <Banner images = {images} speed = {50000} /> */}
    </div>
  );
}
