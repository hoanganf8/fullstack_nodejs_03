import { useState, useTransition } from "react";
import students from "./data.json";

const Students = () => {
  const [keyword, setKeyword] = useState("");
  const [pending, handleTranslate] = useTransition();
  const handleSearch = (e) => {
    handleTranslate(() => {
      setKeyword(e.target.value);
    });
  };
  return (
    <div>
      <input type="search" placeholder="Từ khóa..." onChange={handleSearch} />
      <h2>Danh sách sinh viên</h2>
      {pending && <h3>Loading...</h3>}
      {students.map(({ id, fullName }) => {
        const position = fullName.toLowerCase().indexOf(keyword.toLowerCase());
        // console.log(position);
        if (keyword.length && position !== -1) {
          console.log(position);
          return (
            <h4 key={id}>
              {fullName.slice(0, position)}
              <span style={{ background: "yellow" }}>
                {fullName.slice(position, position + keyword.length)}
              </span>
              {fullName.slice(position + keyword.length)}
            </h4>
          );
        }
        return <h4 key={id}>{fullName}</h4>;
      })}
    </div>
  );
};

export default Students;
