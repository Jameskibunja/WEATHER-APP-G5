import React from "react";
import ActivityList from "./ActivityList";
import './App.css';
import Navigation from "./Navigation";
 import SavedActivity from './SavedActivity';
import Share from "./Share";
import Weather from './Weather'


function App() {
  return (
    <div className="App">
      <div className="Navigation">
       <Navigation />
      </div>
      <div className='grid'>
      <Weather />
      <SavedActivity />
      <ActivityList />
      <Share />

      </div>
      
    </div>
  );
}

export default App;