import './App.css';

import React, { useEffect, useState } from 'react';
import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import About from './components/About/AboutUs';
import Popup from './components/Popup/Popup';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10,000 milliseconds = 10 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className='App'>
      {showPopup && <Popup />}
      <Intro />
      <Services />
      <About />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
