import './AboutUs.css';

import logo from '../../img/logo.png';

const About = () => {
  return (
    <div className='about' id='About'>
      <div className='background'></div>
      <div className='aboutRight'>
        <img src={logo} alt='logo-img' />
      </div>
      <div className='aboutLeft'>
        <div className='heading'>
          <span className='headingUnderline'>About us</span>
        </div>
        <div className='section'>
          We believe that money management can be simple and accessible to
          everyone. We founded the company with the goal of upgrading people's
          money management, providing them with professional financial advice,
          and ensuring that every client can direct themselves to a better
          financial future.
          <br />
          <br />
          Our services are designed to make the process of financial decisions
          simple and understandable for you. With Many years of experience and
          expertise, we are here to improve your financial life.
          <br />
          <br />
          We believe in a deep understanding of your unique financial needs and
          support sponsored that is customized for your needs and level of prior
          knowledge.
          <br />
          <br />
          Contact us today and join thousands of satisfied partners who have
          already improved their financial management through our professional
          and personal services.
        </div>
      </div>
    </div>
  );
};

export default About;
