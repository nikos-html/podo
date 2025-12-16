import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import './Contact.css';
import { contactInfo } from '../mockData';

const Contact = () => {
  const booksyUrl = contactInfo.booksyUrl;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2">Kontakt i lokalizacja</h2>
          <p className="body-large section-subtitle">
            Skontaktuj się z nami lub umów wizytę online
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card product-card">
              <div className="contact-icon">
                <MapPin size={28} color="var(--accent-text)" />
              </div>
              <div className="contact-details">
                <h3 className="heading-3">Adres</h3>
                <p className="body-medium">
                  {contactInfo.address}<br />
                  {contactInfo.postalCode} {contactInfo.city}<br />
                  {contactInfo.region}
                </p>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                  Otwórz w Mapach Google
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            
            <div className="contact-card product-card">
              <div className="contact-icon">
                <Clock size={28} color="var(--accent-text)" />
              </div>
              <div className="contact-details">
                <h3 className="heading-3">Godziny otwarcia</h3>
                {contactInfo.hours.map((schedule, index) => (
                  <div key={index} className="hours-row">
                    <span className="body-medium hours-day">{schedule.day}</span>
                    <span className="body-medium hours-time">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="contact-cta-card product-card">
              <h3 className="heading-3">Zarezerwuj wizytę</h3>
              <p className="body-medium">
                Rezerwacja online dostępna 24/7 przez platformę Booksy
              </p>
              <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-full">
                Umów wizytę przez Booksy
                <ExternalLink size={18} style={{ marginLeft: '8px' }} />
              </a>
            </div>
          </div>
          
          <div className="contact-map">
            <iframe
              title="Mapa lokalizacji PodoNova"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2400.123!2d${contactInfo.coordinates.lng}!3d${contactInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDM5JzE3LjAiTiAxNcKwMTEnMDUuMCJF!5e0!3m2!1spl!2spl!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
