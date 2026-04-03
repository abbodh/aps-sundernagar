import React from 'react';

function ContactPage() {
  const mapSrc = 'https://maps.app.goo.gl/p9Jd6R5Fum6TpDFV6';

  return (
    <div className="content">
      <h2>Contact Us</h2>
      <p>Email: help@schoolmanagement.example</p>
      <p>Phone: +1 555 123 4567</p>
      <p>Address: 6JJ7+639, Unnamed Road, Patel Para, Raipur, Chhattisgarh 492001</p>
      <div className="map-wrapper">
        <iframe
          title="Adarsh Public School Location"
          src={mapSrc}
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

export default ContactPage;
