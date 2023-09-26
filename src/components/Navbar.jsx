import React, { useState } from "react";

function Navbar({toggleDark}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 w-full bg-white z-10 dark:bg-slate-900">
      <div className="container py-5 flex justify-between items-center mx-auto">
        <div className="flex items-center gap-2 cursor-pointer">
          <img className="w-8" src="/assets/images/logo.png" alt="" />
          <span className="text-2xl font-bold text-indigo-900 dark:text-white">Salar.CV</span>
        </div>
        <ul className="hidden md:flex space-x-8 dark:text-white text-gray-600 font-bold text-sm uppercase">
          <li className="hover:bg-gray-100 hover:rounded-md p-1 dark:hover:bg-indigo-900">
            <a href="#home">Home</a>
          </li>
          <li className="hover:bg-gray-100 p-1 hover:rounded-md dark:hover:bg-indigo-900">
            <a href="#services">Services</a>
          </li>
          <li className="hover:bg-gray-100 p-1 hover:rounded-md dark:hover:bg-indigo-900">
            <a href="#works">Works</a>
          </li>
          <li className="hover:bg-gray-100 p-1 hover:rounded-md dark:hover:bg-indigo-900">
            <a href="#about">About me</a>
          </li>
          <li className="hover:bg-gray-100 p-1 hover:rounded-md dark:hover:bg-indigo-900">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <img
          className="w-6 cursor-pointer hidden md:block"
          src="/assets/images/moon.png"
          alt=""
          onClick={()=>{toggleDark()}}
        />
        <div
          className={`space-y-1 md:hidden cursor-pointer z-20`}
          onClick={() => setShowMenu((old) => !old)}
        >
          <div
            className={`w-5 h-0.5  ${showMenu ? "bg-white" : "bg-black"}`}
          ></div>
          <div
            className={`w-5 h-0.5  ${showMenu ? "bg-white" : "bg-black"}`}
          ></div>
          <div
            className={`w-5 h-0.5  ${showMenu ? "bg-white" : "bg-black"}`}
          ></div>
        </div>
        <ul
          className={`${
            !showMenu && "hidden"
          } bg-indigo-900 uppercase absolute left-0 top-0 w-full  rounded-b-3xl space-y-10 py-12 text-center text-white`}
        >
          <li className="hover:bg-indigo-300 cursor-pointer" onClick={()=>setShowMenu(old=>!old)}>
            <a href="#home" className="block">Home</a>
          </li>
          <li className="hover:bg-indigo-300 cursor-pointer" onClick={()=>setShowMenu(old=>!old)}>
            <a href="#services" className="block">Services</a>
          </li>
          <li className="hover:bg-indigo-300 cursor-pointer" onClick={()=>setShowMenu(old=>!old)}>
            <a href="#works" className="block">Works</a>
          </li>
          <li className="hover:bg-indigo-300 cursor-pointer" onClick={()=>setShowMenu(old=>!old)}>
            <a href="#about" className="block">About me</a>
          </li>
          <li className="hover:bg-indigo-300 cursor-pointer" onClick={()=>setShowMenu(old=>!old)}>
            <a href="#contact" className="block">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
