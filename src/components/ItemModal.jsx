import React, { useState, useEffect } from 'react';
import ImageCarousel from './ImageCarousel';

const ItemModal = ({ item, onClose }) => {
  const [isEnquiring, setIsEnquiring] = useState(false);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleEnquire = async () => {
    setIsEnquiring(true);
    
    // Simulate email sending delay
    setTimeout(() => {
      alert(`Enquiry sent successfully for "${item.name}"!\n\nAn email has been sent to admin@company.com with your interest in this item.`);
      setIsEnquiring(false);
    }, 1000);
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <button 
            className="modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <ImageCarousel images={item.additionalImages} />
          
          <div className="item-details">
            <h2>{item.name}</h2>
            <span className="item-type">{item.type}</span>
            <p>{item.description}</p>
            
            <button 
              className="btn btn-primary"
              onClick={handleEnquire}
              disabled={isEnquiring}
              style={{
                opacity: isEnquiring ? 0.7 : 1,
                cursor: isEnquiring ? 'not-allowed' : 'pointer'
              }}
            >
              {isEnquiring ? 'Sending Enquiry...' : 'Enquire'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;