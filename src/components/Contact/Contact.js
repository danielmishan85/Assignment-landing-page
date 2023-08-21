import './Contact.css';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hvn9pbv',
        'template_qsp9df8',
        form.current,
        'LPgVrXQ3UY0hbYSwi'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact' id='Contact'>
      <div className='getInput'>
        <div className='headline'>
          <span>For more information and to schedule an appointment,</span>
          <span>
            Leave details and we will get back to you as soon as possible
          </span>
          <span>The service is fully accompanied - free of charge!</span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='user_name'
            className='user'
            placeHolder='Full name'
            required
          />
          <input
            type='email'
            name='user_email'
            className='user'
            placeHolder='Email address'
            required
          />
          <input
            type='tel'
            name='user_phone'
            className='user'
            placeHolder='Phone number'
            required
          />
          <input
            type='submit'
            value='Subscribe for free'
            className='button s-button'
          />
          <span>
            {done && 'Form sent successfully, we will contact you soon!'}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
