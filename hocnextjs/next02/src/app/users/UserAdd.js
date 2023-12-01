"use client";
import { mutate } from "swr";
import { userApi } from "./Users";
const UserAdd = () => {
  const postUser = async (data) => {
    const response = await fetch(userApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      mutate({ url: userApi });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = Object.fromEntries([...new FormData(e.target)]);
    postUser({ name });
    e.target.reset();
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Tên..." />
      <button>Thêm</button>
    </form>
  );
};

export default UserAdd;
