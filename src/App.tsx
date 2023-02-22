import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Demo from './pages/Demo';
import Team from './pages/Team';
import './styles/Home.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Demo />} />
        {/* <Route path="/team" element={<Team />} /> */}
      </Routes>
    </>
  );
}

export default App;
