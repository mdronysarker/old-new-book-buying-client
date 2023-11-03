import React, { useState } from "react";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import Footer from "../components/layout/Footer";
import LeftSideBar from "../components/layout/leftSideBar";

const Book = () => {
  const [showNumber, setShowNumber] = useState(12);

  const handlePaginationChange = (e) => {
    setShowNumber(Number(e.target.value));
  };

  return (
    <>
      <div className="max-w-container mx-auto p-2.5">
        <h1 className="font-dm text-5xl text-bold">Book</h1>
        <Flex className="flex gap-x-10 ">
          <div className="w-[25%]  mt-[102px]">
            <LeftSideBar />
          </div>
          <div className="w-[75%] relative">
            <div className="flex gap-x-10 justify-end mb-[60px]">
              <div className="md:flex items-center gap-x-3.5">
                <span className="inline-block text-base  text-[#767676]">
                  Sort By:
                </span>
                <select
                  id="countries"
                  className=" font-dm font-regular text-base border border-[#F0F0F0] text-gray-900  rounded-lg focus:border-black-500 block md:w-[239px] p-2.5"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="md:flex items-center gap-x-3.5">
                <span className="inline-block text-base  text-[#767676]">
                  Show
                </span>
                <select
                  onChange={handlePaginationChange}
                  id="countries"
                  className=" font-dm font-regular text-base border border-[#F0F0F0] text-gray-900  rounded-lg focus:border-black-500 block md:w-[139px] p-2.5"
                >
                  <option value="12">12</option>
                  <option value="24">24</option>
                  <option value="48">48</option>
                </select>
              </div>
            </div>
            <Pagination itemsPerPage={showNumber} />
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Book;
