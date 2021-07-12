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
          var cafeteriaContainers = document.querySelectorAll(
            '.cafeteria-card-types'
          );
          cafeteriaContainers.forEach((container) => {
            container.classList.add('fade-left');
          });
          var restaurantContainers = document.querySelectorAll(
            '.restaurant-card-types'
          );
          restaurantContainers.forEach((container) => {
            container.classList.remove('fade-right');
          });
        }}
      ></button>
      <button
        onClick={() => {
          if ('ontouchstart' in document.documentElement) {
            document.querySelector('.about-parallax').scrollIntoView();
          } else {
            document.querySelector('body').scrollTo(window.screen.width, 0);
          }
          var cafeteriaContainers = document.querySelectorAll(
            '.cafeteria-card-types'
          );
          cafeteriaContainers.forEach((container) => {
            container.classList.remove('fade-left');
          });
          var restaurantContainers = document.querySelectorAll(
            '.restaurant-card-types'
          );
          restaurantContainers.forEach((container) => {
            container.classList.remove('fade-right');
          });
        }}
      ></button>
      <button
        onClick={() => {
          if ('ontouchstart' in document.documentElement) {
            document.querySelector('.restaurant-parallax').scrollIntoView();
          } else {
            document.querySelector('body').scrollTo(window.screen.width * 2, 0);
          }
          var restaurantContainers = document.querySelectorAll(
            '.restaurant-card-types'
          );
          restaurantContainers.forEach((container) => {
            container.classList.add('fade-right');
          });
          var cafeteriaContainers = document.querySelectorAll(
            '.cafeteria-card-types'
          );
          cafeteriaContainers.forEach((container) => {
            container.classList.remove('fade-left');
          });
        }}
      ></button>
    </div>
  );
};

export default PositionButtons;
