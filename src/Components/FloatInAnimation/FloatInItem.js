import React, { useState } from 'react';

function FloatInItem({ isGroupVisible, children: item, delay, slow = false }) {
  const [isTransitionDone, setIsTransitionDone] = useState(false);

  const itemDelay = Math.min(parseInt(delay), 7);

  const floatInClass = ' float-in' + (slow ? '-slow' : '');
  const floatInDelayClass = ` float-in-delay-${itemDelay}`;

  const floatInClassName =
    (item.props.className || '') +
    (!isTransitionDone ? floatInClass + floatInDelayClass : '') +
    (!isGroupVisible ? ' float-in-hidden' : '');

  const onTransitionEndHandler = (event) => {
    if (event.target.classList.contains('float-in')) {
      setIsTransitionDone(true);
    }
  };

  const itemProps = {
    className: floatInClassName,
    onTransitionEnd: !isTransitionDone ? onTransitionEndHandler : null,
  };

  return React.cloneElement(item, itemProps);
}

export default FloatInItem;
