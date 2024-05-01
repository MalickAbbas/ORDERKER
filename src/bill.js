import React from 'react';
import './billes.css'; // Import CSS file for styling

const Bill = () => {
  return (
    <div className="container">
      <h1>Bill</h1>
      <div className="bill-item">
        <div className="item-name">Pizza</div>
        <div className="item-price">$12.00</div>
      </div>
      <div className="bill-item">
        <div className="item-name">Burger</div>
        <div className="item-price">$8.00</div>
      </div>
      <div className="bill-item">
        <div className="item-name">Salad</div>
        <div className="item-price">$6.00</div>
      </div>
      <div className="bill-item">
        <div className="item-name">Pasta</div>
        <div className="item-price">$10.00</div>
      </div>
      <div className="total-price">
        <span className="total-price-label">Total Price (incl. taxes):</span>
        <span className="total-price-value">$36.00</span>
      </div>
    </div>
  );
};

export default Bill;
