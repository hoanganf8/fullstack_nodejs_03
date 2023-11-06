import { useSelector } from "../core/hook";
const TodoList = () => {
  const { todo } = useSelector();
  console.log(todo);
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
};

export default TodoList;
