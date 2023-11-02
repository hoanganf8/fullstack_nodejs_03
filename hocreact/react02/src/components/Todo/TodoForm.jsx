import React, { useState } from "react";

const TodoForm = ({ onGetName }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onGetName(name);
    setName("");
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name..."
        onChange={handleChange}
        value={name}
      />
    </form>
  );
};

export default TodoForm;
