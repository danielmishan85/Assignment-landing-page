import './Services.css';

import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';

const Services = ({ hasScrolled }) => {
  return (
    <div
      className={`services ${hasScrolled ? 'visible' : 'hidden'}`}
      id='Services'
    >
      <div className={`headline ${hasScrolled ? 'visible' : 'hidden'}`}>
        <span style={{ fontSize: '2.2rem' }}>Our advantages</span>
      </div>
      <div className={`services-list ${hasScrolled ? 'visible' : 'hidden'}`}>
        <div className={`srv1 ${hasScrolled ? 'visible' : 'hidden'}`}>
          <img src={icon2} alt='icon-img' />
          <span>Personalized Investment Portfolio Management</span>
          <span>
            We operate a personal approach to managing your investments, based
            on an understanding of your own goals, your investment past and
            future investments, and the level of risk you prefer.
          </span>
        </div>
        <div className={`srv2 ${hasScrolled ? 'visible' : 'hidden'}`}>
          <img src={icon1} alt='icon-img' />
          <span>Tailored Financial Advice</span>
          <span>
            By taking into account up-to-date financial information and your
            financial situation, together we will build a personal action that
            is tailor-made to maximize the chances of success while minimizing
            any risks involved. The goal - to ensure that you can reach the
            financial status of your dreams.
          </span>
        </div>
        <div className={`srv3 ${hasScrolled ? 'visible' : 'hidden'}`}>
          <img src={icon3} alt='icon-img' />
          <span>Focus on Credit Risk Mitigation</span>
          <span>
            The ongoing cross-Atlantic bank tumult adds to the squeeze on
            financial markets, and a return of credit risk supports our risk-off
            stance. Through the application of various safeguards we make sure
            that you make the smartest and safest investments possible.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
