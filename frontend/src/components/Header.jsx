import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const booksyUrl = "https://booksy.com/pl-pl/304698_podonova_podologia_17956_deszczno";

  return (
    <>
      <header className="nav-header">
        <div className="nav-container">
          <div className="nav-logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_podonova/artifacts/9ai7iger_image.png" 
              alt="PodoNova Logo" 
              className="logo-image"
            />
          </div>
          
          <button 
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <button onClick={() => scrollToSection('home')} className="nav-link">Strona główna</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">O gabinecie</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Usługi</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Cennik</button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link">Galeria</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Kontakt</button>
            <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary nav-cta">
              Umów wizytę
            </a>
          </nav>
        </div>
      </header>
      {mobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />}
    </>
  );
};

export default Header;
