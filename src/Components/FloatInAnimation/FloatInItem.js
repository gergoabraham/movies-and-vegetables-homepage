import React, { useRef, useState } from 'react';

function FloatInItem({ isGroupVisible, children: item, delay }) {
  const [isTransitionDone, setIsTransitionDone] = useState(false);
  const itemRef = useRef();

  const itemDelay = Math.min(parseInt(delay), 7);

  const floatInClassName =
    (item.props.className || '') +
    (!isTransitionDone ? ` float-in float-in-delay-${itemDelay}` : '') +
    (!isGroupVisible ? ' float-in-hidden' : '');

  const onTransitionEndHandler = (event) => {
    if (event.target === itemRef.current) {
      setIsTransitionDone(true);
    }
  };

  const itemProps = {
    ref: itemRef,
    className: floatInClassName,
    onTransitionEnd: !isTransitionDone ? onTransitionEndHandler : null,
  };

  return React.cloneElement(item, itemProps);
}

export default FloatInItem;
