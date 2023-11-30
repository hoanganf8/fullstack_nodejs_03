"use client";
import React, { useState } from "react";

const Post = ({ post }) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <p>{post.body}</p>}
      <button onClick={() => setShow(!show)}>
        {show ? "Thu gọn" : "Thêm"}
      </button>
    </>
  );
};

export default Post;
