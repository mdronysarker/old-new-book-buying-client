import React from "react";
import Heading from "./Heading";
import Flex from "./Flex";
import Product from "./Product";

const Newarrival = () => {
  return (
    <div className="mt-5 md:mt-32 max-w-container mx-auto p-2.5">
      <Heading title="New Arrivals" />
      <Flex className="sm:max-lg:flex-wrap sm:flex sm:max-md:justify-between gap-x-10">
        <div className=" sm:max-w-[300px] md:max-w-[345px] lg:max-w-[340px]">
          <Product src="images/newp1.png" title={"New"} badge={true} />
        </div>
        <div className="sm:max-w-[300px] md:max-w-[345px] lg:max-w-[340px]">
          <Product src="images/newp2.png" title={"New"} badge={true} />
        </div>
        <div className="sm:max-w-[300px] md:max-w-[345px] lg:max-w-[340px]">
          <Product src="images/newp3.png" title={"New"} badge={true} />
        </div>
        <div className="sm:max-w-[300px] md:max-w-[345px] lg:max-w-[340px]">
          <Product src="images/newp1.png" title={"New"} badge={true} />
        </div>
      </Flex>
    </div>
  );
};

export default Newarrival;
