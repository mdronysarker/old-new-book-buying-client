import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import Flex from "./Flex";
import { AiFillHeart } from "react-icons/ai";
import { BiSolidCart } from "react-icons/bi";

const Product = ({ src, badge, title }) => {
  return (
    <div>
      <div className="group relative overflow-y-hidden">
        <Image className="w-[370px] h-[370px]" imgsrc={src} />
        {badge && <Badge title={title} />}
        <div className="h-40 bg-white absolute bottom-[-44%] group-hover:bottom-0 left-0 w-full py-6 px-7 ">
          <Flex className="flex justify-end items-center gap-x-1 sm:gap-x-4">
            <p className="font-regular font-dm text-base text-[#6d6d6d]">
              Add to Wish List
            </p>
            <AiFillHeart className="text-base" />
          </Flex>
          <Flex className="flex justify-end items-center gap-x-1 sm:gap-x-4 mt-5">
            <p className="font-regular font-dm text-base text-[#6d6d6d]">
              Add to Cart
            </p>
            <BiSolidCart className="text-base" />
          </Flex>
        </div>
      </div>
      <div className="mb-12 md:mb-0">
        <Flex className="flex justify-between mt-0 md:mt-6">
          <h3 className="font-dm text-xl font-bold">Children Book</h3>
          <p className="font-dm text-base font-regular text-[#767676]">$34</p>
        </Flex>
        <p className="font-dm text-base font-regular text-[#767676] mt-1 md:mt-4">
          By Rony
        </p>
        <p className="font-dm text-base font-regular text-[#767676] mt-1 md:mt-4">
          Category: children
        </p>
        <p className="font-dm text-base font-regular text-[#767676] mt-1 md:mt-4">
          Quntity:15
        </p>
      </div>
    </div>
  );
};

export default Product;
