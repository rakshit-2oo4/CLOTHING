import React, { useState } from 'react';
import { useItems } from '../context/ItemsContext';
import ItemModal from './ItemModal';

const ViewItems = () => {
  const { items } = useItems();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">View Items</h1>
      
      {items.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#718096' }}>
          <p>No items found. Add some items to get started!</p>
        </div>
      ) : (
        <div className="items-grid">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="item-card"
              onClick={() => handleItemClick(item)}
            >
              <img 
                src={item.coverImage} 
                alt={item.name}
                className="item-image"
              />
              <div className="item-content">
                <h3 className="item-name">{item.name}</h3>
                <span className="item-type">{item.type}</span>
                <p className="item-description">
                  {item.description.length > 100 
                    ? `${item.description.substring(0, 100)}...` 
                    : item.description
                  }
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedItem && (
        <ItemModal 
          item={selectedItem} 
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ViewItems;