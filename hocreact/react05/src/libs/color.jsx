//Higher Order Component --> Thay đổi màu chữ ngẫu nhiên
export const color = (ParentComponent) => {
  //Tạo 1 component mới --> closure
  const component = (props) => {
    return (
      <div className="color">
        <ParentComponent {...props} />
      </div>
    );
  };

  return component;
};

//Gọi: color(App)
/*
Tạo ra 1 hàm nhận vào 1 component -> Trả về 1 hàm con. Trong hàm đó sẽ trả về component ban đầu

--> Ôn lại kiến thức closure
*/
