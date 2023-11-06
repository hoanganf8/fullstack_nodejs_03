/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { MyContext } from "../App";
const Counter = ({ step }) => {
  const context = useContext(MyContext);
  console.log(context);
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + +step);
  };
  const handleDecrement = () => {
    setCount(count - +step);
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
