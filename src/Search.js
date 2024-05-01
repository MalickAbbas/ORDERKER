import React, { useState } from 'react';
import Papa from 'papaparse';
import './ItemSearch.css'; // Import CSS file for styling

const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    Papa.parse('/food.csv', {
      download: true,
      header: true,
      complete: (result) => {
        const foundItem = result.data.find((item) =>
          item.name.toLowerCase().includes(searchPhrase.toLowerCase())
        );
        if (foundItem) {
          setSearchResult(foundItem);
          setErrorMessage('');
        } else {
          setSearchResult(null);
          setErrorMessage('Item not found.');
        }
      },
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <h1 className="search-header">Search Food Item</h1>
      <div className="search-input-container">
        <input
          type="text"
          value={searchPhrase}
          onChange={(e) => setSearchPhrase(e.target.value)}
          onKeyPress={handleKeyPress}
          className="search-input"
          placeholder="Enter food item name"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {searchResult && (
        <div className="search-result-container">
          <h2>{searchResult.name}</h2>
          <p>Ingredients: {searchResult.ingredients}</p>
          <p>Diet: {searchResult.diet}</p>
          <p>Preparation Time: {searchResult.prep_time} mins</p>
          <p>Cook Time: {searchResult.cook_time} mins</p>
          <p>Flavor Profile: {searchResult.flavor_profile}</p>
          <p>Course: {searchResult.course}</p>
          <p>Price: {searchResult.Price}</p>
          <p>No Of Peoples Can Eat: {searchResult['No Of Peoples Can Eat']}</p>
          <img src={searchResult.Images} alt={searchResult.name} className="food-image" />
        </div>
      )}
    </div>
  );
};

export default Search;
