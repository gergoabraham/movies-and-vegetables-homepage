import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import VisibilitySensor from 'react-visibility-sensor';

import Navbar from './Components/MainSections/Navbar';
import Header from './Components/MainSections/Header';
import Introduction from './Components/MainSections/Introduction';
import Features from './Components/MainSections/Features';
import Downloads from './Components/MainSections/Downloads';
import Alert from './Components/MainSections/Alert';
import Changelog from './Components/MainSections/Changelog';

import './App.css';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  const showHideNavBar = (isVisible) => setShowNavbar(!isVisible);

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

      <VisibilitySensor onChange={showHideNavBar} partialVisibility={true}>
        <Header className="light-theme" />
      </VisibilitySensor>

      <Introduction className="section dark-theme" />
      <Features className="section light-theme" />
      <Alert>At the moment it works only on IMDb.</Alert>
      <Downloads className="section dark-theme" />
      <Changelog className="section light-theme" />
    </div>
  );
}

export default App;
