import './Downloads.css';

function Downloads({ className }) {
  return (
    <div className={`download ${className || ''}`}>
      <h2>Downloads</h2>
      <p>Download for Firefox!</p>
      <p>Coming soon to Chrome.</p>
    </div>
  );
}

export default Downloads;
