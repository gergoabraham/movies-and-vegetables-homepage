import './Header.css';

import Tomato from '../Icons/Tomato';
import Clapperboard from '../Icons/Clapperboard';

function Header({ className }) {
  return (
    <div className={'header ' + className}>
      <div className="header__logo">
        <Tomato hover shadow className="header__logo__tomato" />
        <Clapperboard hover shadow className="header__logo__clapperboard" />
      </div>
      <div className="header__title">
        <h1>Movies</h1>
        <h2>and</h2>
        <h1>Vegetables</h1>
      </div>
    </div>
  );
}

export default Header;
