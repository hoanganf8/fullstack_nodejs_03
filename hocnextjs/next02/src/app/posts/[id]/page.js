import Post from "./Post";

const getPost = async (id) => {
  const response = await fetch(`${process.env.SERVER_API}/posts/${id}`);
  return response.json();
};
const PostDetail = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div>
      <h1>{post.title}</h1>
      <Post post={post} />
    </div>
  );
};

export default PostDetail;
