import './Features.css';

import imdbSample from '../Images/imdb-sample.png';
import rottenSample from '../Images/rotten-sample.png';
import FloatIn from '../FloatInAnimation/FloatIn';
import ImagePartHighlight from '../ImagePartHighlight/ImagePartHighlight';

function Features({ className }) {
  const imdbImage = { url: imdbSample, width: 1275, height: 925 };
  const imdbHighlights = [
    { name: 'Audience Score', width: 156, height: 82, left: 719, top: 20 },
    { name: 'Tomatometer', width: 136, height: 82, left: 875, top: 20 },
    { name: 'Critics Consensus', width: 440, height: 72, left: 812, top: 709 },
  ];

  const rottenImage = { url: rottenSample, width: 524, height: 568 };
  const rottenHighlights = [
    { name: 'Metascore', width: 124, height: 113, left: 132, top: 302 },
    { name: 'IMDb Rating', width: 164, height: 113, left: 268, top: 302 },
    { name: 'Plot summary', width: 490, height: 73, left: 18, top: 423 },
  ];

  return (
    <FloatIn className={'features ' + className}>
      <h2>What does it do?</h2>

      <h3>Shows you the scores from the other site.</h3>

      <div className="features__page">
        <h3>on IMDb</h3>

        <ImagePartHighlight
          image={imdbImage}
          highlights={imdbHighlights}
        ></ImagePartHighlight>
      </div>

      <div className="features__page">
        <h3>on RottenTomatoes</h3>

        <ImagePartHighlight
          image={rottenImage}
          highlights={rottenHighlights}
        ></ImagePartHighlight>
      </div>
    </FloatIn>
  );
}

export default Features;
