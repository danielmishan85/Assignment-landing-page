import './Testimonial.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';
import profilePic1 from '../../img/profile4.jpg';
import profilePic2 from '../../img/profile1.jpg';
import profilePic3 from '../../img/profile2.jpg';
import profilePic4 from '../../img/profile3.jpg';

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      name: 'יוסי כהן',
      review:
        '.השירות ששינה לי את החיים! סופסוף מצאתי את הפתרון הפיננסי המושלם',
    },
    {
      img: profilePic2,
      name: 'שירה לוי',
      review:
        'אני מרוצה מאוד מהשירות. התשובות המדויקות והמהירות שלכם מרשימות ביותר.',
    },
    {
      img: profilePic3,
      name: 'נטלי קליין',
      review:
        'אני מודה שקודם להכרות עם השירות שלכם, הייתי כלל לא בטוחה לאן הולך הכסף שלי. עכשיו אני מרגישה שיש לי מישהו שמקפיד על כל פרט ומוביל אותי להחלטות פיננסיות מבוססות.',
    },
    {
      img: profilePic4,
      name: 'נועה תמם',
      review:
        'מצאתי בסוף את השירות הפיננסי האישי שחיפשתי. התמיכה המקצועית וההמלצות המותאמות אישית גרמו לי להרגיש שאני לא לבד בדרך שלי לניהול כספי.',
    },
  ];
  return (
    <div className='t-wrapper'>
      <div className='t-hadding'>
        <span>:המלצות עלינו</span>
      </div>
      {/* sliders */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='testimonial'>
                <img src={client.img} alt='' />
                <span>{client.name}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
