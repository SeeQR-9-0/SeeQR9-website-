import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import { Link, Routes, Route} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import IntroModule from '../components/IntroModule';
import GettingStarted from '../components/GettingStarted';
import InterfaceFeatures from '../components/InterfaceFeatures';
import InterfaceFeatures2 from '../components/InterfaceFeatures2';
import DatabasesModule from '../components/DatabasesModule';
import DatabasesModule2 from '../components/DatabasesModule2';
import QueriesModule from '../components/QueriesModule';
import { Element } from 'react-scroll';
import QueriesModule2 from '../components/QueriesModule2';

export default function Home() {
  return (
    <div className="Home">
      <Element name="home" />
      <IntroModule />
      <Element name="getting-started" />
      <GettingStarted />
      <Element name="interface-features" />
      <InterfaceFeatures />
      <InterfaceFeatures2 />
      <Element name="databases" />
      <DatabasesModule />
      <DatabasesModule2 />
      <QueriesModule />
      <QueriesModule2 />

    </div>
  )
}
