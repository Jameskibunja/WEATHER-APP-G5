import React, { useState, useEffect } from 'react';
import './Clock.css';


function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Clock">
      
      <span>Welcome!</span>
      <p> The current time is: {time}</p>
      
    </div>
  );
}

export default Clock;