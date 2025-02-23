import React from 'react';
import './Report.scss';
import Navbar from '../../components/Navbar/Navbar.tsx';
import ReportForm from '../../components/ReportForm/ReportForm.tsx';

const Report: React.FC = () => {
  return (
    <div className="page-daily-progress">
      <Navbar theme={'daily-progress-form'} />
      <section className="daily-progress">
        <h1 className="section-title">Daily Progress</h1>
        <p className="subtitle">Fill out the form below to submit your daily sales data</p>
        <ReportForm />
      </section>
    </div>
  );
};

export default Report;
