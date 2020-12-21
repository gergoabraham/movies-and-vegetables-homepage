import React, { useState } from 'react';

function FloatInItem({ isGroupVisible, children: item, delay }) {
  const [isTransitionDone, setIsTransitionDone] = useState(false);

  const itemOrder = Math.min(parseInt(delay), 7);

  const itemProps = {
    className:
      (item.props.className || '') +
      (!isTransitionDone ? ` float-in float-in-delay-${itemOrder}` : '') +
      (!isGroupVisible ? ' float-in-hidden' : ''),
    onTransitionEnd: !isTransitionDone ? () => setIsTransitionDone(true) : null,
  };

  return React.cloneElement(item, itemProps);
}

export default FloatInItem;
