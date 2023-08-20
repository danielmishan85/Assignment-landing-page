import './Footer.css';

import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='f-left'>
        <span>
          אמ.אמ.אי. - ניהול השקעות בע"מ עוסקת בניהול תיקי השקעות ושיווק השקעות
          בלבד ואינה עוסקת בייעוץ.
        </span>
        <span>
          המידע המפורט לעיל הינו מידע מקצועי מסייע בלבד ואין לראות בו כמידע
          עובדתי או כמידע שלם וממצה של כל ההיבטים הכרוכים בניירות הערך ו/או
        </span>
        <span>
          בנכסים הפיננסים המוזכרים והאמור לעיל אינו תחליף לקבלת ייעוץ או הדרכה
          המתחשבים בצרכיו הייחודיים של כל משקיע (כלכלי, משפטי, מיסויי וכד')
        </span>
        <span>
          ואין בו כדי להבטיח תשואה או רווח כלשהו בתיק ההשקעות ואין לקבל החלטות
          השקעה כלשהן בהסתמך עליו בלבד.
        </span>
        <span>
          השירות כפוף לתנאי החברה והתאמתו לנתוני או צרכי הלקוח ולחתימת הלקוח על
          מסמכי ההתקשרות.
        </span>
      </div>
      <div className='line'></div>
      <div className='f-right'>
        <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
          <span className='links'>בית</span>
        </Link>
        <Link spy={true} to='Services' smooth={true}>
          <span className='links'>אודותינו</span>
        </Link>
        <Link spy={true} to='Contact' smooth={true}>
          <span className='links'>צור קשר</span>
        </Link>
        <div className='f-icons'>
          <a href='https://github.com/danielmishan85' target='_blank'>
            <Facebook size='2rem' />
          </a>
          <a
            href='https://www.linkedin.com/in/daniella-mishan/'
            target='_blank'
          >
            <Linkedin size='2rem' />
          </a>
          <a
            href='https://www.linkedin.com/in/daniella-mishan/'
            target='_blank'
          >
            <Instagram size='2rem' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
