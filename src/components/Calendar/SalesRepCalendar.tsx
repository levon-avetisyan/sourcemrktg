import React, { useEffect } from 'react';
import './SalesRepCalendar.scss';

interface IProps {
  setHasCompletedBooking: (hasCompletedBooking: boolean) => void;
}

const SalesRepCalendar: React.FC<IProps> = ({ setHasCompletedBooking }) => {
  useEffect(() => {
    // Function to handle incoming messages
    const handleMessage = (event: MessageEvent) => {
      const isTrustedOrigin = event.origin === 'https://api.leadconnectorhq.com';
      const isBookingComplete = event.data?.[0] === 'msgsndr-booking-complete';

      if (isTrustedOrigin && isBookingComplete) {
        setHasCompletedBooking(true);
      }
    };

    // Load external script dynamically
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/embed.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);

      return script;
    };

    const script = loadScript();
    window.addEventListener('message', handleMessage);

    // Cleanup on component unmount
    return () => {
      if (script.parentElement) {
        script.parentElement.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
    };
  }, [setHasCompletedBooking]);

  return (
    <div className="calendar-container">
      <h2>Schedule a Meeting</h2>
      <p>Select a convenient time to meet with our representative.</p>
      <iframe
        className="calendar-iframe"
        src="https://api.leadconnectorhq.com/widget/booking/BlWMky4bBl76lsw1xxLW"
        scrolling="no"
        id="msgsndr-calendar"
        title="Index Representative Calendar"
      ></iframe>
    </div>
  );
};

export default SalesRepCalendar;
