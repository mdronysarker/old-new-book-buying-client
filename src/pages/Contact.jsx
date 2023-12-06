import React from "react";

const Contact = () => {
  return (
    <div className="max-w-container mx-auto p-2.5 ">
      <div className="w-2/4  ">
        <h2 className="mb-10 font-dm text-4xl font-bold">Fill up a Form</h2>
        <div className="mb-6">
          <h4 className="placeholder:font-regular mb-2.5 font-dm text-base font-bold placeholder:font-dm placeholder:text-sm placeholder:text-[#767676]">
            Name
          </h4>
          <input
            placeholder="Your Name"
            className="w-full resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0"
          />
          <h4 className="placeholder:font-regular mb-2.5 font-dm text-base font-bold placeholder:font-dm placeholder:text-sm placeholder:text-[#767676]">
            Email
          </h4>
          <input
            placeholder="Your Name"
            className="w-full resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0"
          />
          <h4 className="placeholder:font-regular mb-2.5 font-dm text-base font-bold placeholder:font-dm placeholder:text-sm placeholder:text-[#767676]">
            Message
          </h4>
          <input
            placeholder="Your Name"
            className="w-full resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0"
          />
        </div>
        <button className="bg-primary py-4 px-24 font-dm text-sm font-bold text-white">
          post
        </button>
      </div>
    </div>
  );
};

export default Contact;
