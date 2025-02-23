import React, { useEffect, useState } from 'react';
import './DailyReportForm.scss';
const DailyReportForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the external script for form embedding
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const formId = '8qRV1Pdhoy0GHdQ9Plin';
  const src = `https://api.leadconnectorhq.com/widget/form/${formId}`;

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <iframe
        src={src}
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Daily DashboardSalesSection Report (DashboardSalesSection reps) - Jeff input."
        data-height="619"
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title="Daily DashboardSalesSection Report (DashboardSalesSection reps) - Jeff input."
        onLoad={() => setIsLoading(false)} // Set loading to false when iframe loads
      />
    </div>
  );
};

export default DailyReportForm;
