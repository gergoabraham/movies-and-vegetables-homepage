import React from 'react';

function FloatInItem({ isGroupVisible, children: item, delay }) {
  const itemOrder = Math.min(parseInt(delay), 7);

  const itemProps = {
    className:
      (item.props.className || '') +
      ` float-in float-in-delay-${itemOrder}` +
      (!isGroupVisible ? ' float-in-hidden' : ''),
  };

  return React.cloneElement(item, itemProps);
}

export default FloatInItem;
