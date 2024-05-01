import React, { useState } from 'react';
import './eMenue.css'; // Import CSS file for styling

const EMenu = () => {
  // State variables to store user answers
  const [budget, setBudget] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('');
  const [courses, setCourses] = useState([]);

  // Function to handle submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the answers in variables or perform any further processing/validation here
    console.log('Budget:', budget);
    console.log('Number of People:', numPeople);
    console.log('Dietary Preference:', dietaryPreference);
    console.log('Courses:', courses);
  };

  return (
    <div className="eMenu-container">
      <h1 className="eMenu-title">Welcome to eMenu</h1>
      <form onSubmit={handleSubmit} className="eMenu-form">
        {/* Question 1: Budget */}
        <div className="eMenu-question">
          <label htmlFor="budget" className="eMenu-label">What is your exact budget?</label>
          <input
            type="text"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="eMenu-input"
            required
          />
        </div>

        {/* Question 2: Number of People */}
        <div className="eMenu-question">
          <label htmlFor="numPeople" className="eMenu-label">How many people are you?</label>
          <input
            type="number"
            id="numPeople"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            className="eMenu-input"
            required
          />
        </div>

        {/* Question 3: Dietary Preference */}
        <div className="eMenu-question">
          <label className="eMenu-label">Vegetarian or Non-vegetarian?</label>
          <div className="eMenu-options">
            <label className="eMenu-option">
              <input
                type="radio"
                name="dietaryPreference"
                value="Vegetarian"
                checked={dietaryPreference === 'Vegetarian'}
                onChange={(e) => setDietaryPreference(e.target.value)}
                className="eMenu-radio"
              />
              Vegetarian
            </label>
            <label className="eMenu-option">
              <input
                type="radio"
                name="dietaryPreference"
                value="Non-vegetarian"
                checked={dietaryPreference === 'Non-vegetarian'}
                onChange={(e) => setDietaryPreference(e.target.value)}
                className="eMenu-radio"
              />
              Non-vegetarian
            </label>
          </div>
        </div>

        {/* Question 4: Courses */}
        <div className="eMenu-question">
          <label className="eMenu-label">What courses would you like?</label>
          <div className="eMenu-options">
            <label className="eMenu-option">
              <input
                type="checkbox"
                value="Starter"
                checked={courses.includes('Starter')}
                onChange={(e) =>
                  setCourses(
                    e.target.checked
                      ? [...courses, e.target.value]
                      : courses.filter((course) => course !== 'Starter')
                  )
                }
                className="eMenu-checkbox"
              />
              Starter
            </label>
            <label className="eMenu-option">
              <input
                type="checkbox"
                value="Main Course"
                checked={courses.includes('Main Course')}
                onChange={(e) =>
                  setCourses(
                    e.target.checked
                      ? [...courses, e.target.value]
                      : courses.filter((course) => course !== 'Main Course')
                  )
                }
                className="eMenu-checkbox"
              />
              Main Course
            </label>
            <label className="eMenu-option">
              <input
                type="checkbox"
                value="Dessert"
                checked={courses.includes('Dessert')}
                onChange={(e) =>
                  setCourses(
                    e.target.checked
                      ? [...courses, e.target.value]
                      : courses.filter((course) => course !== 'Dessert')
                  )
                }
                className="eMenu-checkbox"
              />
              Dessert
            </label>
            <label className="eMenu-option">
              <input
                type="checkbox"
                value="Snacks"
                checked={courses.includes('Snacks')}
                onChange={(e) =>
                  setCourses(
                    e.target.checked
                      ? [...courses, e.target.value]
                      : courses.filter((course) => course !== 'Snacks')
                  )
                }
                className="eMenu-checkbox"
              />
              Snacks
            </label>
          </div>
        </div>

        {/* Submit button */}
        <button type="submit" className="eMenu-submit">Submit</button>
      </form>
    </div>
  );
};

export default EMenu;
