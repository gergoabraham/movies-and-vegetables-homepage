import './Introduction.css';

import Browser from '../Icons/Browser';
import Clapperboard from '../Icons/Clapperboard';
import Tomato from '../Icons/Tomato';

function Introduction({ className }) {
  return (
    <div className={'introduction ' + className}>
      <h2>What is this?</h2>
      <div className="introduction__list">
        <div className="introduction__list__item">
          <Browser hover />
          <div>A browser extension</div>
        </div>
        <div className="introduction__list__item">
          <Clapperboard hover />
          <div>
            for <a href="https:\\www.imdb.com">IMDb</a>
          </div>
        </div>
        <div className="introduction__list__item">
          <Tomato hover />
          <div>
            and <a href="https:\\www.rottentomatoes.com">RottenTomatoes.</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
