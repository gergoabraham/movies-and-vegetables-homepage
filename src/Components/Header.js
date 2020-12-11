import './Header.css';

function Header() {
  const style = { textAlign: 'center' };

  return (
    <div className="header" style={style}>
      <h1>Movies and Vegetables</h1>
      <hr />
      <p>A browser extension for movie fans.</p>
    </div>
  );
}

export default Header;
