import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './ImagePart.css';

function ImagePart({
  children,
  image = { url: '', width: 0, height: 0 },
  part = { width: 0, height: 0, top: 0, left: 0 },
}) {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    position: 'relative',
    paddingBottom: '2rem',
    paddingTop: `${part.height}px`,
    width: `${part.width}px`,
  };

  const style = {
    left: '0px',
    top: '0px',
    width: `${part.width}px`,
    height: `${part.height}px`,
    backgroundPosition: `${-part.left}px ${-part.top}px`,
    backgroundImage: `url(${image.url})`,
  };

  const hoveredStyle = {
    zIndex: 10,
    left: `${-part.left}px`,
    top: `${-part.top}px`,
    width: `${image.width}px`,
    height: `${image.height}px`,
    backgroundPosition: '0px 0px',
    backgroundImage: `url(${image.url})`,
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: `${part.width}px`,
          height: `${part.height}px`,
          zIndex: '13',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></div>

      <CSSTransition
        in={isHovered}
        unmountOnExit
        timeout={1100}
        classNames="fade-in"
      >
        <div className="image-part-image" style={hoveredStyle}></div>
      </CSSTransition>

      <div className="image-part-image" style={style}></div>

      {children}
    </div>
  );
}

export default ImagePart;
