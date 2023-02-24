import React, { useState } from "react";

function ActivityList() {
  const [activities, setActivities] = useState([]);

  const handleAddActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  const handleRemoveActivity = (index) => {
    const newActivities = [...activities];
    newActivities.splice(index, 1);
    setActivities(newActivities);
  };

  return (
    <div>
      <h2>Activity List</h2>
      <ul>
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
      </form>
    </div>
  );
}

export default ActivityList;
