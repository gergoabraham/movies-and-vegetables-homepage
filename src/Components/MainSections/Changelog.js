import { useState, useEffect } from 'react';

import FloatIn from '../FloatInAnimation/FloatIn';
import './Changelog.css';

function Changelog({ className }) {
  const [changelog, setChangelog] = useState(null);
  const [fetchError, setFetchError] = useState(false);

  const url =
    'https://gergoabraham.github.io/MoviesAndVegetables/changelog.json';

  const fetchChangelog = async () => {
    try {
      const response = await fetch(url, { cache: 'no-store' });

      if (response.status !== 200) {
        setFetchError(true);
      } else {
        setChangelog(await response.json());
      }
    } catch (e) {
      setFetchError(true);
    }
  };

  const retryFetch = () => {
    setFetchError(false);
    setChangelog(null);
    fetchChangelog();
  };

  useEffect(() => {
    fetchChangelog();
  }, [url]);

  const getVersionType = (version) => {
    if (version.match(/0\.0$/)) {
      return 'major';
    } else if (version.match(/\.0$/)) {
      return 'minor';
    } else {
      return 'patch';
    }
  };

  return (
    <FloatIn className={`changelog ${className || ''}`}>
      <h2>Changelog</h2>

      {changelog ? (
        changelog.map((change, i) => (
          <div
            key={i}
            className={'changelog-item ' + getVersionType(change.version)}
          >
            <div className="changelog-version">{change.version}</div>
            <div className="changelog-date">{change.date}</div>
            <div className="changelog-description">
              {change.description.split('<br>').map((line) => (
                <div>{line}</div>
              ))}
            </div>
          </div>
        ))
      ) : fetchError ? (
        <p className="changelog-error" onClick={retryFetch}>
          ʘ︵ʘ Couldn't load the changelog, please click here to try again.
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </FloatIn>
  );
}

export default Changelog;
