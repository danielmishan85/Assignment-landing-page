import './Services.css';

const Services = () => {
  return (
    <div className='services' id='Services'>
      <div className='headline'>
        <span style={{ color: 'rgb(16, 16, 53)', fontSize: '2rem' }}>
          היתרונות שלנו
        </span>
      </div>
      <div className='services-list'>
        <div className='srv1'>
          <span>ניהול תיק השקעות מותאם אישית</span>
          {/* <span>
            אנו מפעילים גישה אישית לניהול השקעות שלך, מתוך הבנה מעמיקה של מטרות
            ההשקעה שלך ורמת הסיכון שאתה מעדיף.
          </span> */}
        </div>
        <div className='srv2'>
          <span>ייעוץ פיננסי מותאם</span>
          {/* <span>
            תוך התחשבות במידע פיננסי מעודכן ובמבנה הפיננסי האישי שלך, אנחנו
            בונים יחד את תוכנית הפעולה האישית שלך. המטרה - להבטיח שתגיע אל כל
            מטרה פיננסית שאתה רוצה להשיג.
          </span> */}
        </div>
        <div className='srv3'>
          <span>המלצות מובילות</span>
          {/* <span>
            כל המלצה מתבצעת בהתאם למבנה הפיננסי האישי שלך. תחומי ההשקעה,
            השווקים, רמת הסיכון והכשרונות הפיננסיים הם רק חלק מהמשתנים שאנחנו
            לוקחים בחשבון כאשר אנו נותנים המלצות.
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Services;