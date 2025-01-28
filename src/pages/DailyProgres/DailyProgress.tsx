import React from 'react';
import './DailyProgress.scss';
import DailyReportForm from '../../components/DailyReportForm/DailyReportForm.tsx';
import Navbar from '../../components/Navbar/Navbar.tsx';

const DailyProgress: React.FC = () => {
  return (
    <div className="page-daily-progress">
      <Navbar theme={'daily-progress-form'} />
      <section className="daily-progress">
        <h1 className="section-title">Daily Progress</h1>
        <p className="subtitle">Fill out the form below to submit your daily sales data</p>
        <DailyReportForm />
      </section>
    </div>
  );
};

export default DailyProgress;
