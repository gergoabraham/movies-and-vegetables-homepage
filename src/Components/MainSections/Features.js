import FloatIn from '../FloatInAnimation/FloatIn';
import ImagePart from '../ImagePart/ImagePart';

import './Features.css';

function Features({ className }) {
  const imdbImage = { name: 'imdb-sample.png', width: 669, height: 801 };
  const rottenImage = { name: 'rotten-sample.png', width: 524, height: 568 };

  return (
    <div className={'features ' + className}>
      <FloatIn>
        <h2>What does it do?</h2>
      </FloatIn>

      <h3>Shows you the scores.</h3>
      <div className="features__pages-container">
        <div className="features__pages-container__page">
          <h3>on IMDb</h3>

          <ImagePart
            image={imdbImage}
            part={{ width: 288, height: 45, top: 49, left: 372 }}
          >
            Audience Score
          </ImagePart>

          <ImagePart
            image={imdbImage}
            part={{ width: 337, height: 37, top: 598, left: 13 }}
          >
            Tomatometer
          </ImagePart>

          <ImagePart
            image={imdbImage}
            part={{ width: 300, height: 58, top: 643, left: 13 }}
          >
            Critics Consensus
          </ImagePart>
        </div>

        <div className="features__pages-container__page">
          <h3>on RottenTomatoes</h3>

          <ImagePart
            image={rottenImage}
            part={{ width: 164, height: 113, left: 268, top: 302 }}
          >
            IMDb Rating
            <br />
            (including Toplist Position)
          </ImagePart>

          <ImagePart
            image={rottenImage}
            part={{ width: 124, height: 113, left: 132, top: 302 }}
          >
            Metascore
          </ImagePart>

          <ImagePart
            image={rottenImage}
            part={{ width: 169, height: 72, left: 179, top: 417 }}
          >
            Summary
          </ImagePart>
        </div>
      </div>

      <h3>Leads you to the other site.</h3>
      <div className="features__pages-container">
        <div className="features__pages-container__page">
          <h3>on IMDb</h3>
        </div>
        <div className="features__pages-container__page">
          <h3>on RottenTomatoes</h3>
        </div>
      </div>
    </div>
  );
}

export default Features;
