import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import ViewItems from './components/ViewItems';
import AddItems from './components/AddItems';
import { ItemsProvider } from './context/ItemsContext';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <Link 
            to="/view-items" 
            className={`nav-link ${location.pathname === '/view-items' ? 'active' : ''}`}
          >
            View Items
          </Link>
        </li>
        <li>
          <Link 
            to="/add-items" 
            className={`nav-link ${location.pathname === '/add-items' ? 'active' : ''}`}
          >
            Add Items
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <ItemsProvider>
      <Router>
        <div className="container">
          <Navigation />
          <Routes>
            <Route path="/" element={<ViewItems />} />
            <Route path="/view-items" element={<ViewItems />} />
            <Route path="/add-items" element={<AddItems />} />
          </Routes>
        </div>
      </Router>
    </ItemsProvider>
  );
}

export default App;