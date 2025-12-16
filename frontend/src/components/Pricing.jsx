import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';
import { services, contactInfo } from '../mockData';

const Pricing = () => {
  const booksyUrl = contactInfo.booksyUrl;

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2">Cennik usług</h2>
          <p className="body-large section-subtitle">
            Przejrzyste ceny usług podologicznych. Ostateczna cena może zależeć od stanu stóp.
          </p>
        </div>
        
        <div className="pricing-table-wrapper">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Usługa</th>
                <th>Czas trwania</th>
                <th>Cena</th>
                <th>Rezerwacja</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.id} className="pricing-row">
                  <td className="service-name-cell">
                    <div className="service-name-wrapper">
                      <span className="service-name-text">{service.name}</span>
                      <span className="service-desc-text body-small">{service.description}</span>
                    </div>
                  </td>
                  <td className="duration-cell body-medium">{service.duration}</td>
                  <td className="price-cell">
                    <span className="price-text">{service.price}</span>
                  </td>
                  <td className="action-cell">
                    <a 
                      href={booksyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-secondary btn-small"
                    >
                      Umów
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="pricing-notes">
          <div className="note-card product-card">
            <Check size={24} color="var(--accent-text)" />
            <div>
              <h3 className="heading-3">Wizyty domowe</h3>
              <p className="body-medium">Możliwość wykonania zabiegu w domu pacjenta. Dodatkowa opłata za dojazd: 100 zł</p>
            </div>
          </div>
          
          <div className="note-card product-card">
            <Check size={24} color="var(--accent-text)" />
            <div>
              <h3 className="heading-3">Konsultacja</h3>
              <p className="body-medium">Przy umówionym zabiegu konsultacja podologiczna jest bezpłatna</p>
            </div>
          </div>
          
          <div className="note-card product-card">
            <Check size={24} color="var(--accent-text)" />
            <div>
              <h3 className="heading-3">Indywidualna wycena</h3>
              <p className="body-medium">Ostateczna cena zależy od stanu stóp i zakresu niezbędnych zabiegów</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
