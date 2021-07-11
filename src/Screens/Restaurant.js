import React from 'react';
import { cardItems } from '../CardItems';

const Restaurant = () => {
  return (
    <div className='main-parallax restaurant-parallax'>
      <section className='section parallax parallax-two'>
        <div className='jacks-logo column justify-center'></div>
      </section>
      <div className='jacks-details'>
        <section>
          {cardItems.map((type, i) => (
            <div className='restaurant-card-types' key={type.type}>
              <h2 style={type.clarification && { marginBottom: '0' }}>
                {type.type}
              </h2>
              {type.clarification && (
                <p style={{ marginTop: '0.5rem' }}>{type.clarification}</p>
              )}
              <div className='card-items'>
                {type.items.map((item, i) => (
                  <div
                    className={
                      'food-container' +
                      (type.type === 'Cervezas' ? ' reverse' : '')
                    }
                    key={i}
                  >
                    <div className='food-details'>
                      <h3>{item.name}</h3>
                      {item.description && <p>{item.description}</p>}
                      {item.types &&
                        item.types.map((type) => <p key={type}>{type}</p>)}
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
