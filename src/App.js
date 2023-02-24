import React from "react";
import ActivityList from "./ActivityList";
import './App.css';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Navigation from './Navigation'
import Weather from './Weather'


function App() {
  return (
    <div className="App">
      <div className="Navigation">
        <Navigation />
      </div>
      <div className='grid'>
      <Weather />
      <Component2 />
      <Component3 />
      <Component4 />
      <ActivityList />

      </div>
      
    </div>
  );
}

export default App;