import './Icon.css';

function Icon({
  hover,
  shadow,
  children,
  className,
  width = 1200,
  height = 1200,
  ...props
}) {
  return (
    <div className={className} {...props}>
      <svg
        className={
          'icon ' +
          ' ' +
          (hover ? 'icon-hover ' : '') +
          (shadow ? 'icon-shadow ' : '')
        }
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`0 0 ${width} ${height}`}
        width="100px"
      >
        {children}
      </svg>
    </div>
  );
}

export default Icon;
