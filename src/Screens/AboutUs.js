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
                document.querySelector('.cafeteria-parallax').scrollIntoView();
              }}
            >
              Cafetería
            </button>
            <button
              onClick={() => {
                document.querySelector('.restaurant-parallax').scrollIntoView();
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
