/* eslint-disable react/prop-types */
import Counter from "./Counter";
import { MyContext } from "../App";
import { useContext } from "react";
const ShowCounter = ({ step1, step2 }) => {
  const { theme } = useContext(MyContext);
  return (
    <div className={`theme-${theme}`}>
      <Counter step={step1} />
      <Counter step={step2} />
    </div>
  );
};

export default ShowCounter;
