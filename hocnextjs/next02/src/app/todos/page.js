// import TodoAdd from "./TodoAdd";
import TodoAdd2 from "./TodoAdd2";

export const todoApi = `http://localhost:3005/todos`;
const getTodos = async () => {
  const response = await fetch(todoApi, {
    next: {
      tags: ["todo_list"],
    },
  });
  return response.json();
};
const TodoPage = async () => {
  const todoList = await getTodos();
  return (
    <div>
      <h1>Todo App</h1>
      {todoList.map(({ id, name }) => (
        <h4 key={id}>{name}</h4>
      ))}
      {/* <TodoAdd /> */}
      <TodoAdd2 />
    </div>
  );
};

export default TodoPage;

/*
Revalidation chủ động
- revalidationPath
- revalidationTag
--> Chỉ hoạt động trong server actions, router handlers
*/
