import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="bg-primary inline-block text-white py-2 px-8 absolute top-5 left-5">
      {title}
    </span>
  );
};

export default Badge;
