import React from "react";
import Form from "../components/Form";

function Contact() {
  return (
    <div id="contact" className="pt-10 dark:bg-slate-900">
      <div className="container mx-auto">
        <div>
          <div className="flex flex-col items-center gap-3 ">
            <h1 className="text-indigo-600 font-bold">CONTACT</h1>
            <h1 className="text-3xl dark:text-white">Have a Question?</h1>
            <p className="w-full md:w-1/2 text-center text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos alias
              quasi sunt nesciunt repudiandae voluptas nulla cum quas
            </p>
          </div>
        </div>
        <div className="mt-10">
            <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
