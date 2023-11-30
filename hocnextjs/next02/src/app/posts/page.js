import Link from "next/link";

const getPosts = async () => {
  const response = await fetch(`${process.env.SERVER_API}/posts`);
  return response.json();
};
const Posts = async () => {
  const postList = await getPosts();
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      {postList.map(({ id, title }) => (
        <div key={id}>
          <h3>{title}</h3>
          <Link href={`/posts/${id}`}>Chi tiết</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
