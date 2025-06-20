# Items Manager

A React application for managing items with two main pages: View Items and Add Items.

## Features

### Core Features
- **View Items Page**: Display all items in a grid layout with item name and cover image
- **Add Items Page**: Form to add new items with the following fields:
  - Item Name
  - Item Type (dropdown with predefined options)
  - Item Description
  - Item Cover Image (URL)
  - Item Additional Images (multiple URLs)
- **Success Message**: Shows "Item successfully added" when an item is added
- **Modal/Lightbox**: Clicking on any item opens a detailed view with:
  - Image carousel showing all item images
  - Complete item details
  - Enquire button

### Features
- **API Integration**: Simulated API calls when adding items
- **Email Notifications**: Simulated email sending when:
  - Adding a new item
  - Clicking the "Enquire" button

## Technology Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **CSS3** - Styling with modern features
- **Context API** - State management

## Installation & Setup

1. **Clone or download the project files**

2. **Install dependencies**
   npm install

3. **Start the development server**
   npm run dev

4. **Open your browser and navigate to**
   http://localhost:5173

## Usage

### Adding Items
1. Navigate to the "Add Items" page
2. Fill in all required fields:
   - Item Name
   - Item Type (select from dropdown)
   - Item Description
   - Cover Image URL
   - Additional Images (optional)
3. Click "Add Item" button
4. Success message will appear confirming the item was added

### Viewing Items
1. Navigate to the "View Items" page
2. Browse through the grid of items
3. Click on any item to open the detailed modal
4. Use the image carousel to view all item images
5. Click "Enquire" to send an enquiry (simulated)

## Sample Image URLs

For testing purposes, you can use these sample image URLs:

- **Shirts**: `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop`
- **Pants**: `https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop`
- **Shoes**: `https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop`
- **Sports Gear**: `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop`

## Features Implemented

✅ **Required Features:**
- Two pages: "View Items" and "Add Items"
- Form with all required fields
- Success message on item addition
- Item display with name and cover image
- Modal/lightbox with item details
- Image carousel
- Enquire button functionality

✅ **Extra Features:**
- API call simulation when adding items
- Email notification simulation
- Responsive design
- Modern UI with animations
- Image preview in add form
- Dynamic additional image fields
- Keyboard navigation (Escape to close modal)

## Design Features

- **Modern UI**: Clean, professional design with gradients and shadows
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **User Experience**: Loading states, error handling, and feedback messages

## Build for Production
npm run build

The build files will be generated in the `dist` folder.

## Notes

- The application uses in-memory storage, so data will be lost on page refresh
- API calls and email sending are simulated with console logging
- Images are loaded from external URLs (Unsplash)
- The application includes sample data for demonstration purposes
