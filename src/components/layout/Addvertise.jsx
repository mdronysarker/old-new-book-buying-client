import React from "react";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import Image from "./Image";

const Addvertise = () => {
  return (
    <div className="max-w-container mx-auto p-2.5 mt-5 md:mt-36">
      <Flex className="flex gap-x-5 md:gap-x-10">
        <div className="max-w-2/4">
          <Link to="#">
            <Image imgsrc="images/add1.png" />
          </Link>
        </div>
        <div className="max-w-2/4">
          <Link to="#">
            <Image imgsrc="images/add2.png" />
          </Link>
          <Link to="#" className="mt-2 md:mt-10 inline-block">
            <Image imgsrc="images/add2.png" />
          </Link>
        </div>
      </Flex>
    </div>
  );
};

export default Addvertise;
