// TextContent.js
import React from 'react';

const TextContent = () => {
  return (
    <div style={{
      fontWeight: '50',
      width: '390px',
      fontSize: '30px',
      marginLeft: '400px',
      fontStyle: 'normal',
      fontFamily: 'Canela,serif',
      padding: '20px',
      marginTop: '100px',
      color: 'rgba(0, 0, 0, 0.55)'
    }}>
      <p>
        Ever Green Is on a mission to use the world's
        resources more efficiently, and to create more
        energy-efficient and healthier homes and buildings.
      </p>
      <p
        style={{
          width: '200px',
          marginTop: '100px',
        }}
      >
        A New World
        Envisioned
      </p>
    </div>
  );
};

export default TextContent;
