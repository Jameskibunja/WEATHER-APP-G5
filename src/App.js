import React from "react";
import ActivityList from "./ActivityList";
import './App.css';
 import SavedActivity from './SavedActivity';
// import Component3 from './Component3';
// import Component4 from './Component4';
// import NavBar from "./NavBar"
import Weather from './Weather'


function App() {
  return (
    <div className="App">
      <div className="Navigation">
        {/* <NavBar /> */}
      </div>
      <div className='grid'>
      <Weather />
      <SavedActivity />
      {/* <Component2 />
      <Component4 /> */}
      <ActivityList />

      </div>
      
    </div>
  );
}

export default App;