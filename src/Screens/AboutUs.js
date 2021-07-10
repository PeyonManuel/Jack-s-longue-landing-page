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
        <section className='about'>
          <h1>Bienvenidos a Jack's Longue</h1>
          <div className='whats-longue'>
            <div className='column'>
              <h3>
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
          <div className='row'>
            <div className='whats-jacks'>
              <div className='img-text-1'>
                <p>
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
                <p>
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
              <div className='about-img-container lamp'>
                <img src='Jacks-longue-5.jpg' alt="Jack's Longue" />
              </div>
              <p>
                Ofrece excelentes opciones de desayuno, almuerzos, tomar una
                rica merienda, picar algo, disfrutar unos buenos tragos con
                amigos o cenar en un ambiente relajado, como en el living de tu
                casa y con la mejor música.
              </p>
              <div className='about-img-container food'>
                <img src='Jacks-longue-6.jpg' alt="Jack's Longue" />
              </div>
              <div className='about-img-container tower'>
                <img src='Jacks-Longue-7.jpg' alt="Jack's Longue" />
              </div>
              <p>
                En Jacks Loungue somos especialistas en hacerte vivir momentos
                únicos acompañado de las personas que más queres.
                <br /> ¡Te esparamos!
              </p>
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
