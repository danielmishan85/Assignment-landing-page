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
      <div className='get-input'>
        <div className='headline'>
          <span>,למידע נוסף ותיאום פגישה</span>
          <span>השאירי פרטים ונחזור אלייך בהקדם</span>
          <span>₪ החל מ-400,000</span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='user_name'
            className='user'
            placeHolder='שם מלא'
            required
          />
          <input
            type='email'
            name='user_email'
            className='user'
            placeHolder='מייל'
            required
          />
          <input
            type='phone'
            name='user_phone'
            className='user'
            placeHolder='טלפון'
            required
          />
          <input type='submit' value='←      שלחו טופס' className='button s-button' />
          <span>{done && '!טופס נשלח בהצלחה, ניצור איתך קשר בהקדם'}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
