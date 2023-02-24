import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav-container">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Weather</a></li>
        <li><a href="#">Activities</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
