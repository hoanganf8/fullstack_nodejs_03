import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions/counterActions";
import { useEffect } from "react";
import { fetchTodo } from "./redux/middlewares/fetchTodo";
const App = () => {
  const count = useSelector((state) => state.counter.count);
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  return (
    <div>
      <h2>Học Redux không khó</h2>
      <h2>Count: {count}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <h2>Todos List</h2>
      {todoList.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default App;

//Action Creator
//Hàm trả về 1 action

//Component --> Dispatch --> Middleware --> Reducer --> Update State --> Component
