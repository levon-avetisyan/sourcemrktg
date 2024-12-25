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
        <div className="steps py-5">
            <div className="container text-center">
                <h2 className="mb-4">How It Works</h2>
                <div className="row gy-4">
                    {steps.map((step, index) => (
                        <div className="col-md-4" key={index}>
                            <div className={`card h-100 border-0 shadow ${activeStep > index + 1 || (activeStep === 3 && hasCompletedBooking) ? 'completed' : ''} ${activeStep === index + 1 && !hasCompletedBooking ? 'active' : ''}`}>
                                <div className="card-body">
                                    <div className="icon mb-3">
                                        <i className={`bi ${step.icon} fs-1`}></i>
                                    </div>
                                    <h5 className="card-title">Step {index + 1}: {step.title}</h5>
                                    <p className="card-text">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Steps;
