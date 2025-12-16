import React from 'react';
import { MapPin, ExternalLink, Heart } from 'lucide-react';
import './Footer.css';
import { contactInfo } from '../mockData';

const Footer = () => {
  const booksyUrl = contactInfo.booksyUrl;
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-grid">
          <div className="footer-section footer-about">
            <img 
              src="https://customer-assets.emergentagent.com/job_podonova/artifacts/9ai7iger_image.png" 
              alt="PodoNova Logo" 
              className="footer-logo"
            />
            <p className="body-medium footer-description">
              Profesjonalny gabinet podologiczny w Deszcznie. Kompleksowa opieka nad zdrowiem stóp.
            </p>
            <div className="footer-location">
              <MapPin size={20} color="var(--accent-text)" />
              <span className="body-small">
                {contactInfo.address}, {contactInfo.postalCode} {contactInfo.city}
              </span>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Nawigacja</h3>
            <ul className="footer-links">
              <li>
                <button onClick={() => scrollToSection('home')} className="footer-link">Strona główna</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="footer-link">O gabinecie</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="footer-link">Usługi</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="footer-link">Cennik</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="footer-link">Galeria</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="footer-link">Kontakt</button>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Usługi</h3>
            <ul className="footer-links">
              <li className="body-small">Konsultacja podologiczna</li>
              <li className="body-small">Podstawowy zabieg podologiczny</li>
              <li className="body-small">Leczniczy zabieg podologiczny</li>
              <li className="body-small">Pedicure SPA</li>
              <li className="body-small">Usuwanie modzeli i odcisków</li>
              <li className="body-small">Leczenie wrastających paznokci</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Rezerwacja</h3>
            <p className="body-small footer-booking-text">
              Umów wizytę online 24/7 przez platformę Booksy
            </p>
            <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary btn-footer">
              Zarezerwuj wizytę
              <ExternalLink size={16} style={{ marginLeft: '8px' }} />
            </a>
            <div className="footer-booksy-info">
              <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                Zobacz profil na Booksy
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="body-small footer-copyright">
              © {currentYear} PodoNova - Gabinet Podologiczny. Wszystkie prawa zastrzeżone.
            </p>
            <p className="body-small footer-love">
              Stworzone z <Heart size={14} fill="var(--accent-text)" color="var(--accent-text)" /> dla zdrowia Twoich stóp
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
