import './Footer.css';

import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='f-right'>
        <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
          <span className='links'>בית</span>
        </Link>
        <Link spy={true} to='About' smooth={true}>
          <span className='links'>אודותינו</span>
        </Link>
        <Link spy={true} to='Contact' smooth={true}>
          <span className='links'>צור קשר</span>
        </Link>
      </div>
      <div className='f-icons'>
        <a
          href='https://www.facebook.com/profile.php?id=100009705289231'
          target='_blank'
        >
          <Facebook size='2rem' />
        </a>
        <a href='https://www.linkedin.com/in/daniella-mishan/' target='_blank'>
          <Linkedin size='2rem' />
        </a>
        <a href='https://www.instagram.com/daniel_mishan/' target='_blank'>
          <Instagram size='2rem' />
        </a>
      </div>
      <div className='f-left'>
        © 2023 שפר חייך הפיננסיים. כל הזכויות שמורות. כל המידע באתר זה הוא
        למטרות מידע וייעוץ ואינו מהווה ייעוץ משפטי.
      </div>
    </div>
  );
};

export default Footer;
