import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter">
        <button onClick={handleDecrement}>Decrement</button>
        <span>Count: {count}</span>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
}

export default App;
