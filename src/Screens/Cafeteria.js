import React from 'react';
import { cafeteriaItems } from '../CafeteriaItems';

const Restaurant = () => {
  return (
    <div class='main-parallax'>
      <section class='section parallax parallax-three'>
        <div className='jacks-logo column justify-center'></div>
      </section>
      <div class='jacks-details'>
        <section>
          {cafeteriaItems.map((type, i) => (
            <div className='card-types'>
              <h2 style={type.clarification && { marginBottom: '0' }}>
                {type.type}
              </h2>
              {type.clarification && (
                <p style={{ marginTop: '0.5rem' }}>{type.clarification}</p>
              )}
              <div className='card-items'>
                {type.items.map((item) => (
                  <div
                    className={
                      'food-container' +
                      (type.type === 'Cervezas' ? ' reverse' : '')
                    }
                  >
                    <div className='food-details'>
                      <h3>{item.name}</h3>
                      {item.description && <p>{item.description}</p>}
                      {item.types && item.types.map((type) => <p>{type}</p>)}
                    </div>
                    {(type.type === 'Hot sandwiches' ||
                      type.type === 'Cervezas') && (
                      <div className='food-img-container'>
                        <img src={item.image} alt={item.name} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Restaurant;
