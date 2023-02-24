import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import data from './data.json';function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }  return (
    <div>
      <header>
        <nav>
          <button className="menuButton" onClick={toggleDrawer}>Menu</button>
          <h1>Weather App</h1>
        </nav>
      </header>      <aside className={drawerOpen ? 'drawerOpen' : ''}>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={toggleDrawer}>Home</Link>
            </li>
            <li>
              <Link to="/weather-activities" onClick={toggleDrawer}>Weather Activities</Link>
            </li>
          </ul>
        </nav>
      </aside>      <main>
        <Link to="/" className="backButton">Back</Link>        <div className="content">
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/weather-activities">
            <WeatherActivitiesScreen data={data} />
          </Route>
        </div>
      </main>
    </div>
  );
}function HomeScreen() {
  return (
    <div>
      <h2>Welcome to the Weather App</h2>
      <p>Click the menu button to get started</p>
    </div>
  );
}function WeatherActivitiesScreen({ data }) {
  return (
    <div>
      <h2>Weather Activities</h2>
      <ul>
        {data.map((activity) => (
          <li key={activity.id}>
            <Link to={`/weather-activities/${activity.id}`}>{activity.title}</Link>
          </li>
        ))}
      </ul>
      <Route path="/weather-activities/:id">
        <WeatherActivityDetails data={data} />
      </Route>
    </div>
  );
}function WeatherActivityDetails({ data }) {
  const id = parseInt(useRouteMatch().params.id);
  const activity = data.find((activity) => activity.id === id);  if (!activity) {
    return <div>Activity not found</div>;
  }  return (
    <div>
      <h3>{activity.title}</h3>
      <p>{activity.description}</p>
      <p>Level: {activity.level}</p>
      <p>Time Required: {activity.timeRequired}</p>
      <p>What to Bring: {activity.whatToBring}</p>
    </div>
  );
}export default App;