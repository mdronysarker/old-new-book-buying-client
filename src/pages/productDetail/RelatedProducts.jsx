import React from "react";
import Image from "../../components/layout/Image";
import { Badge } from "@mui/material";

const RelatedProducts = () => {
  return (
    <div>
      <h2 className="font-dm  text-[30px] font-bold text-[#000] text-center mt-10">
        RELATED PRODUCTS
      </h2>
      <div className="flex mt-8">
        <div className="md:w-[49%] lg:w-[32%] mb-6">
          <div className="group relative overflow-y-hidden">
            <Image
              className="w-[300px] h-[300px]"
              imgsrc="./images/newp2.png"
            />

            <Badge title={"old"} />
          </div>
        </div>
        <div className="md:w-[49%] lg:w-[32%] mb-6">
          <div className="group relative overflow-y-hidden">
            <Image
              className="w-[300px] h-[300px]"
              imgsrc="./images/newp2.png"
            />

            <Badge title={"old"} />
          </div>
        </div>
        <div className="md:w-[49%] lg:w-[32%] mb-6">
          <div className="group relative overflow-y-hidden">
            <Image
              className="w-[300px] h-[300px]"
              imgsrc="./images/newp2.png"
            />

            <Badge title={"old"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
