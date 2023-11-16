import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, todoSlice } from "../redux/slice/todoSlice";
import { useEffect, useState } from "react";
const { addTodo } = todoSlice.actions;
const Todo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todoList);
  const posts = useSelector((state) => state.todos.posts);
  const status = useSelector((state) => state.todos.status);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.length) {
      alert("Vui lòng nhập tên");
      return;
    }
    dispatch(addTodo(name));
    setName("");
  };
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên..."
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </form>
      <h2>Posts</h2>
      {status !== "idle" &&
        (status === "pending" ? (
          <h3>Loading...</h3>
        ) : (
          posts.map(({ id, title }) => <h3 key={id}>{title}</h3>)
        ))}
    </div>
  );
};

export default Todo;
