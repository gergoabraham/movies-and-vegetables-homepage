import React, { useEffect, useState, useRef } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

import FloatInItem from './FloatInItem';
import './FloatIn.css';

function FloatIn({ children, className, startingDelay = 0, customDelays }) {
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

  useEffect(() => {
    setIfGroupFitsInWindow(
      sensor.current.node.getBoundingClientRect().height > window.innerHeight
    );
  }, [setIfGroupFitsInWindow]);

  return (
    <ReactVisibilitySensor
      ref={sensor}
      partialVisibility={doesGroupFitInWindow}
      onChange={visibilityChangeHandler}
    >
      <div className={className}>
        {React.Children.map(children, (item, i) => (
          <FloatInItem
            isGroupVisible={isGroupVisible}
            delay={customDelays ? customDelays[i] : i + Number(startingDelay)}
          >
            {item}
          </FloatInItem>
        ))}
      </div>
    </ReactVisibilitySensor>
  );
}

export default FloatIn;
