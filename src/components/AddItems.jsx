import React, { useState } from 'react';
import { useItems } from '../context/ItemsContext';

const AddItems = () => {
  const { addItem, sendToAPI, sendEmail } = useItems();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    additionalImages: ['', '']
  });

  const itemTypes = [
    'Shirt',
    'Pant',
    'Shoes',
    'Sports Gear',
    'Accessories',
    'Outerwear',
    'Underwear',
    'Socks'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (index, value) => {
    setFormData(prev => ({
      ...prev,
      additionalImages: prev.additionalImages.map((img, i) =>
        i === index ? value : img
      )
    }));
  };

  const addImageField = () => {
    setFormData(prev => ({
      ...prev,
      additionalImages: [...prev.additionalImages, '']
    }));
  };

  const removeImageField = (index) => {
    if (formData.additionalImages.length > 1) {
      setFormData(prev => ({
        ...prev,
        additionalImages: prev.additionalImages.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.type || !formData.description || !formData.coverImage) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Filter out empty additional images
      const filteredImages = formData.additionalImages.filter(img => img.trim() !== '');

      const itemData = {
        ...formData,
        additionalImages: filteredImages.length > 0 ? [formData.coverImage, ...filteredImages] : [formData.coverImage]
      };

      // Add item to state
      const newItem = addItem(itemData);

      // Bonus features: API call and email sending
      await Promise.all([
        sendToAPI(itemData),
        sendEmail(itemData)
      ]);

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: '',
        type: '',
        description: '',
        coverImage: '',
        additionalImages: ['', '']
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error adding item:', error);
      alert('An error occurred while adding the item. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSampleImageUrl = (type) => {
    const sampleUrls = {
      'Shirt': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      'Pant': 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      'Shoes': 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      'Sports Gear': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
      'Accessories': 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop',
      'Outerwear': 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
      'Underwear': 'https://images.unsplash.com/photo-1581497395235-0b8d37ac3c5f?w=400&h=400&fit=crop',
      'Socks': 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=400&fit=crop'
    };
    return sampleUrls[type] || '';
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Add New Item</h1>

      {showSuccess && (
        <div className="success-message">
          Item successfully added!
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Item Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter item name..."
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type" className="form-label">
            Item Type *
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="form-select"
            required>
            <option value="">Select item type...</option>
            {itemTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
            {formData.type && (
              <small style={{ color: '#718096', fontSize: '14px' }}>
                💡 Tip: You can use this sample image URL: {getSampleImageUrl(formData.type)}
              </small>
            )}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Item Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="form-textarea"
            placeholder="Enter detailed description of the item..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="coverImage" className="form-label">
            Cover Image URL *
          </label>
          <input
            type="url"
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleInputChange}
            className="form-input"
            placeholder="https://example.com/image.jpg"
            required
          />
          {formData.coverImage && (
            <div style={{ marginTop: '10px' }}>
              <img
                src={formData.coverImage}
                alt="Cover preview"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  border: '2px solid #e2e8f0'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="form-label">
            Additional Images
          </label>
          {formData.additionalImages.map((image, index) => (
            <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <input
                type="url"
                value={image}
                onChange={(e) => handleImageChange(index, e.target.value)}
                className="form-input"
                placeholder={`Additional image ${index + 1} URL...`}
                style={{ flex: 1 }}
              />
              {formData.additionalImages.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeImageField(index)}
                  className="btn btn-secondary"
                  style={{ padding: '8px 12px' }}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="btn btn-secondary"
            style={{ marginTop: '10px' }}
          >
            + Add Another Image
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
            style={{
              minWidth: '200px',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? 'Adding Item...' : 'Add Item'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;