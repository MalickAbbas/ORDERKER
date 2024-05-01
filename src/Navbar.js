import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import {
  faSearch,
  faBars,
  faShoppingCart,
  faReceipt,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';



const Navbar = () => {

  const navigate = useNavigate()
  
  return (
    <div className="navbar">
      <div className="nav-icon" onClick={() => navigate('/search')}>
        <FontAwesomeIcon icon={faSearch} /> Search
      </div>
      <div className="nav-icon" onClick={() => navigate(`/fooditem`)}>
        <FontAwesomeIcon icon={faBars} /> Menu
      </div>
      <div className="nav-icon" onClick={() => navigate('/cart')}>
        <FontAwesomeIcon icon={faShoppingCart} /> Cart
      </div>
      <div className="nav-icon" onClick={() => navigate('/bills')}>
        <FontAwesomeIcon icon={faReceipt} /> Bill
      </div>
      <div className="nav-icon" onClick={() => navigate('/emenu')}>
        <FontAwesomeIcon icon={faBook} /> E-Menu
      </div>
    </div>
  );
};

export default Navbar;
