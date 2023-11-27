"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SearchForm = () => {
  const [form, setForm] = useState({
    status: "all",
    keywords: "",
  });
  const router = useRouter();
  const pathname = usePathname();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { status, keywords } = form;
    const url = pathname + "?" + new URLSearchParams({ status, keywords });
    router.push(url);
    e.target.reset();
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <select name="status" onChange={handleChange}>
        <option value="all">Tất cả trạng thái</option>
        <option value="active">Kích hoạt</option>
        <option value="inactive">Chưa kích hoạt</option>
      </select>
      <input
        type="search"
        name="keywords"
        placeholder="Từ khóa..."
        onChange={handleChange}
      />
      <button>Tìm kiếm</button>
    </form>
  );
};

export default SearchForm;
