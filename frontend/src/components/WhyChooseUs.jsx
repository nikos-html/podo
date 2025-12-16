import React from 'react';
import { User, ShieldCheck, Award, Settings, Heart, Home } from 'lucide-react';
import './WhyChooseUs.css';
import { whyChooseUs } from '../mockData';

const iconMap = {
  User,
  ShieldCheck,
  Award,
  Settings,
  Heart,
  Home
};

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2">Dlaczego PodoNova?</h2>
          <p className="body-large section-subtitle">
            Wybierając nasz gabinet, otrzymujesz kompleksową opiekę podologiczną na najwyższym poziomie
          </p>
        </div>
        
        <div className="ai-grid why-grid">
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={item.id} className="why-card product-card">
                <div className="why-icon">
                  {IconComponent && <IconComponent size={32} color="var(--accent-text)" />}
                </div>
                <h3 className="heading-3 why-title">{item.title}</h3>
                <p className="body-medium why-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
