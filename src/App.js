import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import VisibilitySensor from 'react-visibility-sensor';

import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Features from './Components/Features';
import Downloads from './Components/Downloads';

import './App.css';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="App">
      <CSSTransition
        in={showNavbar}
        timeout={500}
        unmountOnExit
        classNames="navbar"
      >
        <Navbar />
      </CSSTransition>

      <VisibilitySensor
        onChange={(isVisible) => setShowNavbar(!isVisible)}
        partialVisibility={true}
      >
        <Header />
      </VisibilitySensor>

      <Features />
      <Downloads />

      <Header />
      <Header />
      <Header />
    </div>
  );
}

export default App;
