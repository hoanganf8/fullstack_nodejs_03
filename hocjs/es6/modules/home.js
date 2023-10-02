//Export
/*
1. Export default -> Trong 1 file chỉ có 1
2. Export named -> Trong 1 file có thể có nhiều
*/

function getUsers() {
  return [
    {
      id: 1,
      name: "Hoàng An",
    },
    {
      id: 2,
      name: "Nguyễn Dương",
    },
  ];
}

export function getProducts() {
  return "Sản phẩm";
}

export const posts = ["Post 1", "Post 2", "Post 3"];

export const getPosts = () => posts;

export default getUsers;

// export { getProducts, posts };
