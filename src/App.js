import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import VisibilitySensor from 'react-visibility-sensor';

import Navbar from './Components/MainSections/Navbar';
import Header from './Components/MainSections/Header';
import Introduction from './Components/MainSections/Introduction';
import Features from './Components/MainSections/Features';
import Downloads from './Components/MainSections/Downloads';
import Alert from './Components/MainSections/Alert';

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

      <Alert>
        IMDb is releasing a new version of the Title Page. It is currently
        unsupported by Movies and Vegetables, but will be soon. Stay tuned. =)
      </Alert>

      <Introduction className="dark-theme" />
      <Features className="light-theme" />
      <Downloads />
    </div>
  );
}

export default App;
