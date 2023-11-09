// import { useContext } from "react";
import { MyContext } from "../App";
import { useContext2 } from "../libs/hook";
const HelloWorld = () => {
  //   const context = useContext(MyContext);
  //   console.log(context);
  const context = useContext2(MyContext);
  console.log(context);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default HelloWorld;

//Context:
//1. Đối tượng context
//2. Provider
//3. Consumer
