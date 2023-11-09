/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useImperativeHandle, useRef } from "react";
const Image = (props, ref) => {
  const imageRef = useRef();
  //Thông qua 1 bộ lọc -> Tạo lại ref
  useImperativeHandle(ref, () => {
    return {
      phongto: () => {
        imageRef.current.style.width = "300px";
      },
      thunho: () => {
        imageRef.current.style.width = "";
      },
    };
  });
  return (
    <div>
      <img ref={imageRef} src="https://picsum.photos/200" alt="" />
    </div>
  );
};

export default forwardRef(Image);
