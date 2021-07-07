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
