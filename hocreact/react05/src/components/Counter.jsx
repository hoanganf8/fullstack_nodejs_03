/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState } from "react";
// import Content from "./Content";
import { color } from "../libs/color";
import Button from "./Button";

const Counter = () => {
  console.log("re-render");
  const [count, setCount] = useState(0);
  // const countRef = useRef(0);
  // const a = { current: 0 };
  const handleIncrement = () => {
    setCount(count + 1);
    // countRef.current++;
    // a.current++;
    // console.log(countRef, a);
  };
  const inputRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    inputRef.current.focus(); //DOM
    console.log(buttonRef.current);
  }, []);
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Nhập từ khóa..." />
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <Button ref={buttonRef} />
      {/* <Content count={count} /> */}
    </div>
  );
};

export default color(Counter);

//--> Bài tập: Xây dựng Hook useContext2
/*
Hook useRef()
*/
