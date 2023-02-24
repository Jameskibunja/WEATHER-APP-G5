import React from "react";
import { useState } from "react";

function SavedActivity (){

 const [activities, setActivityList] = useState([
  { id: 1, name: 'Go for a hike', weatherType: 'Clear' },
  { id: 2, name: 'Go to the beach', weatherType: 'Clear' },
  { id: 3, name: 'Go skiing', weatherType: 'Snow' },
  { id: 4, name: 'Go ice skating', weatherType: 'Snow' },
  { id: 5, name: 'Go to the movies', weatherType: 'Rain' },
  { id: 6, name: 'Play board games', weatherType: 'Rain' },
]);



  //  useEffect(() => {
  //   setActivityList(activities);
  // }, []);
  

  const deleteById = id => {
    setActivityList(oldValues => {
      return oldValues.filter(activity => activity.id !== id)
    })
  }
    return(
        <>
        <div>
        <h2>Your Saved Activites</h2>
        <ul className="activites">
        {activities.map((activity)=>(
        <li key={activity.id}>
          <span>{activity.name}</span>
          <button onClick={() => deleteById(activity.id)} className="remove">Remove</button>
          </li>
          ))}
        </ul>
        </div>
       
        
        </>
    )
}

export default SavedActivity;