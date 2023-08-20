import './Intro.css';

import logo from '../../img/logo.png';
import hero from '../../img/hero.png'

const Intro = () => {
  const scrollToTarget = () => {
    const target = document.getElementById('Contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='intro' id='Home'>
      <div classname='i-right'>
        {/* <img src={logo} alt='logo-img' /> */}
        <div className='heading'>
          <span>שפר את חייך הפיננסים | הדרך לניהול</span>
          <span>מאובטח והשקעות משתלמות</span>
        </div>
        <div className='heading2'>
          ברוך הבא לעולם של שיפור חיים הפיננסיים!
          <br />
          אם אתה מחפש את הדרך לנהל את הכספים שלך
          <br />
          בצורה חכמה ומתוכננת, אתה במקום הנכון.
          <br />
          אנחנו כאן כדי לספק לך שירות פיננסי מתקדם שנועד
          <br />
          להפוך את התהליך לפשוט ונגיש.
        </div>
        <button className='button i-button' onClick={scrollToTarget}>
          לפרטים נוספים
        </button>
      </div>
      <div classname='i-left'>
        {/* <img src={hero} alt='hero-img' /> */}
      </div>
    </div>
  );
};

export default Intro;
