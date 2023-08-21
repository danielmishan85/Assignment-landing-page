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
          <span>WWS | The way to secure management</span>
          <span>and profitable investments</span>
        </div>
        <div className='i-heading2'>
          Welcome to the world of improving your financial life! If you are
          looking for the way to manage your finances in a smart and planned
          way, you are in the right place. We are here to provide you with an
          advanced financial service designed to make the process simple and
          accessible.
        </div>
        <button className='button i-button' onClick={scrollToTarget}>
          Subscribe for free
        </button>
      </div>
    </div>
  );
};

export default Intro;
