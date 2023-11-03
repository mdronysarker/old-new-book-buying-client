import React from "react";

const Heading = ({ title }) => {
  return (
    <h2 className="font-dm font-bold text-2xl md:text-[39px] mb-6 md:mb-10">
      {title}
    </h2>
  );
};

export default Heading;
