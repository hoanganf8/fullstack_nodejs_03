import { MyContext } from "../App";
import { useContext } from "react";
const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(MyContext);
  return (
    <div>
      <button
        onClick={() => {
          toggleTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ToggleTheme;

/*
ToggleTheme => App => ShowCounter
*/
