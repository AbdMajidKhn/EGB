// ImageWithOverlay.js
import React from 'react';

const ImageWithOverlay = ({ src, alt, text, opacity, onMouseOver, onMouseOut }) => {
  return (
    <div style={{ position: 'relative' }}>
      <img
        src={src}
        alt={alt}
        style={{ width: '300px', height: '400px', alignSelf: 'center', marginTop: '405px', marginLeft: '50px', borderRadius: '30px', opacity }}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
      <span
        style={{ width: '180px', position: 'absolute', top: '605px', left: '200px', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Canela, serif', opacity: opacity === 0.6 ? '1' : '0', transition: 'opacity 0.3s', pointerEvents: 'none' }}
      >
        {text}
      </span>
    </div>
  );
};

export default ImageWithOverlay;
