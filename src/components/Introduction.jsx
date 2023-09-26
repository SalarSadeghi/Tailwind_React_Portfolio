import React from "react";

function Introduction() {
  return (
    <div>
      <img
        className="absolute bottom-0 right-0 h-[calc((100vh/2)-72px)] object-cover mx-auto lg:left-0 lg:h-5/6"
        src="/assets/images/man.png"
        alt=""
      />
      <div className="hidden lg:block absolute left-0 right-0 mx-auto -bottom-1/4 -z-10 bg-indigo-500 w-big h-big rounded-full"></div>
      <div className="absolute top-1/3 left-5 sm:left-10 text-xl sm:text-3xl md:text-4xl md:left-1/4 lg:left-5 lg:text-6xl xl:left-48 xl:font-bold">
        <span className="text-gray-500">Freelance</span>
        <p id="text" className="text-red-500">Developer</p>
      </div>
      <div className="hidden dark:bg-slate-900 lg:flex flex-col absolute top-0 bottom-0 my-auto rounded-md shadow-xl bg-white h-fit w-1/3 p-6 gap-5 right-10">
        <h1 className="text-4xl font-bold text-indigo-900 dark:text-white">Hi, I'm Salar</h1>
        <p className="text-gray-500 dark:text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, iusto
          assumenda inventore nostrum facere, magni aperiam, esse quis minus
          illum reiciendis ullam amet? Voluptate nulla voluptatum pariatur, cum
          aut obcaecati!
        </p>
        <a className="bg-indigo-600 text-xl font-semibold text-white w-fit px-3 py-2 rounded-md" href="#contact">Hire Me</a>
      </div>
    </div>
  );
}

export default Introduction;
