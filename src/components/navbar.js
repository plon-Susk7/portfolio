import React from 'react';

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="mx-auto my-5 container">
        <div className="flex justify-between items-center px-4 md:px-8 xl:px-0">
          <a href="/" className="heading text-3xl font-bold text-red-500">Priyash</a>
          <div className="flex items-center">
            <a href="/projects" className="heading2 text-2xl px-8 hover:text-red-500 hover:text-underline">projects</a>
            <a href="/" className="heading2 text-2xl px-8 hover:text-red-500 hover:text-underline">about</a>
            <a href="#" className="heading2 text-2xl px-8 hover:text-red-500 hover:text-underline">blog</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
