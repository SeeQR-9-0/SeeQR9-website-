import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import { Link, Routes, Route} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import IntroModule from '../components/IntroModule';
import GettingStarted from '../components/GettingStarted';
import InterfaceFeatures from '../components/InterfaceFeatures';
import InterfaceFeatures2 from '../components/InterfaceFeatures2';

export default function Home() {
  return (
    <div className="Home">
      <IntroModule />
      <GettingStarted />
      <InterfaceFeatures />
      <InterfaceFeatures2 />
    </div>
  )
}
