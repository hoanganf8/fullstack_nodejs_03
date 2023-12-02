"use client";
import { useState } from "react";
import useSWR from "swr";
export const userApi = `https://jsonplaceholder.typicode.com/users`;
const fetcher = ({ url, token }) => {
  // console.log(token);
  return fetch(url).then((response) => response.json());
};
const Users = () => {
  // const {
  //   data: users,
  //   isLoading,
  //   error,
  // } = useSWR({ url: userApi }, fetcher, {
  //   // revalidateOnFocus: true,
  //   // refreshInterval: 2000,
  //   // revalidateOnReconnect: true,
  //   fallbackData: [],
  // });
  // console.log(users);
  // if (isLoading) {
  //   return <h3>Loading...</h3>;
  // }
  // if (error) {
  //   return <h3>Đã có lỗi xảy ra</h3>;
  // }
  const { data: provinces } = useSWR(
    { url: "http://localhost:3001/api/provinces" },
    fetcher,
    {
      fallbackData: {},
    },
  );
  const [provinceId, setProvinceId] = useState(0);
  const handleChangeProvince = (e) => {
    setProvinceId(e.target.value);
  };

  const { data: district } = useSWR(
    { url: `http://localhost:3001/api/district?province_id=${provinceId}` },
    fetcher,
    {
      fallbackData: {},
    },
  );

  return (
    <div>
      {/* {users.map(({ id, name }) => (
        <h3 key={id}>{name}</h3>
      ))} */}
      <select onChange={handleChangeProvince}>
        <option value="">Chọn Tỉnh/Thành phố</option>
        {provinces.data?.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <select>
        <option value="">Chọn Quận/Huyện</option>
        {district.data?.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
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
