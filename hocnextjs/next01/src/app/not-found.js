import Link from "next/link";
import Image from "next/image";
import notFoundImage from "@/assets/images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <h2>Lạc đường rồi. Vui lòng quay lại trang chủ</h2>
      <Image
        src={notFoundImage}
        alt="404 not found"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <Link href={"/"}>Về trang chủ</Link>
    </div>
  );
};

export default NotFound;
