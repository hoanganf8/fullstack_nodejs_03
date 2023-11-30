"use client";
import { useState } from "react";
import { todoApi } from "./page";
import { useRouter } from "next/navigation";
const TodoAdd = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(todoApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (response.ok) {
      console.log("Thêm thành công");
      router.refresh();
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Tên công việc..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button>Thêm</button>
    </form>
  );
};

export default TodoAdd;
