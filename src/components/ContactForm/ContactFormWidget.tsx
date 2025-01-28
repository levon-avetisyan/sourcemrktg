import React, { useEffect } from 'react';

const ContactFormWidget: React.FC = () => {
  useEffect(() => {
    // Dynamically load the script to ensure it gets executed
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script if component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/BJqXPXuW7bV4k6p3DKql"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '3px',
      }}
      id="inline-BJqXPXuW7bV4k6p3DKql"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="SourceMRKTG Website Contact Form"
      data-height="915"
      data-layout-iframe-id="inline-BJqXPXuW7bV4k6p3DKql"
      data-form-id="BJqXPXuW7bV4k6p3DKql"
      title="SourceMRKTG Website Contact Form"
    ></iframe>
  );
};

export default ContactFormWidget;
