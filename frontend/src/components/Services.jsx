import React, { useState } from 'react';
import { Clock, DollarSign, Users, ArrowRight } from 'lucide-react';
import './Services.css';
import { services, contactInfo } from '../mockData';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const booksyUrl = contactInfo.booksyUrl;

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2">Nasze usługi</h2>
          <p className="body-large section-subtitle">
            Oferujemy kompleksową opiekę podologiczną - od profilaktyki po leczenie specjalistyczne
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card product-card ${selectedService === service.id ? 'selected' : ''}`}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <div className="service-header">
                <h3 className="heading-3 service-name">{service.name}</h3>
                <div className="service-meta">
                  <span className="service-price">{service.price}</span>
                  <span className="service-duration body-small">
                    <Clock size={16} /> {service.duration}
                  </span>
                </div>
              </div>
              
              <p className="body-medium service-description">{service.description}</p>
              
              {selectedService === service.id && (
                <div className="service-details">
                  <div className="service-detail-section">
                    <div className="detail-label body-small">
                      <Users size={16} /> Dla kogo
                    </div>
                    <p className="body-small">{service.forWho}</p>
                  </div>
                  
                  <div className="service-detail-section">
                    <div className="detail-label body-small">
                      <DollarSign size={16} /> Korzyści
                    </div>
                    <ul className="benefits-list">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="body-small">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              
              <a 
                href={booksyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary service-cta"
                onClick={(e) => e.stopPropagation()}
              >
                Zarezerwuj zabieg
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
