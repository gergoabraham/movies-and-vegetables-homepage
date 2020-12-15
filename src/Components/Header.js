import './Header.css';

import Tomato from '../Icons/Tomato';
import Clapperboard from '../Icons/Clapperboard';

function Header(props) {
  const style = { textAlign: 'center' };

  return (
    <div className={'header ' + props.className} style={style}>
      <div style={{ width: '250px', height: '200px', position: 'relative' }}>
        <Tomato
          size="200px"
          hover
          shadow
          style={{ position: 'absolute', left: '50px' }}
        />
        <Clapperboard
          size="200px"
          hover
          shadow
          style={{ position: 'absolute' }}
        />
      </div>
      <h1>Movies and Vegetables</h1>
      <hr />
      <p>A browser extension for movie fans.</p>
    </div>
  );
}

export default Header;
