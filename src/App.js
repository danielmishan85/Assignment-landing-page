import './App.css';

import Intro from './components/Intro/Intro';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';

function App() {
  return (
    <div className='App'>
      {/* <Home /> */}
      <Intro />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
