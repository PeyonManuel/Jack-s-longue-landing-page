import React, { useEffect } from 'react';
import { animationOnScroll } from '../Utilities';

const AboutUs = () => {
  useEffect(() => {
    function scrollHandler() {
      var longueH3 = document.querySelector('#longueH3');
      animationOnScroll(longueH3, 'fade-right');
      var sofa = document.querySelector('.sofa');
      animationOnScroll(sofa, 'fade-right');
      var sign = document.querySelector('.sign');
      animationOnScroll(sign, 'fade-left');
      var imgText1P = document.querySelector('#img-text-1-p');
      animationOnScroll(imgText1P, 'fade-right');
      var snack = document.querySelector('.snack');
      animationOnScroll(snack, 'fade-up');
      var outside = document.querySelector('.outside');
      animationOnScroll(outside, 'fade-right');
      var imgText2P = document.querySelector('#img-text-2-p');
      animationOnScroll(imgText2P, 'fade-right');
      var interior = document.querySelector('.interior');
      animationOnScroll(interior, 'fade-up');
      var brownies = document.querySelector('.brownies');
      animationOnScroll(brownies, 'fade-up');
      var lamp = document.querySelector('.lamp');
      animationOnScroll(lamp, 'fade-left');
      var lampP = document.querySelector('#lamp-p');
      animationOnScroll(lampP, 'fade-left');
      var food = document.querySelector('.food');
      animationOnScroll(food, 'fade-left');
      var tower = document.querySelector('.tower');
      animationOnScroll(tower, 'fade-left');
      var towerP = document.querySelector('#tower-p');
      animationOnScroll(towerP, 'fade-left');
      var coffee = document.querySelector('.coffee');
      animationOnScroll(coffee, 'fade-up');
    }
    document
      .querySelector('.about-parallax')
      .addEventListener('scroll', scrollHandler);
    return () => {
      document
        .querySelector('.about-parallax')
        .removeEventListener('scroll', scrollHandler);
    };
  }, []);
  return (
    <div className='main-parallax about-parallax'>
      <section className='section about parallax parallax-one'>
        <div className='jacks-logo column justify-center'>
          <img src='\Jacks_logo.png' alt='Jacks logo' />
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
                var cafeteriaContainers = document.querySelectorAll(
                  '.cafeteria-card-types'
                );
                cafeteriaContainers.forEach((container) => {
                  container.classList.add('fade-left');
                });
                var restaurantContainers = document.querySelectorAll(
                  '.cafeteria-card-types'
                );
                restaurantContainers.forEach((container) => {
                  container.classList.remove('fade-right');
                });
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
            >
              Restaurant
            </button>
          </div>
        </div>
      </section>
      <div className='jacks-details'>
        <section className='about'>
          <h1>Bienvenidos a Jack's Longue</h1>
          <div className='whats-longue'>
            <div className='column'>
              <h3 id='longueH3'>
                ¿Que es un Lounge?
                <br /> Es un espacio orientado al relax a través de la deco, los
                muebles y la musica.
              </h3>
              <div className='about-img-container sofa'>
                <img src='Jacks-Longue-2.jpg' alt="Jack's Longue" />
              </div>
            </div>
            <div className='about-img-container sign'>
              <img src='Jacks-Longue.jpg' alt="Jack's Longue" />
            </div>
          </div>
          <div className='whats-jacks'>
            <div className='whats-jacks-1'>
              <div className='img-text-1'>
                <p id='img-text-1-p'>
                  Jack´s nace de una idea de fusionar la gastronomía y la
                  música, incorporando comodidad, placer, elegancia y armonía a
                  la propuesta.
                </p>
                <div className='about-img-container snack'>
                  <img src='Jacks-Longue-4.jpg' alt="Jack's Longue" />
                </div>
              </div>
              <div className='about-img-container outside'>
                <img src='Jacks-Longue-3.jpg' alt="Jack's Longue" />
              </div>
              <div className='img-text-2'>
                <p id='img-text-2-p'>
                  Ofrece una carta variada en cafetería, picadas calientes,
                  sandwiches especiales, ricas ensaladas y una selección
                  especial de platos internacionales, ideales para acompañar con
                  un buen vino, tragos o una cerveza bien helada.
                </p>
                <div className='about-img-container interior'>
                  <img src='Jacks-Longue-8.jpg' alt="Jack's Longue" />
                </div>
              </div>
              <div className='about-img-container brownies'>
                <img src='Jacks-Longue-9.jpg' alt="Jack's Longue" />
              </div>
            </div>
            <div className='whats-jacks-2'>
              <div className='lamp-text'>
                <div className='about-img-container lamp'>
                  <img src='Jacks-longue-5.jpg' alt="Jack's Longue" />
                </div>
                <p id='lamp-p'>
                  Ofrece excelentes opciones de desayuno, almuerzos, tomar una
                  rica merienda, picar algo, disfrutar unos buenos tragos con
                  amigos o cenar en un ambiente relajado, como en el living de
                  tu casa y con la mejor música.
                </p>
              </div>
              <div className='about-img-container food'>
                <img src='Jacks-longue-6.jpg' alt="Jack's Longue" />
              </div>
              <div className='tower-text'>
                <div className='about-img-container tower'>
                  <img src='Jacks-Longue-7.jpg' alt="Jack's Longue" />
                </div>
                <p id='tower-p'>
                  En Jacks Loungue somos especialistas en hacerte vivir momentos
                  únicos acompañado de las personas que más queres.
                  <br /> ¡Te esparamos!
                </p>
              </div>
              <div className='about-img-container coffee'>
                <img src='Jacks-Longue-10.jpg' alt="Jack's Longue" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
