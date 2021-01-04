import FloatIn from '../FloatInAnimation/FloatIn';

import './Downloads.css';

function Downloads({ className }) {
  return (
    <FloatIn className={`download ${className || ''}`}>
      <h2>Downloads</h2>
      <p>
        <a href="https://addons.mozilla.org/hu/firefox/addon/movies-and-vegetables/">
          Download for Firefox!
        </a>
      </p>
      <p>Coming soon to Chrome.</p>
    </FloatIn>
  );
}

export default Downloads;
