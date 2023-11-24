"use client";
import Link from "next/link";
import "@/assets/style.scss";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="menu">
        <li className={clsx(pathname === "/" && "active")}>
          <Link href="/">Trang chủ</Link>
        </li>
        <li className={clsx(pathname === "/about" && "active")}>
          <Link href="/about">Giới thiệu</Link>
        </li>
        <li className={clsx(pathname === "/san-pham" && "active")}>
          <Link href="/san-pham">Sản phẩm</Link>
        </li>
        <li className={clsx(pathname === "/tin-tuc" && "active")}>
          <Link href="/tin-tuc">Tin tức</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
