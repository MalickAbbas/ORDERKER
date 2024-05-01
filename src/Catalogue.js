import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Catalogue.css';

const Catalogue = () => {
    const navigate = useNavigate()
    const handleItemClick = (itemName) => {
    console.log(`Clicked on ${itemName}`);
    navigate(`/fooditem`)
    // You can add further functionality here, such as navigating to a specific item's page
  };

  return (
    <div className="catalogue">
      <div className="catalogue-row">
        <div className="catalogue-item" onClick={() => handleItemClick("Cold Dishes")}>
          <img src="/cold-dishes.jpeg" alt="Cold Dishes" />
          <div className="image-label">COLD DISHES</div>
        </div>
        <div className="catalogue-item" onClick={() => handleItemClick("Hot Dishes")}>
          <img src="/hot-dishes.jpg" alt="Hot Dishes" />
          <div className="image-label">HOT DISHES</div>
        </div>
        <div className="catalogue-item" onClick={() => handleItemClick("Teriyaki")}>
          <img src="/teriyaki.jpg" alt="Teriyaki" />
          <div className="image-label">TERIYAKI</div>
        </div>
      </div>
      <div className="catalogue-row">
        <div className="catalogue-item" onClick={() => handleItemClick("Omakase")}>
          <img src="/omakase.png" alt="Omakase" />
          <div className="image-label">OMAKASE</div>
        </div>
        <div className="catalogue-item" onClick={() => handleItemClick("Sashimi")}>
          <img src="/sashimi.jpg" alt="Sashimi" />
          <div className="image-label">SASHIMI</div>
        </div>
        <div className="catalogue-item" onClick={() => handleItemClick("Sushi Nigiri")}>
          <img src="/sushi-nigiri.jpg" alt="Sushi Nigiri" />
          <div className="image-label">SUSHI NIGIRI</div>
        </div>
      </div>
      <div className="catalogue-row">
        <div className="catalogue-item" onClick={() => handleItemClick("Sushi Rolls")}>
          <img src="/sushi-rolls.jpg" alt="Sushi Rolls" />
          <div className="image-label">SUSHI ROLLS</div>
        </div>
        <div className="catalogue-item" onClick={() => handleItemClick("Dessert")}>
          <img src="/desserts.jpg" alt="Dessert" />
          <div className="image-label">DESSERT</div>
        </div>
        <div className="catalogue-item" onClick={() => handleItemClick("Beverages")}>
          <img src="/beverages.jpg" alt="Beverages" />
          <div className="image-label">BEVERAGES</div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
