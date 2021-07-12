import { useEffect } from 'react';
import Cafeteria from './Screens/Cafeteria';
import AboutUs from './Screens/AboutUs';
import Restaurant from './Screens/Restaurant';
import PositionButtons from './Components/PositionButtons';
import smoothscroll from 'smoothscroll-polyfill';

function App() {
  useEffect(() => {
    smoothscroll.polyfill();
    if ('ontouchstart' in document.documentElement) {
      document.querySelector('.about-parallax').scrollIntoView();
    } else {
      document.querySelector('body').scrollTo(window.screen.width, 0);
    }
    document.querySelector('body').style.scrollBehavior = 'smooth';

    var xDown = null;
    var yDown = null;

    const getTouches = (evt) => {
      return evt.touches || evt.originalEvent.touches;
    };

    const handleTouchStart = (evt) => {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    };

    const handleTouchMove = (evt) => {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (
        Math.abs(xDiff) > Math.abs(yDiff) &&
        document.body.scrollLeft % window.screen.width === 0
      ) {
        if (xDiff > 0) {
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
        } else {
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
          document
            .querySelector('body')
            .scrollTo(document.body.scrollLeft - window.screen.width, 0);
        }
      }
      xDown = null;
      yDown = null;
    };
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    const goToAboutUs = (event) => {
      setTimeout(() => {
        document.querySelector('body').scrollTo(window.screen.width, 0);
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
      }, 500);
    };
    window.addEventListener('orientationchange', goToAboutUs);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart, false);
      document.removeEventListener('touchmove', handleTouchMove, false);
      document.removeEventListener('orientationchange', goToAboutUs, false);
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
