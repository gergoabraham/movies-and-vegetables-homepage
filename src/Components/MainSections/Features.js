import './Features.css';

import imdbSample from '../Images/imdb-sample.png';
import rottenSample from '../Images/rotten-sample.png';
import FloatIn from '../FloatInAnimation/FloatIn';
import ImagePartHighlight from '../ImagePartHighlight/ImagePartHighlight';

function Features({ className }) {
  const imdbImage = { url: imdbSample, width: 668, height: 794 };
  const rottenImage = { url: rottenSample, width: 524, height: 568 };

  return (
    <div className={'features ' + className}>
      <FloatIn>
        <h2>What does it do?</h2>
      </FloatIn>

      <h3>Shows you the scores.</h3>

      <div className="features__pages-container">
        <div className="features__pages-container__page">
          <h3>on IMDb</h3>

          <ImagePartHighlight
            image={imdbImage}
            parts={[
              {
                width: 94,
                height: 46,
                left: 480,
                top: 48,
                name: 'Audience Score',
              },
              {
                width: 174,
                height: 38,
                left: 178,
                top: 596,
                name: 'Tomatometer',
              },
              {
                width: 630,
                height: 57,
                left: 13,
                top: 643,
                name: 'Critics Consensus',
              },
            ]}
          ></ImagePartHighlight>
        </div>

        <div className="features__pages-container__page">
          <h3>on RottenTomatoes</h3>

          <ImagePartHighlight
            image={rottenImage}
            parts={[
              {
                width: 124,
                height: 113,
                left: 132,
                top: 302,
                name: 'Metascore',
              },
              {
                width: 164,
                height: 113,
                left: 268,
                top: 302,
                name: 'IMDb Rating',
              },
              {
                width: 490,
                height: 73,
                left: 18,
                top: 423,
                name: 'Plot summary',
              },
            ]}
          ></ImagePartHighlight>
        </div>
      </div>
    </div>
  );
}

export default Features;
