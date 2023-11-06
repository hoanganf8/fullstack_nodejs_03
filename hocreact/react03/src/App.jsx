import "./assets/style.css";
import React, { useState } from "react";
import ShowCounter from "./components/ShowCounter";
import ToggleTheme from "./components/ToggleTheme";
export const MyContext = React.createContext();
const App = () => {
  const step1 = 10;
  const step2 = 5;
  const [theme, setTheme] = useState("light");
  const toggleTheme = (theme) => {
    setTheme(theme);
  };
  const data = {
    message: "Hello F8",
    theme,
    toggleTheme,
  };

  return (
    <MyContext.Provider value={data}>
      <ToggleTheme />
      <ShowCounter step1={step1} step2={step2} />
    </MyContext.Provider>
  );
};

export default App;

/*
Đối tượng Context: React.createContext
Provider -> Gửi dữ liệu
Consumer -> Nhận dữ liệu (useContext)

App => ShowCounter => Counter
*/
