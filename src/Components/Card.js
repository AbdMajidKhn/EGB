// Card.js
import React from 'react';

const Card = ({ title, details, hovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="card"
      style={{
        background: 'transparent',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0.5px solid Grey',
        height: '350px',
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: '20px'
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hovered && (
        <div
          className="card-overlay"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            transition: 'background-color 0.3s ease-in-out',
          }}
        >
          <p style={{ fontFamily: 'Canela,serif', fontWeight: 'bold', fontSize: '24px', color: 'grey', position: 'absolute', top: '0', left: '5%' }}>
            {title}
          </p>
          <p style={{ fontFamily: 'Canela,serif', fontWeight: 'normal', fontSize: '16px', color: 'grey', textAlign: 'center', width: '300px' }}>
            {details}
          </p>
        </div>
      )}
      <p style={{ fontFamily: 'Canela,serif', fontWeight: 'bold', fontSize: '24px', color: 'white' }}>
        {title}
      </p>
    </div>
  );
};

export default Card;
