"use client";
import { useRef } from "react";
import { handleAddTodo } from "./action";
const TodoAdd2 = () => {
  const formRef = useRef();
  return (
    <form
      action={async (formData) => {
        await handleAddTodo(formData);
        formRef.current.reset();
      }}
      ref={formRef}
    >
      <input type="text" name="name" placeholder="Tên công việc..." />
      <button>Thêm</button>
    </form>
  );
};

export default TodoAdd2;
