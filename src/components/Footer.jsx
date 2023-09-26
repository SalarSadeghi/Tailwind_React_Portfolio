import React from "react";

function Footer() {
  return (
    <div className="  w-full bg-gray-800 ">
      <div className="container py-5 flex justify-between items-center mx-auto">
        <div className="flex items-center gap-2 cursor-pointer">
          <img className="w-8" src="/assets/images/logo.png" alt="" />
          <span className="text-2xl font-bold text-white">Salar.CV</span>
        </div>
        <span className="text-white hidden md:block font-medium">Lorem ipsum dolor, sit amet consectetur </span>
        <div className="flex gap-3">
            <img src="/assets/images/facebook.png" className="w-4 cursor-pointer" alt="" />
            <img src="/assets/images/instagram.png" className="w-4 cursor-pointer" alt="" />
            <img src="/assets/images/twitter.png" className="w-4 cursor-pointer" alt="" />
            <img src="/assets/images/linkedin.png" className="w-4 cursor-pointer" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
