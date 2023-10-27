import React from "react";

const App = () => {
  return (
    <div className="content" id="content">
      <h1 className="content">Học React không khó</h1>
      <h2>Hello F8</h2>
      <ul className="menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
        <li>Item 9</li>
        <li>Item 10</li>
      </ul>
      <button
        onClick={() => {
          console.log("Xin chào F8");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
