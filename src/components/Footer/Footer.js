import './Footer.css';

import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerLeft'>
        <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
          <span className='links'>Home</span>
        </Link>
        <Link spy={true} to='About' smooth={true}>
          <span className='links'>About us</span>
        </Link>
        <Link spy={true} to='Contact' smooth={true}>
          <span className='links'>Contact us</span>
        </Link>
      </div>
      <div className='footerIcons'>
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
      <div className='footerRight'>
        © 2023 WealthWise Solutions. All rights reserved. All information on this website is for
        informational and advisory purposes and does not constitute legal
        advice.
      </div>
    </div>
  );
};

export default Footer;
