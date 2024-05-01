import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './styles.css'; // Import CSS file for styling

const Cart = () => {
    const navigate = useNavigate()
    const handleCheckout = () => {
    console.log(`Clicked on`);
    navigate(`/bills`)
    // You can add further functionality here, such as navigating to a specific item's page
  };
  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="cart-item">
        <img src="/pizza.jpg" alt="Item Image" />
        <div className="cart-item-details">
          <div className="cart-item-name">Pizza</div>
          <div className="cart-item-price">$12.00</div>
          <div className="cart-item-quantity">Quantity: 2</div>
        </div>
      </div>

      <div className="cart-item">
        <img src="/burger.jpg" alt="Item Image" />
        <div className="cart-item-details">
          <div className="cart-item-name">Burger</div>
          <div className="cart-item-price">$8.00</div>
          <div className="cart-item-quantity">Quantity: 1</div>
        </div>
      </div>

      <div className="cart-item">
        <img src="/salad.jpg" alt="Item Image" />
        <div className="cart-item-details">
          <div className="cart-item-name">Salad</div>
          <div className="cart-item-price">$6.00</div>
          <div className="cart-item-quantity">Quantity: 3</div>
        </div>
      </div>

      <div className="cart-item">
        <img src="/pasta.jpg" alt="Item Image" />
        <div className="cart-item-details">
          <div className="cart-item-name">Pasta</div>
          <div className="cart-item-price">$10.00</div>
          <div className="cart-item-quantity">Quantity: 1</div>
          
        </div>
      </div>

      <div className="total-price">
        <span className="total-price-label">Total Price (incl. taxes):</span>
        <span className="total-price-value">$56.00</span>
      </div>

      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;
