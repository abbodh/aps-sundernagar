import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-left">
          <p className="hero-pretitle">Welcome to</p>
          <h1>Adarsh Public School</h1>
          <p className="hero-subtitle">Discover, Learn & Grow Together!</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Enroll Now</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1597600214959-69a9831571ab?auto=format&fit=crop&w=900&q=80"
            alt="Children playing outdoors"
          />
        </div>
      </section>

      <section className="info-section">
        <h2>Welcome to Little Ex, Learn & Kindergarten!</h2>
        <p>
          Join us in a joyful learning adventure designed for kids to build
          confidence, creativity, and community. Our programs are crafted with
          experienced teachers and a playful curriculum that engages every child.
        </p>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Creative Play</h3>
            <p>Hands-on activities that spark imagination and critical thinking.</p>
          </div>
          <div className="feature-item">
            <h3>Safe Environment</h3>
            <p>Warm and caring spaces where children feel secure and supported.</p>
          </div>
          <div className="feature-item">
            <h3>Parent Involvement</h3>
            <p>Family-friendly program updates, workshops, and events.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
