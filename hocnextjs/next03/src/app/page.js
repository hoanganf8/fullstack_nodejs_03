"use client";
// import Demo from "@/components/Demo";
import Image from "next/image";
import Posts from "./components/Posts/Posts";
import Products from "./components/Products/Products";
import Demo2 from "@/components/Demo2";

// import Demo2 from "@/components/Demo2";
const Page = () => {
  return (
    <div>
      <Demo2 />
      {/* <h1 className="text-3xl font-bold underline rounded-md border-4 border-red-600 border-solid">
        Hello, Next.js!
      </h1>
      <Products />
      <Posts /> */}
      {/* <Image src="/next.svg" width="300" height="200" alt="Next" /> */}
      {/* <Image
        src="https://picsum.photos/500/300"
        width="300"
        height="200"
        alt="Next"
      /> */}
    </div>
  );
};

export default Page;
