import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import { Link, Routes, Route} from 'react-router-dom';
import IntroModule from '../components/IntroModule';
import GettingStarted from '../components/GettingStarted';
import InterfaceFeatures from '../components/InterfaceFeatures';
import InterfaceFeatures2 from '../components/InterfaceFeatures2';
import DatabasesModule from '../components/DatabasesModule';
import DatabasesModule2 from '../components/DatabasesModule2';
import QueriesModule from '../components/QueriesModule';
import { Element } from 'react-scroll';
import QueriesModule2 from '../components/QueriesModule2';
import DataModule from '../components/DataModule';
import DataModule2 from '../components/DataModule2';
import CompareModule from '../components/CompareModule';

export default function Demo() {
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
      <DataModule />
      <DataModule2 />
      <CompareModule />
    </div>
  )
}
