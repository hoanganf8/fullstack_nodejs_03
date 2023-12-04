"use client";
import { useState } from "react";

//Client Component

// import Demo2 from "./Demo2";

const Demo = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Demo F8</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && children}
    </div>
  );
};

export default Demo;
