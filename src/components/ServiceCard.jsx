import React from "react";

function ServiceCard() {
  return (
    <div className="w-full md:w-[30%] shadow-lg dark:shadow-slate-900 rounded-lg p-5 flex flex-col gap-3 ">
      <img className="w-10" src="/assets/images/icon.png" alt="" />
      <h1 className="font-medium text-lg dark:text-white">UX / UI Dedign</h1>
      <p className="text-gray-400 w-5/6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui explicabo
        dignissimos deserunt, corrupti consequatur quo
      </p>
      <a href="#" className="text-indigo-600 font-semibold text-sm">Read More</a>
    </div>
  );
}

export default ServiceCard;
