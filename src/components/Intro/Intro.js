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
      <div className='i-right'>
        <img className='logoImg' src={logo} alt='logo-img' />
        <div className='i-heading'>
          <span>שפר את חייך הפיננסים | הדרך לניהול</span>
          <span>מאובטח והשקעות משתלמות</span>
        </div>
        <div className='i-heading2'>
          ברוך הבא לעולם של שיפור חיים הפיננסיים! אם אתה מחפש את הדרך לנהל את
          הכספים שלך בצורה חכמה ומתוכננת, אתה במקום הנכון. אנחנו כאן כדי לספק לך
          שירות פיננסי מתקדם שנועד להפוך את התהליך לפשוט ונגיש.
        </div>
        <button className='button i-button' onClick={scrollToTarget}>
          לפרטים נוספים
        </button>
      </div>
      <div className='i-left'><img className='heroImg' src={hero} alt='hero-img' /></div>
    </div>
  );
};

export default Intro;
