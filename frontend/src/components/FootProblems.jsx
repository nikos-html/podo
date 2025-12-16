import React from 'react';
import { AlertCircle, AlertTriangle, Activity, Shield, Target, Heart } from 'lucide-react';
import './FootProblems.css';
import { footProblems, contactInfo } from '../mockData';

const iconMap = {
  AlertCircle,
  AlertTriangle,
  Activity,
  Shield,
  Target,
  Heart
};

const FootProblems = () => {
  const booksyUrl = contactInfo.booksyUrl;

  return (
    <section className="problems-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2">Najczęstsze problemy stóp</h2>
          <p className="body-large section-subtitle">
            Specjalizujemy się w leczeniu szerokiego zakresu schorzeni stóp
          </p>
        </div>
        
        <div className="problems-grid">
          {footProblems.map((problem) => {
            const IconComponent = iconMap[problem.icon];
            return (
              <div key={problem.id} className="problem-card">
                <div className="problem-icon-wrapper">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                <div className="problem-content">
                  <h3 className="heading-3 problem-title">{problem.title}</h3>
                  <p className="body-small problem-description">{problem.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="problems-cta">
          <p className="body-large">Masz problem ze stopami?</p>
          <a href={booksyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Skońsultuj się z podologiem
          </a>
        </div>
      </div>
    </section>
  );
};

export default FootProblems;
