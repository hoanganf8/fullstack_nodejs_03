/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
const Button = (props, ref) => {
  return <button ref={ref}>Click me</button>;
};

export default React.forwardRef(Button);
