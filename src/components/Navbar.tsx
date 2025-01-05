import Link from "next/link";

export const Navbar = () => {
    return (
      <div className="flex justify-end items-center space-x-4 mb-8">
        <Link href="/">about</Link>
        {/* <h1>about</h1> */}
        <span className="text-gray-500">/</span>
        <h1>projects</h1>
        <span className="text-gray-500">/</span>
        <Link href="/blogs">blogs</Link>
        {/* <h1>blog</h1> */}
      </div>
    );
  };
  