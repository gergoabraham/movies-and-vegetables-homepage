import React, { useEffect, useState, useRef } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

import FloatInItem from './FloatInItem';
import './FloatIn.css';

function FloatIn({
  children,
  className,
  startingDelay = 0,
  customDelays,
  slow = false,
}) {
  if (customDelays && customDelays.length !== children.length) {
    throw new Error(
      'FloatIn "customDelays" property\'s length should equal to the number of children.'
    );
  }

  const [isGroupVisible, setIsGroupVisible] = useState(false);
  const [doesGroupFitInWindow, setIfGroupFitsInWindow] = useState(false);
  const sensor = useRef(null);

  const visibilityChangeHandler = (isGroupVisible) =>
    isGroupVisible && setIsGroupVisible(true);

  const windowResizeHandler = () =>
    setIfGroupFitsInWindow(
      sensor.current.node.getBoundingClientRect().height > window.innerHeight
    );

  useEffect(() => {
    windowResizeHandler();
    window.addEventListener('resize', windowResizeHandler);
  }, [sensor]);

  useEffect(() => windowResizeHandler(), [children]);

  return (
    <ReactVisibilitySensor
      ref={sensor}
      partialVisibility={doesGroupFitInWindow}
      minTopValue="300"
      onChange={visibilityChangeHandler}
    >
      <div className={className}>
        {React.Children.map(children, (item, i) => (
          <FloatInItem
            isGroupVisible={isGroupVisible}
            delay={customDelays ? customDelays[i] : i + Number(startingDelay)}
            slow={slow}
          >
            {item}
          </FloatInItem>
        ))}
      </div>
    </ReactVisibilitySensor>
  );
}

export default FloatIn;
