import './ImagePartHighlight.css';

function ImagePartHighlight({
  image = { url: '', width: 0, height: 0 },
  parts = [{ top: 0, left: 0, width: 0, height: 0, name: '' }],
}) {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: `${image.width}px`,
          height: `${image.height}px`,
          borderRadius: '1rem',

          backgroundImage: `url(${image.url})`,
          backgroundSize: 'contain',
        }}
      ></div>

      {parts.map((part, index) => (
        <div
          title={part.name}
          key={index}
          style={{
            position: 'absolute',

            top: `${part.top}px`,
            left: `${part.left}px`,
            width: `${part.width}px`,
            height: `${part.height}px`,

            borderRadius: '0.5rem',

            backgroundImage: `url(${image.url})`,
            backgroundPosition: `${-part.left}px ${-part.top}px`,

            filter: 'brightness(1.5)',
          }}
        ></div>
      ))}
    </div>
  );
}

export default ImagePartHighlight;
