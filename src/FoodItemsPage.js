import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Menu.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

// Menu component
const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    Papa.parse('/food.csv', {
      download: true,
      header: true,
      complete: (result) => {
        setMenuItems(result.data);
      }
    });
  }, []);

  // Function to handle click on image container
  const handleItemClick = (imageUrl) => {
    console.log('Image clicked:', imageUrl);
  
    
    
  };

  return (
    <div className="menu-container">
      <h1 className="menu-header">Restaurant Menu</h1>
      <div className="menu">
        {menuItems.map((item, index) => (
          <Link key={index} className="menu-item link" to={`/itemdetails/${item.name}`}>
            <img className="item-image" src={item.Images} alt={item.name} />
            <div className="item-details">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-price">PKR {item.Price}</p>
              <p className="item-ingredients">{item.ingredients}</p>
              <p className="item-cook-time">Cook Time: {item.cook_time} mins</p>
            
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
