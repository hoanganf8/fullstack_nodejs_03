import { useEffect, useRef } from "react";
import Image from "./Image";
const Control = () => {
  const imageRef = useRef();
  useEffect(() => {
    console.dir(imageRef.current);
    // imageRef.current.remove();
  }, []);
  const handleZoomIn = () => {
    imageRef.current.phongto();
  };
  const handleZoomOut = () => {
    imageRef.current.thunho();
  };
  return (
    <div>
      <Image ref={imageRef} />
      <button onClick={handleZoomIn}>ZoomIn</button>
      <button onClick={handleZoomOut}>ZoomOut</button>
    </div>
  );
};

export default Control;

/*
Xây dựng 1 ref chỉ cho phép component cha sử dụng các phương thức, thuộc tính của DOM mà nó cho phép
*/
