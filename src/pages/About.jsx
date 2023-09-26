import React from "react";

function About() {
  return (
    <div id="about" className=" px-10 overflow-hidden dark:bg-slate-900">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 py-40">
        <div className="relative">
          <img
            className="w-1/4 h-1/4 absolute left-0 top-0 -z-10"
            src="/assets/images/dots.png"
            alt=""
          />
          <div className="h-full rounded-full overflow-hidden">
            <img src="/assets/images/portrait.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-center">
          <h1 className="text-indigo-600 font-bold uppercase">About Me</h1>
          <h1 className="text-3xl font-medium capitalize dark:text-white">Better Design</h1>
          <h1 className="text-3xl font-medium capitalize dark:text-white">Better Experience</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem
            quos quam distinctio blanditiis odio, praesentium dolores neque
            repudiandae molestiae odit asperiores nostrum maiores dicta beatae?
            Possimus nihil eligendi perspiciatis?
          </p>

          <h2 className="text-gray-400 font-medium">Java Script</h2>
          <div className="w-full bg-gray-200 rounded-md h-1.5">
            <div className="w-full bg-indigo-700 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">React</h2>
          <div className="w-full bg-gray-200 rounded-md h-1.5">
            <div className="w-4/6 bg-indigo-700 h-1.5 rounded-md"></div>
          </div>
          <h2 className="text-gray-400 font-medium">Blockchain</h2>
          <div className="w-full bg-gray-200 rounded-md h-1.5">
            <div className="w-5/6 bg-indigo-700 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
