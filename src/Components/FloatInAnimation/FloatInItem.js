import React, { useState } from 'react';

function FloatInItem({ isGroupVisible, children: item, delay }) {
  const [isTransitionDone, setIsTransitionDone] = useState(false);

  const itemDelay = Math.min(parseInt(delay), 7);

  const floatInClassName =
    (item.props.className || '') +
    (!isTransitionDone ? ` float-in float-in-delay-${itemDelay}` : '') +
    (!isGroupVisible ? ' float-in-hidden' : '');

  const itemProps = {
    className: floatInClassName,
    onTransitionEnd: !isTransitionDone ? () => setIsTransitionDone(true) : null,
  };

  return React.cloneElement(item, itemProps);
}

export default FloatInItem;
