import './Trusted.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import basel from '../../assets/partner-logos/basel-colored.svg';
import bern from '../../assets/partner-logos/bern-colored.svg';
import delaware from '../../assets/partner-logos/delaware-colored.svg';
import memphis from '../../assets/partner-logos/memphis-colored.svg';
import sydney from '../../assets/partner-logos/sydney-colored.svg';
import proNature from '../../assets/partner-logos/pronature-color.svg';

const TrustedBy = () => {
  const trustedBy = [
    { name: 'basel', logo: basel},
    { name: 'bern', logo: bern },
    { name: 'delaware', logo: delaware },
    { name: 'memphis', logo: memphis },
    { name: 'sydney', logo: sydney },
    { name: 'proNature', logo: proNature },
  ];

  return (
    <section className="trusted py-5">
      <h2 className="section-title text-center">Trusted By</h2>
      <hr className="hr-break"/>
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
            <SwiperSlide
              key={index}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="img-fluid"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TrustedBy;
