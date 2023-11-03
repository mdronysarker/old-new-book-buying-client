import React from "react";

const Image = ({ imgsrc, className }) => {
  return (
    <div>
      <img className={className} src={imgsrc} alt="image" />
    </div>
  );
};

export default Image;
