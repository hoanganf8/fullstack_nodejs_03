"use client";
import { useRouter } from "next/navigation";
const Button = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/auth/register");
      }}
    >
      Đăng ký tài khoản
    </button>
  );
};

export default Button;
