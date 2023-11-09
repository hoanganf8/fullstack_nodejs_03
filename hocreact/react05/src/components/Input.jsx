import { useId } from "react";

/* eslint-disable react/prop-types */
const Input = ({ name, type = "text" }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input type={type} placeholder={name} id={id} />
    </div>
  );
};

export default Input;
