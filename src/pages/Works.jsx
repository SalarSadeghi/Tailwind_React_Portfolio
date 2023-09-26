import React from "react";
import WorkCard from "../components/WorkCard";

function Works() {
  return (
    <div id="works" className=" px-10 overflow-hidden py-10 dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-3 ">
          <h1 className="text-indigo-600 font-bold">PORTFOLIO</h1>
          <h1 className="text-3x dark:text-white">Works & Projects</h1>
          <p className="w-full md:w-1/2 text-center text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias
            quasi sunt nesciunt repudiandae voluptas nulla cum quas totam itaque
            voluptate
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-5 gap-5 md:justify-around lg:gap-0  p-5">
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </div>
    </div>
  );
}

export default Works;
