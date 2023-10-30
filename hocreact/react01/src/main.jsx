import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";
//React Render giao diện
const rootEl = document.querySelector("#root");

//Tạo Element từ React

// const h1 = React.createElement(
//   "h1",
//   {
//     className: "title",
//   },
//   "Học React không khó",
// );

// const h2 = React.createElement(
//   "h2",
//   {
//     className: "sub-title",
//     onClick: (e) => {
//       console.log("Hello F8");
//       e.target.style.color = "red";
//     },
//   },
//   React.createElement("span", {}, "Học React thật dễ"),
// );

// const li = [...Array(10).keys()].map((index) =>
//   React.createElement("li", {}, `Item ${index + 1}`),
// );
// console.log(li);
// const ul = React.createElement(
//   "ul",
//   {
//     className: "menu",
//   },
//   ...li,
// );

// const div = React.createElement(
//   "div",
//   {
//     id: "content",
//     className: "content",
//     "data-index": "123",
//   },
//   h1,
//   h2,
//   ul,
// );

//Render UI
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
