import { useEffect, useState } from 'react';
import './QuestionnaireSection.scss';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.tsx';
import Steps from '../../components/Steps/Steps.tsx';
import QuestionnaireForm from '../../components/QuestionnaireForm/QuestionnaireForm.tsx';
import SalesRepCalendar from '../../components/Calendar/SalesRepCalendar.tsx';
import ThankYouMessage from '../../components/ThankYouMessage/ThankYouMessage.tsx';

const QuestionnaireSection = () => {
  const [activeStep, setActiveStep] = useState<number>(() => {
    const storedStep = sessionStorage.getItem('activeStep');
    return storedStep ? parseInt(storedStep, 10) || 1 : 1;
  });
  const [responses, setResponses] = useState<{
    vehicle: string | null;
    understood: string | null;
  }>({
    vehicle: null,
    understood: null,
  });
  const [hasVideoEnded, setHasVideoEnded] = useState(false);
  const [hasCompletedBooking, setHasCompletedBooking] = useState(
    sessionStorage.getItem('hasCompletedBooking') === 'true'
  );
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    sessionStorage.setItem('hasCompletedBooking', hasCompletedBooking.toString());
  }, [hasCompletedBooking]);

  const handleNextStep = () => {
    if (activeStep === 1) {
      sessionStorage.setItem('activeStep', '2');
      setActiveStep(2);
    } else if (activeStep === 2) {
      if (responses.vehicle === 'yes' && responses.understood === 'yes') {
        sessionStorage.setItem('activeStep', '3');
        setActiveStep(3);
      } else {
        setErrorMessage('You need to answer "Yes" to both questions to proceed.');
      }
    }
  };

  const handleResponseChange = (name: 'vehicle' | 'understood', value: string) => {
    setResponses((prev) => ({ ...prev, [name]: value }));
    setErrorMessage(''); // Clear error on change
  };

  // const handleResetSteps = () => {
  //   setErrorMessage('');
  //   setHasVideoEnded(false);
  //   setActiveStep(1);
  //   sessionStorage.removeItem('activeStep');
  //   sessionStorage.removeItem('hasCompletedBooking');
  // };

  return (
    <section id="questionnaire" className="questionnaire">
      <div className="container">
        <h2 className="mb-3 text-center section-title">Join Our Dynamic Team!</h2>
        <hr className="hr-break" />
        <p className="mb-4 mx-auto text-center subtitle">
          We're looking for motivated individuals to join our team as independent sales
          professionals. If you're goal-oriented, have a reliable vehicle, and are excited about a
          1099 commission-based opportunity, we'd love to hear from you! Answer the quick
          questionnaire below to see if you're a great fit for this exciting role.
        </p>

        <Steps activeStep={activeStep} hasCompletedBooking={hasCompletedBooking} />

        {activeStep === 1 && <VideoPlayer setHasVideoEnded={setHasVideoEnded} />}

        {activeStep === 2 && (
          <QuestionnaireForm
            questions={[
              { label: 'Do you have a functioning vehicle?', name: 'vehicle' },
              {
                label: 'Do you understand the position is 1099 and 100% commission?',
                name: 'understood',
              },
            ]}
            responses={responses}
            errorMessage={errorMessage}
            handleResponseChange={handleResponseChange}
          />
        )}

        {activeStep === 3 &&
          (hasCompletedBooking ? (
            <ThankYouMessage />
          ) : (
            <SalesRepCalendar setHasCompletedBooking={setHasCompletedBooking} />
          ))}

        {activeStep !== 3 && (
          <div className="steps-action d-flex align-items-center justify-content-center w-100 mt-5">
            <button
              type="button"
              onClick={handleNextStep}
              disabled={activeStep === 1 && !hasVideoEnded}
              className="btn btn-rounded-border btn-dark btn-lg"
            >
              {activeStep === 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuestionnaireSection;
