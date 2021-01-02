import './Downloads.css';

function Downloads({ className }) {
  return (
    <div className={`download ${className || ''}`}>
      <h2>Downloads</h2>
      <a href="https://addons.mozilla.org/hu/firefox/addon/movies-and-vegetables/">
        Download for Firefox!
      </a>
      <p>Coming soon to Chrome.</p>
    </div>
  );
}

export default Downloads;
