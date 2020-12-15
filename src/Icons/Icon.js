import './Icon.css';

function Icon({ hover, shadow, size, children, style }) {
  return (
    <div
      className="icon"
      style={{ ...style, width: size || '100px', height: size || '100px' }}
    >
      <svg
        className={(hover ? 'hover ' : '') + (shadow ? 'shadow ' : '')}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1200 1200"
        width={size || '100px'}
      >
        {children}
      </svg>
    </div>
  );
}

export default Icon;
