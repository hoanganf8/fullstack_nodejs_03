"use client";
import useSWR from "swr";
export const userApi = `https://jsonplaceholder.typicode.com/users`;
const fetcher = ({ url, token }) => {
  // console.log(token);
  return fetch(url).then((response) => response.json());
};
const Users = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useSWR({ url: userApi }, fetcher, {
    // revalidateOnFocus: true,
    // refreshInterval: 2000,
    // revalidateOnReconnect: true,
    fallbackData: [],
  });
  console.log(users);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
  return (
    <div>
      {users.map(({ id, name }) => (
        <h3 key={id}>{name}</h3>
      ))}
    </div>
  );
};

export default Users;

/*
fetch() --> Data --> Update State (useEffect) --> Render JSX

useSWR có các tham số sau
- key
- fetcher --> Hàm trả về Promise fetch API
*/
