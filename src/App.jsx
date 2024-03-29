/* eslint-disable no-unused-vars */
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { useState, useEffect } from 'react';
import HamidAjbarVideo from './components/HamidVideo/HamidAjbarVideo';
import HamidAjbar from './components/HamidAjbar/HamidAjbar';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Videos from './components/Videos/Videos';
import PastEvents from './components/PastEvents/PastEvents';
import Press from './components/Press/Press';
import Footer from './components/Footer/Footer';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    // Determine scroll direction
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Throttle scroll updates
      window.requestAnimationFrame(controlNavbar);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  return (
    <div className="App">
      {/* <div>{showNavbar && <Navbar />}</div> */}
      <Navbar />
      <HamidAjbarVideo />
      <HamidAjbar />
      <Projects />
      <Gallery />
      <Videos />
      <PastEvents />
      <Press />
      <Footer />
    </div>
  );
}

export default App;
