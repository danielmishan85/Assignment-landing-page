import './Intro.css';

import logo from '../../img/logo.png';
import hero from '../../img/hero.png';

const Intro = () => {
  const scrollToTarget = () => {
    const target = document.getElementById('Contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='intro' id='Home'>
      <div className='i-left'>
        <img className='heroImg' src={hero} alt='hero-img' />
      </div>
      <div className='i-right'>
        <img className='logoImg' src={logo} alt='logo-img' />
        <div className='i-heading'>
          WWS | Profitable Investments with
          <span>Secure Management</span>
        </div>
        <div className='i-heading2'>
          Take the first steps towards improving your financial life! Looking
          for financial planning and investment guidance? Our experts at
          WealthWise™ Solutions (WWS) are here to provide you with a service
          specifically geared towards your personal needs. Our unique and
          advanced service platform is designed from the ground up to make the
          process simple and accessible.
        </div>
        <button className='button i-button' onClick={scrollToTarget}>
          Subscribe for free
        </button>
      </div>
    </div>
  );
};

export default Intro;
