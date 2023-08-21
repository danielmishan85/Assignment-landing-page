import './Popup.css';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Popup = () => {
  const form = useRef();

  const [isOpen, setIsOpen] = useState(true);
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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={`popup ${isOpen ? 'popup' : 'closed'}`}>
      <div className='close' onClick={handleClose}>
        X
      </div>
      <div className='popupHeadline'>Leave your details</div>
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
          className='button p-button'
        />
        <span>
          {done && 'Form sent successfully, we will contact you soon!'}
        </span>
      </form>
    </div>
  );
};

export default Popup;
