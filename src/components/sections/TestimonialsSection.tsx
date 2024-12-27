import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TestimonialsSection.scss';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      designation: 'CEO, ExampleCorp',
      image: '',
      text: 'Source Marketing has been instrumental in our growth. Their expertise is unparalleled!',
    },
    {
      name: 'Jane Smith',
      designation: 'Marketing Head, TechSolutions',
      image: '',
      text: 'An amazing team to work with. Highly recommended!',
    },
    {
      name: 'Mike Johnson',
      designation: 'Freelance Developer',
      image: '',
      text: 'Their support and resources have been invaluable in my personal and professional journey.',
    },
    {
      name: 'Emily Davis',
      designation: 'Product Manager, Innovate Inc.',
      image: '',
      text: 'Working with Source Marketing has been a game changer for our product launch strategies!',
    },
    {
      name: 'Robert Brown',
      designation: 'Entrepreneur',
      image: '',
      text: 'Their insights and strategies have helped take my business to the next level. I couldn’t be more thankful!',
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="text-center mb-4 section-title mb-5">What Our Clients Say</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={false}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="review-wrapper">
                {/*<img*/}
                {/*  src={testimonial.image}*/}
                {/*  alt={testimonial.name}*/}
                {/*  className="rounded-circle mb-3 bg-dark"*/}
                {/*  style={{ width: '100px', height: '100px' }}*/}
                {/*/>*/}
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
      </div>
    </section>
  );
};

export default Testimonials;
