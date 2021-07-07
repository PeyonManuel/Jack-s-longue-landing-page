import React from 'react';

const PositionButtons = () => {
  return (
    <div className='position-buttons'>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      ></button>
      <button
        onClick={() => {
          window.scrollTo(window.screen.width, 0);
        }}
      ></button>
      <button
        onClick={() => {
          window.scrollTo(window.screen.width * 2, 0);
        }}
      ></button>
    </div>
  );
};

export default PositionButtons;
