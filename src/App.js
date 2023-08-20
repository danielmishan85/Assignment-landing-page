import './App.css';

import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import About from './components/About/AboutUs';

function App() {
  return (
    <div className='App'>
      <Intro />
      <Services />
      <About/>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
