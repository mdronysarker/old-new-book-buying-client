import React from "react";
import Product from "./Product";
import Heading from "./Heading";
import Flex from "./Flex";

const Bestseller = () => {
  return (
    <div className="mt-5 md:mt-32 max-w-container mx-auto p-2.5">
      <Heading title="Best seller" />
      <Flex className="sm:max-lg:flex-wrap sm:flex sm:max-md:justify-between gap-x-10">
        <div className=" sm:max-w-[300px] md:max-w-[345px] lg:max-w-[340px]">
          <Product src="images/newp1.png" title={"New"} badge={true} />
        </div>
        <div className="sm:max-w-[300px] md:max-w-[345px] lg:max-w-[340px]">
          <Product src="images/newp2.png" title={"New"} badge={true} />
        </div>
        <div className="sm:max-w-[300px] md:max-w-[345px] lg:max-w-[340px]">
          <Product src="images/newp3.png" title={"New"} badge={false} />
        </div>
        <div className="sm:max-w-[300px] md:max-w-[345px] lg:max-w-[340px]">
          <Product src="images/newp1.png" title={"New"} badge={false} />
        </div>
      </Flex>
    </div>
  );
};

export default Bestseller;
