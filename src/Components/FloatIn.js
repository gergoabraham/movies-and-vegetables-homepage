import { useRef } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';

import './FloatIn.css';

function FloatIn({ children, className, order }) {
  const ref = useRef();

  return (
    <ReactVisibilitySensor
      onChange={(isVisible) => {
        isVisible && ref.current.classList.remove('float-in-hidden');
      }}
    >
      <div
        ref={ref}
        className={
          'float-in float-in-hidden ' +
          (order ? `float-in-delay-${Math.min(order, 8)} ` : '') +
          className
        }
      >
        {children}
      </div>
    </ReactVisibilitySensor>
  );
}

export default FloatIn;
