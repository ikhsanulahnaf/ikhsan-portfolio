import React from 'react';

function Contact({ content }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-title-wrapper">
        <h2 className="section-title">{content.title}</h2>
      </div>

      <p className="contact-text">{content.description}</p>

      <div className="contact-channels">
        <a href={`mailto:${content.email}`} className="contact-card">
          <div className="contact-icon">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <span className="contact-card-title">Email</span>
          <span className="contact-card-value">{content.email}</span>
        </a>

        <a href={content.whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-card">
          <div className="contact-icon">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </div>
          <span className="contact-card-title">WhatsApp</span>
          <span className="contact-card-value">{content.phone}</span>
        </a>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <a href={`mailto:${content.email}`} className="btn btn-primary">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
          Send Message
        </a>
      </div>
    </section>
  );
}

export default Contact;
