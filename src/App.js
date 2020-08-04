import React from 'react';
import './App.scss';
import Overlay from './components/Overlay';
import Nav from './components/Nav';
import MainTitle from './components/MainTitle';
import WatchNow from './components/WatchNow';
import EllipseContainer from './components/EllipseContainer';

function App() {
  return (
    <div className="App">
      <Overlay/>
      <Nav/>
      <MainTitle/>
      <WatchNow/>
      <EllipseContainer/>
    </div>
  );
}

export default App;
