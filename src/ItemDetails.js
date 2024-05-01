import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Papa from 'papaparse';
import './details.css'

const ItemDetails = () => {
  const { name } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/food.csv');
        const csvData = await response.text();
        const parsedData = Papa.parse(csvData, { header: true });
        const details = parsedData.data.find(item => item.name === name);
        setItemDetails(details);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <div className="item-details-container">
    <h1 className="item-details-title">Item Details</h1>
    {itemDetails ? (
      <div className="item-details">
        <div className="item-details-info">
          <h2 className="item-details-name">{itemDetails.name}</h2>
          <p className="item-details-price">Price: {itemDetails.Price}</p>
          <p className="item-details-ingredients">Ingredients: {itemDetails.ingredients}</p>
          <p className="item-details-diet">Diet: {itemDetails.diet}</p>
          <p className="item-details-prep-time">Preparation Time: {itemDetails.prep_time} mins</p>
          <p className="item-details-cook-time">Cook Time: {itemDetails.cook_time} mins</p>
          <p className="item-details-flavor-profile">Flavor Profile: {itemDetails.flavor_profile}</p>
          <p className="item-details-course">Course: {itemDetails.course}</p>
          <p className="item-details-no-of-people">Number of People Can Eat: {itemDetails['No Of Peoples Can Eat']}</p>
        </div>
        <div className="item-details-image-container">
          <img className="item-details-image" src={itemDetails.Images} alt={itemDetails.name} />
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};

export default ItemDetails;
