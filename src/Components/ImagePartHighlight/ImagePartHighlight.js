import { useState, useEffect } from 'react';

import './ImagePartHighlight.css';

function ImagePartHighlight({
  image = { url: '', width: 0, height: 0 },
  parts = [{ top: 0, left: 0, width: 0, height: 0, name: '' }],
}) {
  const [resizeFactor, setResizeFactor] = useState(1);
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const windowResizeHandler = () => {
      const maxWidthPx = Math.min(window.innerWidth * 0.9, image.width);
      setResizeFactor(maxWidthPx / image.width);
    };

    windowResizeHandler();
    window.addEventListener('resize', windowResizeHandler);
  }, [image.width]);

  useEffect(() => {
    const increaseHighlightIndex = () => {
      setHighlightIndex((i) => (i < parts.length - 1 ? i + 1 : 0));
    };

    setInterval(increaseHighlightIndex, 1500);
  }, [parts.length]);

  const part = parts[highlightIndex];

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

      {
        <div
          title={part.name}
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

            filter: 'brightness(1.6)',
            transitionDuration: '500ms',
            transitionTimingFunction: 'ease',
          }}
        ></div>
      }
    </div>
  );
}

export default ImagePartHighlight;
