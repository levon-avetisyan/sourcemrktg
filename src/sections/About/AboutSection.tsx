import './AboutUsSection.scss';

const icons = [
  { name: 'people-fill', description: 'Teamwork & community' },
  { name: 'lightbulb-fill', description: 'Innovation & ideas' },
  { name: 'graph-up-arrow', description: 'Growth & success' },
  { name: 'award-fill', description: 'Achievement & recognition' },
];

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="mb-3 section-title">About Us</h2>
            <hr className="hr-break mx-0" />
            <p className="mb-4 subtitle fs-5p">
              At Source Marketing, we empower our employees by being the cornerstone of their
              professional and personal growth. We are committed to providing opportunities,
              resources, and support that enable our team members to gain the skills, knowledge, and
              financial success needed to achieve their individual and family goals. By fostering a
              culture of continuous learning and innovation, we strive to be the source of
              inspiration and success for our clients, our team, and our community.
            </p>
            <a href="#values" className="btn btn-rounded-border btn-light btn-lg">
              Our values
            </a>
          </div>
          <div className="col-md-6">
            <div className="row">
              {icons.map((icon, index) => (
                <div className="col-6 mb-4" key={index}>
                  <div className="about-icon-wrapper text-center p-4">
                    <i className={`bi bi-${icon.name}`}></i>
                    <p className="mt-3">{icon.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
