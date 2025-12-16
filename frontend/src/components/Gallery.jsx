import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Gallery.css';
import { galleryImages } from '../mockData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-2">Galeria</h2>
            <p className="body-large section-subtitle">
              Zobacz nasz nowoczesny gabinet i efekty naszej pracy
            </p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`Gabinet PodoNova - zdjęcie ${index + 1}`} className="gallery-image" />
                <div className="gallery-overlay">
                  <span className="body-medium">Kliknij aby powiększyć</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <img src={selectedImage} alt="Powiększony obraz" className="lightbox-image" />
        </div>
      )}
    </>
  );
};

export default Gallery;
