import { useEffect } from 'react';
import Cafeteria from './Screens/Cafeteria';
import AboutUs from './Screens/AboutUs';
import PositionButtons from './PositionButtons';
import Restaurant from './Screens/Restaurant';

function App() {
  useEffect(() => {
    if ('ontouchstart' in document.documentElement) {
      document.querySelector('.about-parallax').scrollIntoView();
    } else {
      document.querySelector('body').scrollTo(window.screen.width, 0);
    }
    document.querySelector('body').style.scrollBehavior = 'smooth';

    var xDown = null;

    const getTouches = (evt) => {
      return evt.touches || evt.originalEvent.touches;
    };

    const handleTouchStart = (evt) => {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
    };

    const handleTouchMove = (evt) => {
      if (!xDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;

      var xDiff = xDown - xUp;

      if (xDiff > 9) {
        if (
          document.body.scrollLeft + window.screen.width ===
          window.screen.width * 2
        ) {
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
        }
        if (
          document.body.scrollLeft + window.screen.width ===
          window.screen.width
        ) {
          var cafeteriaContainers2 = document.querySelectorAll(
            '.cafeteria-card-types'
          );
          cafeteriaContainers2.forEach((container) => {
            container.classList.remove('fade-left');
          });
          var restaurantContainers2 = document.querySelectorAll(
            '.restaurant-card-types'
          );
          restaurantContainers2.forEach((container) => {
            container.classList.remove('fade-right');
          });
        }
        document
          .querySelector('body')
          .scrollTo(document.body.scrollLeft + window.screen.width, 0);
        console.log(document.body.scrollLeft + window.screen.width);
      } else if (xDiff < -9) {
        if (document.body.scrollLeft - window.screen.width === 0) {
          var cafeteriaContainers3 = document.querySelectorAll(
            '.cafeteria-card-types'
          );
          cafeteriaContainers3.forEach((container) => {
            container.classList.add('fade-left');
          });
          var restaurantContainers3 = document.querySelectorAll(
            '.cafeteria-card-types'
          );
          restaurantContainers3.forEach((container) => {
            container.classList.remove('fade-right');
          });
        }
        if (
          document.body.scrollLeft - window.screen.width ===
          window.screen.width
        ) {
          console.log('hi');
          var cafeteriaContainers4 = document.querySelectorAll(
            '.cafeteria-card-types'
          );
          cafeteriaContainers4.forEach((container) => {
            container.classList.remove('fade-left');
          });
          var restaurantContainers4 = document.querySelectorAll(
            '.restaurant-card-types'
          );
          restaurantContainers4.forEach((container) => {
            container.classList.remove('fade-right');
          });
        }
        console.log(document.body.scrollLeft - window.screen.width);
        document
          .querySelector('body')
          .scrollTo(document.body.scrollLeft - window.screen.width, 0);
      }
      xDown = null;
    };
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart, false);
      document.removeEventListener('touchmove', handleTouchMove, false);
    };
  }, []);

  return (
    <div className='App'>
      <main>
        <Cafeteria />
        <AboutUs />
        <Restaurant />
      </main>
      <PositionButtons />
    </div>
  );
}

export default App;
