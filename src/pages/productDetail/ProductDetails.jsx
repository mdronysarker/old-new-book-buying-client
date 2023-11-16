import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import React from "react";
import List from "../../components/layout/List";
import LeftSideBar from "../Book/LeftSideBar";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  return (
    <div className="max-w-container mx-auto p-2.5 ">
      <div className="flex gap-8">
        <div className="w-[30%] bg-slate-400">
          <img src="./images/newp2.png" alt="" />
        </div>
        <div className="w-[33%]">
          <h1 className="text-[#333] text-[22px] font-bold">
            Chaz Kangeroo Hoodie
          </h1>
          <span className="font-dm text-[#333] text-[24px] font-bold mt-6 ">
            $52.00
          </span>
          <div className="border-t border-solid border-[#2d2d2d] mt-[8px]">
            <p className="font-dm mb-[10px] mt-5 text-[#333]">
              Ideal for cold-weather training or work outdoors, the Chaz Hoodie
              promises superior warmth with every wear. Thick material blocks
              out the wind as ribbed cuffs and bottom band seal in body heat.
            </p>
            <p className="font-dm mb-[10px] text-[#333]">
              Ideal for cold-weather training or work outdoors, the Chaz Hoodie
              promises superior warmth with every wear.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <span className="font-dm text-[14px] font-medium inline-block">
              Qty
            </span>
            <input
              className="border border-solid border-[#ebebeb] text-center p-3 w-[100px]"
              type="number"
              placeholder="1"
            />
            <button className="bg-[#ce7852] text-[#fff] px-[25px] py-2 hover:border hover:border-solid hover:border-black hover:bg-white hover:text-black  transition ease-in-out delay-100">
              ADD TO CART
            </button>
          </div>
          <div>
            <p className="font-dm font-bold text-[14px] mt-8">
              Categories: <span className="ml-3">Adventure</span>
            </p>
          </div>
          <div className="mt-5">
            <List className="flex items-center gap-4">
              <li className="font-dm text-[14px] text-[#333] font-bold">
                Share :
              </li>
              <li>
                <CiFacebook />
              </li>
              <li>
                <FiTwitter />
              </li>
              <li>
                <CiLinkedin />
              </li>
            </List>
          </div>
        </div>
        <div className="w-[30%] bg-zinc-200"></div>
      </div>
      <div className="w-[63%] mt-10">
        <h6 className="font-dm text-[14px] font-semibold">DETAILS</h6>
        <div className="mt-5  border-t border-solid border-[#000]">
          <p className="mt-5">
            Ideal for cold-weather training or work outdoors, the Chaz Hoodie
            promises superior warmth with every wear. Thick material blocks out
            the wind as ribbed cuffs and bottom band seal in body heat.Ideal for
            cold-weather training or work outdoors, the Chaz Hoodie promises
            superior warmth with every wear. Thick material blocks out the wind
            as ribbed cuffs and bottom band seal in body heat.Ideal for
            cold-weather training or work outdoors, the Chaz Hoodie promises
            superior warmth with every wear. Thick material blocks out the wind
            as ribbed cuffs and bottom band seal in body heat.Ideal for
            cold-weather training or work outdoors, the Chaz Hoodie promises
            superior warmth with every wear. Thick material blocks out the wind
            as ribbed cuffs and bottom band seal in body heat.
          </p>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
