import './Intro.css';

const Intro = () => {
  const scrollToTarget = () => {
    const target = document.getElementById('Contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='intro' id='Home'>
      <div className='heading'>
        <span>שפר את חייך הפיננסים | הדרך לניהול</span>
        <span>מאובטח והשקעות משתלמות</span>
      </div>
      <div className='heading2'>
        ברוך הבא לעולם של שיפור חיים הפיננסיים! אם אתה מחפש את הדרך לנהל את
        הכספים שלך בצורה חכמה ומתוכננת, אתה במקום הנכון. אנחנו כאן כדי לספק לך
        שירות פיננסי מתקדם שנועד להפוך את התהליך לפשוט ונגיש.
      </div>
      <button className='button' onClick={scrollToTarget}>
        לפרטים נוספים
      </button>
    </div>
  );
};

export default Intro;
