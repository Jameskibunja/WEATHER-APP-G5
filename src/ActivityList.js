import React, { useState } from "react";
import './App.css';

function ActivityList() {
  // const [activities, setActivities] = useState([]);

  // const handleAddActivity = (activity) => {
  //   setActivities([...activities, activity]);
  // };

  // const handleRemoveActivity = (index) => {
  //   const newActivities = [...activities];
  //   newActivities.splice(index, 1);
  //   setActivities(newActivities);
  // };

  const [activitiess, setActivityList] = useState([
    { id: 1, name: 'Go for a hike   ', weatherType: 'Clear' },
    { id: 2, name: 'Go to the beach  ', weatherType: 'Clear' },
    
    { id: 3, name: 'Go ice skating   ', weatherType: 'Snow' },
    { id: 4, name: 'Go to the movies   ', weatherType: 'Rain' }
  ]);


  
  const deleteById = id => {
    setActivityList(oldValues => {
      return oldValues.filter(activity => activity.id !== id);
    });
  };

  return (
    <div className="share-container">
      <h2>Activity List in your Area</h2>
      <ul className="activities">
          {activitiess.map(activity => (
            <li key={activity.id}>
              <span>{activity.name}</span>
              <button onClick={() => deleteById(activity.id)} className="remove">Remove</button>
            </li>
          ))}
        </ul>
      {/* <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity}
            <button onClick={() => handleRemoveActivity(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => {
          e.preventDefault();
          const input = e.target.elements.activity;
          handleAddActivity(input.value);
          input.value = '';
      }}>
        <label htmlFor="activity">Add Activity:</label>
        <input type="text" name="activity" />
        <button type="submit">Add</button>
      </form> */}
    </div>
  );
}

export default ActivityList;