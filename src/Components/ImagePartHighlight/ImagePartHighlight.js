import { useState, useEffect } from 'react';

import './ImagePartHighlight.css';

function ImagePartHighlight({
  image = { url: '', width: 0, height: 0 },
  parts = [{ top: 0, left: 0, width: 0, height: 0, name: '' }],
}) {
  const [resizeFactor, setResizeFactor] = useState(1);

  useEffect(() => {
    const windowResizeHandler = () => {
      const maxWidthPx = Math.min(window.innerWidth * 0.9, image.width);
      setResizeFactor(maxWidthPx / image.width);
    };

    windowResizeHandler();
    window.addEventListener('resize', windowResizeHandler);
  }, [image.width]);

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: `${image.width * resizeFactor}px`,
          height: `${image.height * resizeFactor}px`,
          borderRadius: '1rem',

          backgroundImage: `url(${image.url})`,
          backgroundSize: 'contain',
        }}
      ></div>

      {parts.map((part, index) => (
        <div
          title={part.name}
          key={index}
          style={{
            position: 'absolute',

            top: `${part.top * resizeFactor}px`,
            left: `${part.left * resizeFactor}px`,
            width: `${part.width * resizeFactor}px`,
            height: `${part.height * resizeFactor}px`,

            borderRadius: '0.5rem',

            backgroundImage: `url(${image.url})`,
            backgroundSize:
              `${image.width * resizeFactor}px ` +
              `${image.height * resizeFactor}px`,
            backgroundPosition:
              `${-part.left * resizeFactor}px ` +
              `${-part.top * resizeFactor}px`,

            filter: 'brightness(1.5)',
          }}
        ></div>
      ))}
    </div>
  );
}

export default ImagePartHighlight;
