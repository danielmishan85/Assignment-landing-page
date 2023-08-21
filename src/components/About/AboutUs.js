import './AboutUs.css';

import logo from '../../img/logo.png';

const About = () => {
  return (
    <div className='about' id='About'>
      <div className='background'></div>
      <div className='a-right'>
        <img src={logo} alt='logo-img' />
      </div>
      <div className='a-left'>
        <div className='heading'>
          <span>About us</span>
          <div className='line'></div>
        </div>
        <div className='section'>
          We believe that money management can be simple and accessible to
          everyone. We founded the company With the goal of upgrading people's
          money management, providing them with professional financial advice
          and ensuring that every client can direct themselves to a better
          financial future.
          <br />
          <br />
          We are designed to make the process of financial decisions simple and
          understandable for you. With Many years of experience and expertise,
          we are here to improve your financial life.
          <br />
          <br />
          We believe in a deep understanding of your unique financial needs and
          support sponsored for you. We are looking to advise and assist you in
          so many ways You can upgrade your financial life.
          <br />
          <br />
          Contact us today and join our thousands of satisfied customers who
          have already improved their management their finances through our
          professional and personal services.
        </div>
      </div>
    </div>
  );
};

export default About;
