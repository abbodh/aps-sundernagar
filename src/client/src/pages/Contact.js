import React from 'react';

function Contact() {
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.455987809196!2d81.6851363!3d21.2528359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dfd81f5fbb01%3A0x5b28a2b8290bf50b!2s6JJ7%2B639%2C%20Unnamed%20Road%2C%20Patel%20Para%2C%20Raipur%2C%20Chhattisgarh%20492001!5e0!3m2!1sen!2sin!4v1700000000000';
  const mapDirectUrl = 'https://maps.app.goo.gl/p9Jd6R5Fum6TpDFV6';

  return (
    <div className="content">
      <h2>Contact Us</h2>
      <p>Email: help@schoolmanagement.example</p>
      <p>Phone: +1 555 123 4567</p>
      <p>
        Address: 6JJ7+639, Unnamed Road, Patel Para, Raipur, Chhattisgarh 492001{' '}
        <a href={mapDirectUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#2d8fe8', fontWeight: 600 }}>
          (View on Google Maps)
        </a>
      </p>
      <div className="map-wrapper">
        <iframe
          title="Adarsh Public School Location"
          src={mapEmbedUrl}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
