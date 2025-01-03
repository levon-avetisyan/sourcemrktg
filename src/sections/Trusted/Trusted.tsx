import './Trusted.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import basel from '../../assets/images/partners/partner-1.svg';
import bern from '../../assets/images/partners/partner-2.svg';
import delaware from '../../assets/images/partners/partner-3.svg';
import memphis from '../../assets/images/partners/partner-4.svg';
import sydney from '../../assets/images/partners/partner-6.svg';
import proNature from '../../assets/images/partners/partner-5.svg';

const TrustedBy = () => {
  const trustedBy = [
    { name: 'basel', logo: basel },
    { name: 'bern', logo: bern },
    { name: 'delaware', logo: delaware },
    { name: 'memphis', logo: memphis },
    { name: 'sydney', logo: sydney },
    { name: 'proNature', logo: proNature },
  ];

  return (
    <section className="trusted py-5">
      <h2 className="section-title text-center">Trusted By</h2>
      <hr className="hr-break" />
      <div className="swiper-container">
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={10000}
          modules={[Autoplay]}
          className="w-100"
        >
          {trustedBy.map((partner, index) => (
            <SwiperSlide key={index}>
              <img src={partner.logo} alt={partner.name} className="img-fluid" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedBy;
