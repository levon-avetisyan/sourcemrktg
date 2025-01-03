import './ValuesSection.scss';
import Stones from '../../assets/images/values/value-1.png';
import Carp from '../../assets/images/values/value-2.png';
import Shell from '../../assets/images/values/value-3.png';
import Swing from '../../assets/images/values/value-4.png';

const ValuesSection = () => {
  const values = [
    {
      icon: Stones,
      title: 'Smooth the Stone',
      description:
        '“smooth the stone” represents the power of consistency. Just as a stone is polished by the steady flow of water, we achieve mastery and excellence through repeated, persistent effort over time, no matter the challenges we face.',
    },
    {
      icon: Carp,
      title: 'Kill the Carp',
      description:
        '“kill the carp” stands for eliminating negativity and toxic behaviors that harm our environment, culture, and those around us. Just like carp can disrupt and damage ecosystems, negativity can hinder growth, collaboration, and success. By “killing the carp”, we commit to fostering positivity, support, and a thriving environment for everyone.',
    },
    {
      icon: Shell,
      title: 'Shed the Shell',
      description:
        '“shed the shell” represents the importance of continuous growth and transformation. Just like a lobster must shed its original shell to grow, we embrace change, step out of our comfort zones, and continually strive to improve ourselves and our organization. Growth requires letting go of the original to make room for the new.',
    },
    {
      icon: Swing,
      title: 'Swing',
      description:
        '“swing” represents the power of teamwork and unity. Just like rowers achieve their best when they move in perfect rhythm, we work together in harmony, aligning our efforts to accomplish more than we could individually. When we’re in sync, we succeed as a team.',
    },
  ];

  return (
    <section id="values" className="values" aria-label="Our Values Section">
      <div className="container text-center">
        <h2 className="section-title text-white">Our Values</h2>
        <hr className="hr-break" />
        <p className="subtitle">Guiding Principles That Shape Our Journey to Excellence</p>
        <div className="row">
          {values.map((value, index) => (
            <div key={index} className="col-lg-6 col-xl-3 mb-5 mb-xl-0">
              <div className="value-card">
                <h5 className="mb-4">{value.title}</h5>
                <div className="img-wrapper mb-4">
                  <img src={value.icon} alt={`Icon representing ${value.title}`} />
                </div>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
