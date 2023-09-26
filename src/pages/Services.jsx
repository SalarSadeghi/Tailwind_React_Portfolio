import React from "react";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div id="services" className="dark:bg-slate-900 py-10 px-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-3 ">
          <h1 className="text-indigo-600 font-bold">SERVICES</h1>
          <h1 className="text-3xl dark:text-white">What do I offer?</h1>
          <p className="w-full md:w-1/2 text-center text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias
            quasi sunt nesciunt repudiandae voluptas nulla cum quas totam itaque
            voluptate, placeat ad iusto amet obcaecati aperiam provident libero
            harum.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-5 gap-5 md:justify-around lg:gap-0  p-5">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default Services;
