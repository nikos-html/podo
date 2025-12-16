import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import './Testimonials.css';
import { testimonials, contactInfo } from '../mockData';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-2">Opinie naszych pacjentów</h2>
          <div className="rating-summary">
            <div className="rating-stars-large">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
            <p className="body-large">
              <strong>{contactInfo.rating}/5.0</strong> na podstawie {contactInfo.reviewsCount} opinii
            </p>
          </div>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card product-card">
              <div className="testimonial-header">
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <div className="author-name body-medium">{testimonial.name}</div>
                    <div className="author-date body-small">{testimonial.date}</div>
                  </div>
                </div>
                {testimonial.verified && (
                  <div className="verified-badge">
                    <CheckCircle size={16} color="var(--accent-text)" />
                    <span className="caption">Zweryfikowany</span>
                  </div>
                )}
              </div>
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              
              <p className="testimonial-service body-small">{testimonial.service}</p>
              <p className="testimonial-comment body-medium">„{testimonial.comment}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
