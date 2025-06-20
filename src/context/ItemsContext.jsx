import React, { createContext, useContext, useState } from 'react';

const ItemsContext = createContext();

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemsProvider');
  }
  return context;
};

export const ItemsProvider = ({ children }) => {
  // Static initial items
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Classic White T-Shirt",
      type: "Shirt",
      description: "A comfortable and versatile white cotton t-shirt perfect for everyday wear. Made from 100% organic cotton with a soft feel and durable construction.",
      coverImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 2,
      name: "Denim Jeans",
      type: "Pant",
      description: "Classic blue denim jeans with a modern fit. Features premium denim fabric, reinforced stitching, and a comfortable stretch for all-day wear.",
      coverImage: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      name: "Running Sneakers",
      type: "Shoes",
      description: "High-performance running sneakers designed for comfort and durability. Features advanced cushioning technology and breathable mesh upper.",
      coverImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      name: "Yoga Mat",
      type: "Sports Gear",
      description: "Premium non-slip yoga mat made from eco-friendly materials. Perfect for yoga, pilates, and other fitness activities. Provides excellent grip and cushioning.",
      coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=600&fit=crop"
      ]
    }
  ]);

  const addItem = (newItem) => {
    const item = {
      ...newItem,
      id: Date.now(), // Simple ID generation
    };
    setItems(prevItems => [...prevItems, item]);
    return item;
  };

  // Mock API call function
  const sendToAPI = async (itemData) => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Item sent to API:', itemData);
        resolve({ success: true, id: Date.now() });
      }, 1000);
    });
  };

  // Mock email sending function
  const sendEmail = async (itemData) => {
    // Simulate email sending
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Email sent for item:', itemData.name);
        console.log('Email sent to: admin@company.com');
        resolve({ success: true });
      }, 500);
    });
  };

  const value = {
    items,
    addItem,
    sendToAPI,
    sendEmail
  };

  return (
    <ItemsContext.Provider value={value}>
      {children}
    </ItemsContext.Provider>
  );
};