import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    // setCount(count + 1);
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    //Không thể gọi hooks
    // setCount(count - 1);
    setCount((count) => count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
