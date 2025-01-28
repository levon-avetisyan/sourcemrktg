import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TestimonialsSection.scss';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jason N. Ct ',
      designation: '',
      image: '',
      text: 'I always look at sales as the ultimate self development program. Source Mktg has been a gift in that vein. With the training, to the support, to the opportunities for growth, Source Mktg has proven to be a perfect place to grow and earn as a sales rep.',
    },
    {
      name: 'Ralph G. Nj',
      designation: '',
      image: '',
      text: 'Amazing experience, freedom with constant positivity and support!! Best career decision I’ve ever made!!',
    },
    {
      name: 'Sheldon S. Ar',
      designation: '',
      image: '',
      text: "Hard work is recognized, praised, and rewarded. Source Mrktg gives you the tools and resources you need to be successful. Best Company I've ever worked for!",
    },
    {
      name: 'Michael A. Tx ',
      designation: 'Product Manager, Innovate Inc.',
      image: '',
      text: "It's great to be a part of a positive and supportive work environment. I've really enjoyed working with source marketing and taking advantage of what the job has to offer. I'm looking forward to what's to come and don't plan on going anywhere else. ",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="text-center mb-4 section-title mb-5">What Our Clients Say</h2>
      <hr className="hr-break mx-auto" />
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={false}
        style={{
          paddingRight: '30px',
          paddingLeft: '30px',
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="review-wrapper">
              {/* Uncomment and customize the image if needed */}
              {/*<img
          src={testimonial.image}
          alt={testimonial.name}
          className="rounded-circle mb-3 bg-dark"
          style={{ width: '100px', height: '100px' }}
        />*/}
              <div className="client-info">
                <i className="bi bi-quote"></i>
                <h5 className="client-name">{testimonial.name}</h5>
                <p className="client-designation">{testimonial.designation}</p>
                <p className="client-feedback">"{testimonial.text}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
