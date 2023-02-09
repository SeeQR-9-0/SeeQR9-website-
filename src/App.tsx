import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import './styles/Home.css';
import SlideRoutes from 'react-slide-routes';

function App() {
  return (
    <>
      <Navbar />
      <SlideRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </SlideRoutes>
    </>
  );
}

export default App;
