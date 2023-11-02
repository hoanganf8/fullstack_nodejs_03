import React, { useReducer } from "react";
import { reducer } from "./reducer";
const App = () => {
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    //Logic update state
    dispatch({
      type: "counter/increment",
      payload: 10,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default App;

//App => A => B => C => D

//-> Context API
