import React from 'react';
import './QuestionnaireForm.scss';

interface Question {
  label: string;
  name: 'vehicle' | 'understood'; // Restrict to valid keys
}

interface IProps {
  questions: Question[];
  responses: Record<string, string | null>;
  errorMessage: string;
  handleResponseChange: (name: 'vehicle' | 'understood', value: string) => void; // Match parent
}

const QuestionnaireForm: React.FC<IProps> = ({
  questions,
  responses,
  errorMessage,
  handleResponseChange,
}) => {
  return (
    <div className="questionnaire-form mx-auto p-4 p-sm-5 border rounded shadow-sm ">
      <h2 className="mb-3">We’d Love to Meet You!</h2>
      <p className="mb-4">
        Before scheduling your one-on-one interview, we kindly ask you to answer a couple of quick
        questions to help us understand your availability and fit for the role. It’ll only take a
        moment!
      </p>
      {questions.map(({ label, name }, index) => (
        <div className="mb-4" key={index}>
          <label className="form-label fw-bold mb-2">
            <span className="text-blue h2">{index + 1}. </span> {label}
          </label>
          <div className="form-check mb-2">
            <input
              id={name + 'Yes'}
              type="radio"
              name={name}
              value="yes"
              className="form-check-input"
              checked={responses[name] === 'yes'}
              onChange={(e) => handleResponseChange(name, e.target.value)}
            />
            <label htmlFor={name + 'Yes'} className="form-check-label">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              id={name + 'No'}
              type="radio"
              name={name}
              value="no"
              className="form-check-input"
              checked={responses[name] === 'no'}
              onChange={(e) => handleResponseChange(name, e.target.value)}
            />
            <label htmlFor={name + 'No'} className="form-check-label">
              No
            </label>
          </div>
        </div>
      ))}
      {errorMessage && <p className="text-red text-center text-error">{errorMessage}</p>}
    </div>
  );
};

export default QuestionnaireForm;
