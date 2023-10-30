import React from "react";
import Products from "./components/Products";

const App = () => {
  const attributes = {
    attrName: "Thuộc tính",
    attrValue: "Giá trị",
  };
  const handleGetData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Products
        name="Sản phẩm 1"
        price="12000"
        {...attributes}
        onGetData={handleGetData}
      />
    </div>
  );
};

export default App;

/*
Props là tham số của hàm trong component
Props sẽ trả về 1 object
Props dùng để truyền dữ liệu từ Component cha sang Component con
Không thể thay đổi props trong 1 component

Render Props
*/
