import React from 'react';
import './Steps.scss';

interface IProps {
  activeStep: number;
  hasCompletedBooking: boolean;
}

const Steps: React.FC<IProps> = ({ activeStep, hasCompletedBooking }) => {
  const steps = [
    {
      title: 'Watch the Video',
      description: 'Learn everything you need to know by watching our introductory video.',
      icon: 'bi-play-circle',
    },
    {
      title: 'Answer the Questions',
      description: 'Provide us with key information by answering a few simple questions.',
      icon: 'bi-question-circle',
    },
    {
      title: 'Schedule a Meeting',
      description: 'Book a convenient time to discuss your needs with our team.',
      icon: 'bi-calendar-check',
    },
  ];

  return (
    <div className="steps py-5 text-center">
      <h2 className="mb-4">How It Works</h2>
      <div className="row gy-4">
        {steps.map((step, index) => {
          const isCompleted = activeStep > index + 1 || (activeStep === 3 && hasCompletedBooking);

          const isActive = activeStep === index + 1 && !hasCompletedBooking;

          const cardClass = `card h-100 ${
            isCompleted ? 'completed' : ''
          } ${isActive ? 'active' : ''}`;

          return (
            <div className="col-md-4" key={index}>
              <div className={cardClass}>
                {isCompleted && <i className="bi bi-check-circle-fill"></i>}
                <div className="card-body">
                  <div className="icon mb-1">
                    <i className={`bi ${step.icon}`}></i>
                  </div>
                  <h5 className="card-title step-number">Step {index + 1}</h5>
                  <h5 className="card-title">{step.title}</h5>
                  <p className="card-text">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
