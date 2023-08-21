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
      name: 'Yossi Cohen',
      review:
        `"The service that changed my life! I finally found the perfect financial solution".`,
    },
    {
      img: profilePic2,
      name: 'Shira lavi',
      review:
      `"I am very satisfied with the service. Your accurate and quick answers are very impressive".`,
    },
    {
      img: profilePic3,
      name: 'Natalie Klein',
      review:
      `"I admit that before getting to know your service, I was not at all sure where my money was going. Now I feel like I have someone who takes care of every detail and leads me to sound financial decisions".`,
    },
    {
      img: profilePic4,
      name: 'Noa Tamam',
      review:
      `"I finally found the personal financial service I was looking for. The professional support and personalized recommendations made me feel that I am not alone on my path to financial management".`,
    },
  ];
  return (
    <div className='t-wrapper'>
      <div className='t-hadding'>
        <span>Recommendations</span>
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
