import React from "react";

function WorkCard() {
  return (
    <div className="w-full md:w-[30%] shadow-lg rounded-lg p-5 flex flex-col gap-3 hover:border hover:border-indigo-900">
      <img className="object-cover" src="/assets/images/item.png" alt="" />
    </div>
  );
}

export default WorkCard;
