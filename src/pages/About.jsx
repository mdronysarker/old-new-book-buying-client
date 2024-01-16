import React from "react";
import Flex from "../components/layout/Flex";
import Image from "../components/layout/Image";

const About = () => {
  return (
    <div className="max-w-container mx-auto p-2.5">
      <h2 className="font-dm text-5xl text-bold">About</h2>
      <div className="max-w-container mx-auto p-2.5">
        <Flex className="flex">
          <div className="w-2/4">
            <Image className="w-[380px] h-[376px]" imgsrc="images/newp2.png" />
          </div>
          <div className="w-2/4">
            <Image className="w-[380px] h-[376px]" imgsrc="images/newp1.png" />
          </div>
        </Flex>
        <div className="mt-[20px]">
          <h4 className="font-regular font-dm text-[39px]">
            Book store is one of the world’s leading Old Book Shop.
          </h4>
        </div>
        <Flex className="flex justify-between mt-[30px]">
          <div className="w-[32%]">
            <h4 className="text-2xl  font-dm font-bold">Our Vision</h4>
            <p className="text-base  font-dm font-regular text[#767676]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-[32%]">
            <h4 className="text-2xl  font-dm font-bold">Our Story</h4>
            <p className="text-base  font-dm font-regular text[#767676]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="w-[32%]">
            <h4 className="text-2xl  font-dm font-bold">Our Brands</h4>
            <p className="text-base  font-dm font-regular text[#767676]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default About;
