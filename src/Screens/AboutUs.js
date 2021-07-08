import React from 'react';

const AboutUs = () => {
  return (
    <div class='main-parallax about-parallax'>
      <section class='section about parallax parallax-one'>
        <div className='jacks-logo column justify-center'>
          <img src='\Jacks_logo.png' alt='Jacks logo'></img>
          <div className='jacks-buttons'>
            <button
              onClick={() => {
                if ('ontouchstart' in document.documentElement) {
                  document
                    .querySelector('.cafeteria-parallax')
                    .scrollIntoView();
                } else {
                  document.querySelector('body').scrollTo(0, 0);
                }
              }}
            >
              Cafetería
            </button>
            <button
              onClick={() => {
                if ('ontouchstart' in document.documentElement) {
                  document
                    .querySelector('.restaurant-parallax')
                    .scrollIntoView();
                } else {
                  document
                    .querySelector('body')
                    .scrollTo(window.screen.width * 2, 0);
                }
              }}
            >
              Restaurant
            </button>
          </div>
        </div>
      </section>
      <div class='jacks-details'>
        <section>
          <h1>Bienvenidos a Jack's Longue</h1>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
