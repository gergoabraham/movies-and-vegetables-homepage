import './Header.css';

function Header(props) {
  const style = { textAlign: 'center' };

  return (
    <div className={'header ' + props.className} style={style}>
      <h1>Movies and Vegetables</h1>
      <hr />
      <p>A browser extension for movie fans.</p>
    </div>
  );
}

export default Header;
