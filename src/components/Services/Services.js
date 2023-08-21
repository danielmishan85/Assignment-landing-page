import './Services.css';

import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';

const Services = () => {
  return (
    <div className='services' id='Services'>
      <div className='headline'>
        <span style={{ color: 'rgb(182, 142, 194)', fontSize: '2rem' }}>
          Our advantages
        </span>
      </div>
      <div className='services-list'>
        <div className='srv1'>
          <img src={icon2} alt='icon-img' />
          <span>Personalized investment portfolio management</span>
          <span>
            We operate a personal approach to managing your investments, based
            on a deep understanding of goals Your investment and the level of
            risk you prefer.
          </span>
        </div>
        <div className='srv2'>
          <img src={icon1} alt='icon-img' />
          <span>Tailored financial advice</span>
          <span>
            Taking into account up-to-date financial information and your
            personal financial structure, we Build your personal action plan
            together. The goal - to ensure that you reach all A financial goal
            you want to achieve.
          </span>
        </div>
        <div className='srv3'>
          <img src={icon3} alt='icon-img' />
          <span>Top recommendations</span>
          <span>
            Each recommendation is made according to your personal financial
            structure. investment areas, The markets, the level of risk and the
            financial talents are only some of the variables that we are taken
            into account when we give recommendations.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
