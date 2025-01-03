const MapEmbed = () => {
  return (
    <div style={{ width: '100%', height: '700px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0210189796295!2d144.96324781558417!3d-37.813627979751535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727d0c8a8115d3!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1690736357959!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
