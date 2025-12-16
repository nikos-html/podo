import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './About.css';
import { contactInfo } from '../mockData';

const About = () => {
  const booksyUrl = contactInfo.booksyUrl;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="heading-2">O gabinecie PodoNova</h2>
            <p className="body-large about-intro">
              PodoNova to nowoczesny gabinet podologiczny w Deszcznie, który łączy profesjonalizm, doświadczenie i indywidualne podejście do każdego pacjenta.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <CheckCircle2 size={24} color="var(--accent-text)" className="feature-icon" />
                <div>
                  <h3 className="heading-3">Nowoczesny, sterylny gabinet</h3>
                  <p className="body-medium">Wyposażony w profesjonalny sprzęt podologiczny najnowszej generacji oraz space space dla komfortu pacjenta.</p>
                </div>
              </div>
              
              <div className="about-feature">
                <CheckCircle2 size={24} color="var(--accent-text)" className="feature-icon" />
                <div>
                  <h3 className="heading-3">Indywidualne podejście</h3>
                  <p className="body-medium">Każdy pacjent otrzymuje spersonalizowaną opiekę dopasowaną do jego indywidualnych potrzeb i problemu.</p>
                </div>
              </div>
              
              <div className="about-feature">
                <CheckCircle2 size={24} color="var(--accent-text)" className="feature-icon" />
                <div>
                  <h3 className="heading-3">Najwyższe standardy higieny</h3>
                  <p className="body-medium">Pełna sterylizacja narzędzi w autoklawach, jednorazowe akcesoria, przestrzeganie restrykcyjnych norm sanitarnych.</p>
                </div>
              </div>
              
              <div className="about-feature">
                <CheckCircle2 size={24} color="var(--accent-text)" className="feature-icon" />
                <div>
                  <h3 className="heading-3">Doświadczenie i wiedza</h3>
                  <p className="body-medium">Profesjonalny podolog z wieloletnim doświadczeniem w leczeniu szerokiego spektrum schorzeni stóp.</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Umów pierwszą konsultację
              </a>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src="https://d375139ucebi94.cloudfront.net/region2/pl/304698/biz_photo/a0c057c3974649238daf41ee9e97f8-podonova-biz-photo-32b4558046544c5dac2939873a79e6-booksy.jpeg" 
              alt="Gabinet PodoNova" 
              className="clinic-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
