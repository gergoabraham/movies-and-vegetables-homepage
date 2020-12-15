import './Header.css';

import Tomato from '../Icons/Tomato';
import Clapperboard from '../Icons/Clapperboard';

function Header({ className }) {
  const style = { textAlign: 'center' };

  return (
    <div className={'header ' + className} style={style}>
      <div className="header__logo">
        <Tomato hover shadow className="header__logo__tomato" />
        <Clapperboard hover shadow className="header__logo__clapperboard" />
      </div>
      <h1>Movies and Vegetables</h1>
      <hr />
      <p>A browser extension for movie fans.</p>
    </div>
  );
}

export default Header;
