import React, { useEffect, useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    setUsers([...users, { email, password }]);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //   useEffect(() => {
  //     console.log("First");
  //     return () => {
  //       console.log("Cleanup");
  //     };
  //   }, []);
  useEffect(() => {
    console.log("Hello F8");
    return () => {
      console.log("Cleanup");
    };
  }, [users]);
  console.log("re-render");

  //   useEffect(() => {
  //     console.log("ComponentDidMount");
  //     return () => {
  //       console.log("ComponentWillUnmount");
  //     };
  //   }, []);

  //   useEffect(() => {
  //     console.log("2. Component Re-render");
  //   });
  //   useEffect(() => {
  //     console.log("Hello F8");
  //   }, [form.email]);
  //   const [todo, setTodo] = useState([]);
  //   const getTodo = async () => {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  //     const todo = await response.json();
  //     setTodo(todo);
  //   };

  //   useEffect(() => {
  //     getTodo();
  //     console.log("Call API");
  //     return () => {
  //       console.log("Cleanup");
  //     };
  //   }, []);
  //   console.log("re-render");

  return (
    <div>
      {/* <h2>Todo List</h2>
      {todo.map(({ title, id }) => (
        <h3 key={id}>{title}</h3>
      ))} */}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Email.."
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Password.."
            name="password"
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
      <hr />
      {users.map(({ email, password }, index) => (
        <div key={index}>
          <h3>{email}</h3>
          <h3>{password}</h3>
        </div>
      ))}
    </div>
  );
};

export default Login;
