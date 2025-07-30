import React, { useState } from 'react';
import './counter.css'; // Import the CSS file

function Counter() {
  const [count, setCount] = useState(0);
  
  // Determine the value class based on count
  const valueClass = `counter-value ${
    count > 0 ? 'positive' : count < 0 ? 'negative' : ''
  }`;

  return (
    <div className="counter-container">
      <h2 className="counter-title">Counter</h2>
      <div className={valueClass}>Count: {count}</div>
      <button 
        className="counter-button" 
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
      <button 
        className="counter-button" 
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
      <button 
        className="counter-button reset" 
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;