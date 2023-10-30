import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const title = "Học React rất dễ lú";
  const status = false;
  const handleClick = (e) => {
    console.log(e);
  };
  const handleClick2 = (text) => {
    console.log(text);
  };
  const isLogin = false;

  const users = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
  ];
  const UserItem = () => {
    return <h3>User Item</h3>;
  };
  return (
    <div className="content" id="content">
      <Header />
      {users.map(({ id, name }, index) => (
        // <h3 key={id}>{name}</h3>
        <UserItem key={id} />
      ))}
      {/* {isLogin ? (
        <div>
          <h2>Chào mừng bạn quay trở lại</h2>
          <h3>Hello F8</h3>
        </div>
      ) : (
        <h3>Vui lòng đăng nhập để tiếp tục</h3>
      )} */}
      {/* {isLogin && <h2>Chào mừng bạn quay trở lại</h2>}
      <h1 className="content">Học React không khó</h1>
      <h2 className={`title${status ? " success" : ""}`}>{title}</h2>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClick2("F8");
        }}
      >
        Click me 2
      </button> */}
      <Footer></Footer>
    </div>
  );
};

export default App;
