import './Header.css';

import Tomato from '../Icons/Tomato';
import Clapperboard from '../Icons/Clapperboard';
import FloatIn from './FloatIn';

function Header({ className }) {
  return (
    <div className={'header ' + className}>
      <FloatIn className="header__logo" customDelays={[2, 0]}>
        <Tomato hover shadow className="header__logo__tomato" />
        <Clapperboard hover shadow className="header__logo__clapperboard" />
      </FloatIn>
      <FloatIn className="header__title">
        <h1>Movies</h1>
        <h2>and</h2>
        <h1>Vegetables</h1>
      </FloatIn>
    </div>
  );
}

export default Header;
