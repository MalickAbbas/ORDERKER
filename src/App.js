import React, { useState } from 'react';
import Navbar from './Navbar';
import Catalogue from './Catalogue';
import FoodItemsPage from './FoodItemsPage';
import Cart from './cart';
import Bill from './bill';
import EMenu from './eMenu';
import Search from './Search';
import ItemDetails from './ItemDetails';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const App = () => {
  const [showCatalogue, setShowCatalogue] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Hot Dish"); // Assuming selectedCategory is managed here
 

  const handleGuestLogin = () => {
    setShowCatalogue(true);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/fooditem" element={<FoodItemsPage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/bills" element={<Bill/>} />
          <Route path="/emenu" element={<EMenu/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/itemdetails/:name" element={<ItemDetails/>} />
          

          <Route path="/" element={showCatalogue ? <Catalogue /> : <div className="content">
            <img src="/orderker.jpeg" alt="OrderKar Logo" className="logo" />
            <button className="guest-login-btn" onClick={handleGuestLogin}>
              GUEST LOGIN
            </button>
          </div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
