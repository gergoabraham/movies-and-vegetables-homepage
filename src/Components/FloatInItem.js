import React, { useState } from 'react';

function FloatInItem({ isGroupVisible, children: item, delay }) {
  const [isDone, setisDone] = useState(false);

  const itemOrder = Math.min(parseInt(delay), 7);

  const classNameToUse =
    (item.props.className || '') +
    (!isGroupVisible ? ' float-in-hidden' : '') +
    (!isDone ? ` float-in float-in-delay-${itemOrder}` : '');

  const itemProps = {
    className: classNameToUse,
    onTransitionEnd: !isDone ? () => setisDone(true) : null,
  };

  return React.cloneElement(item, itemProps);
}

export default FloatInItem;
