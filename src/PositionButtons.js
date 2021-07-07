import React from 'react';

const PositionButtons = () => {
  return (
    <div className='position-buttons'>
      <button
        onClick={() => {
          if ('ontouchstart' in document.documentElement) {
            document.querySelector('.cafeteria-parallax').scrollIntoView();
          } else {
            document.querySelector('body').scrollTo(0, 0);
          }
        }}
      ></button>
      <button
        onClick={() => {
          if ('ontouchstart' in document.documentElement) {
            document.querySelector('.about-parallax').scrollIntoView();
          } else {
            document.querySelector('body').scrollTo(window.screen.width, 0);
          }
        }}
      ></button>
      <button
        onClick={() => {
          if ('ontouchstart' in document.documentElement) {
            document.querySelector('.restaurant-parallax').scrollIntoView();
          } else {
            document.querySelector('body').scrollTo(window.screen.width * 2, 0);
          }
        }}
      ></button>
    </div>
  );
};

export default PositionButtons;
