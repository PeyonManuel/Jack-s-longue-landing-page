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
    document.querySelector('html').style.scrollBehavior = 'smooth';

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

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 9) {
          alert(xDiff);
          console.log('left');
        } else if (xDiff < -9) {
          alert(xDiff);
          console.log('right');
        }
      }
      xDown = null;
      yDown = null;
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
