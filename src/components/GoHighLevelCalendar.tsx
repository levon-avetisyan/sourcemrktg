import React, { useEffect } from 'react';

const GoHighLevelCalendar: React.FC = () => {
  useEffect(() => {
    // Dynamically load the external script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/2gWn989BxPPWKsooRXIz"
        style={{
          width: '100%',
          height: '600px',
          border: '1px solid #333',
          backgroundColor: '#121212',
          colorScheme: 'dark',
        }}
        scrolling="no"
        id="2gWn989BxPPWKsooRXIz_1734685448326"
        title="GoHighLevel Calendar"
      ></iframe>
    </div>
  );
};

export default GoHighLevelCalendar;
