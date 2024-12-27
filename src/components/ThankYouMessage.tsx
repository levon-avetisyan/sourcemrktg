import React from 'react';

const SalesRepScheduled: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    icon: {
      fontSize: '60px',
      color: '#95c623',
      marginBottom: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 700,
      color: '#343a40',
      marginBottom: '10px',
    },
    text: {
      fontSize: '16px',
      color: '#6c757d',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>
        <i className="bi bi-calendar-check"></i>
      </div>
      <h2 style={styles.title}>Your Meeting has been Scheduled</h2>
      <p style={styles.text}>
        Thank you for your appointment request. We will contact you shortly to confirm your request.
        Please call our office at (833) 501-3364 if you have any questions.
      </p>
    </div>
  );
};

export default SalesRepScheduled;
