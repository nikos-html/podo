import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import './Hero.css';
import { contactInfo } from '../mockData';

const Hero = () => {
  const booksyUrl = contactInfo.booksyUrl;

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
            ))}
          </div>
          <span className="body-small">{contactInfo.rating}/5.0 • {contactInfo.reviewsCount} opinii</span>
        </div>
        
        <h1 className="hero-title heading-1">
          Profesjonalna podologia<br />
          <span className="hero-accent">Zdrowe i zadbane stopy</span>
        </h1>
        
        <p className="hero-subtitle body-large">
          Indywidualne podejście • Najwyższe standardy higieny • Doświadczenie<br />
          Gabinet w Deszcznie, obserwujący pacjentów z Gorzów Wielkopolski i okolic
        </p>
        
        <div className="hero-cta-group">
          <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary hero-cta-primary">
            Umów wizytę online
            <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </a>
          <button 
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Zobacz usługi
          </button>
        </div>
        
        <div className="hero-trust-indicators">
          <div className="trust-item">
            <div className="trust-number">10+</div>
            <div className="trust-label body-small">Lat doświadczenia</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">1000+</div>
            <div className="trust-label body-small">Zadowolonych pacjentów</div>
          </div>
          <div className="trust-item">
            <div className="trust-number">100%</div>
            <div className="trust-label body-small">Sterylności</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
