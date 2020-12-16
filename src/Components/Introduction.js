import './Introduction.css';

import Browser from '../Icons/Browser';
import Clapperboard from '../Icons/Clapperboard';
import Tomato from '../Icons/Tomato';
import FloatIn from './FloatIn';

function Introduction({ className }) {
  return (
    <div className={'introduction ' + className}>
      <FloatIn order="1">
        <h2>What is this?</h2>
      </FloatIn>
      <div className="introduction__list">
        <FloatIn className="introduction__list__item" order="2">
          <Browser hover />
          <div>A browser extension</div>
        </FloatIn>
        <FloatIn className="introduction__list__item" order="3">
          <Clapperboard hover />
          <div>
            for <a href="https:\\www.imdb.com">IMDb</a>
          </div>
        </FloatIn>
        <FloatIn className="introduction__list__item" order="4">
          <Tomato hover />
          <div>
            and <a href="https:\\www.rottentomatoes.com">RottenTomatoes.</a>
          </div>
        </FloatIn>
      </div>
    </div>
  );
}

export default Introduction;
