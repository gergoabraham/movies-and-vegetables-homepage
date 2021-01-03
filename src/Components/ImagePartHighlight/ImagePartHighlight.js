import { useState, useEffect, useRef } from 'react';

import './ImagePartHighlight.css';

function ImagePartHighlight({
  image = { url: '', width: 0, height: 0 },
  parts = [{ top: 0, left: 0, width: 0, height: 0, name: '' }],
}) {
  const [resizeFactor, setResizeFactor] = useState(1);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [intervalCallbackId, setIntervalCallbackId] = useState(null);
  const [isMouseIn, setIsMouseIn] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const windowResizeHandler = () => {
      const maxWidthPx = Math.min(window.innerWidth * 0.9, image.width);
      setResizeFactor(maxWidthPx / image.width);
    };

    windowResizeHandler();
    window.addEventListener('resize', windowResizeHandler);
  }, [image.width]);

  const proceedWithHighlightIndex = () => {
    setHighlightIndex((i) => (i < parts.length - 1 ? i + 1 : 0));
  };

  const onMouseEnterHandler = () => {
    setIsMouseIn(true);
    stopAutomaticHighlightStepper();
  };

  const onMouseLeaveHandler = () => {
    setIsMouseIn(false);
    startAutomaticHighlightStepper();
  };

  const startAutomaticHighlightStepper = () => {
    if (!intervalCallbackId) {
      const callbackId = setInterval(proceedWithHighlightIndex, 1500);
      setIntervalCallbackId(callbackId);
    }
  };

  const stopAutomaticHighlightStepper = () => {
    if (intervalCallbackId) {
      clearInterval(intervalCallbackId);
      setIntervalCallbackId(null);
    }
  };

  useEffect(() => {
    startAutomaticHighlightStepper();
  }, []);

  const onMouseMovedHandler = (event) => {
    const x2 = (event.clientX - ref.current.offsetLeft) / resizeFactor;
    const y2 =
      (event.clientY - ref.current.offsetTop + window.scrollY) / resizeFactor;

    const smallestDistancesFromRectangles = parts.map((rect) => {
      const x1 = Math.min(Math.max(x2, rect.left), rect.left + rect.width);
      const y1 = Math.min(Math.max(y2, rect.top), rect.top + rect.height);

      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    });

    const minDistanceIndex = smallestDistancesFromRectangles.reduce(
      (minIndex, currentVal, currentIndex, array) =>
        currentVal < array[minIndex] ? currentIndex : minIndex,
      0
    );

    setHighlightIndex(minDistanceIndex);
  };

  const part = parts[highlightIndex];

  return (
    <div
      style={{ position: 'relative' }}
      ref={ref}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onMouseMove={onMouseMovedHandler}
    >
      <div
        className={
          'image-part-highlight-background ' + (isMouseIn ? ' darkened' : '')
        }
        style={{
          width: `${image.width * resizeFactor}px`,
          height: `${image.height * resizeFactor}px`,

          backgroundImage: `url(${image.url})`,
        }}
      ></div>

      <div
        className="image-part-highlight-highlight"
        style={{
          top: `${part.top * resizeFactor}px`,
          left: `${part.left * resizeFactor}px`,
          width: `${part.width * resizeFactor}px`,
          height: `${part.height * resizeFactor}px`,

          filter: isMouseIn ? 'none' : 'brightness(1.5)',

          backgroundImage: `url(${image.url})`,
          backgroundSize:
            `${image.width * resizeFactor}px ` +
            `${image.height * resizeFactor}px`,
          backgroundPosition:
            `${-part.left * resizeFactor}px ` + `${-part.top * resizeFactor}px`,
        }}
      ></div>

      {isMouseIn && (
        <div
          className="image-part-highlight-legend"
          style={{
            top: `${(part.top + part.height) * resizeFactor}px`,
            left: `${part.left * resizeFactor}px`,
            width: `${part.width * resizeFactor}px`,
            height: `${part.height * resizeFactor}px`,
          }}
        >
          <div className="image-part-highlight-legend-text">{part.name}</div>
        </div>
      )}
    </div>
  );
}

export default ImagePartHighlight;
