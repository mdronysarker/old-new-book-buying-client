import React from "react";
import Flex from "../components/layout/Flex";
import { ImCross } from "react-icons/im";
import Image from "../components/layout/Image";

const Cart = () => {
  return (
    <div className="max-w-container mx-auto p-2.5">
      <h2 className="mb-10 font-dm text-4xl font-bold">Cart</h2>
      <div className="bg-[#F5F7F7] py-[34px] px-5 ">
        <Flex className="flex justify-between">
          <div className="w-[23%]">Product</div>
          <div className="w-[23%]">Price</div>
          <div className="w-[23%]">Quantity</div>
          <div className="w-[23%]">Total</div>  
        </Flex>
      </div>
      <div className="py-[34px] px-5">
        <Flex className="flex justify-between items-center">
          <div className="w-[23%] relative">
            <Flex className="flex justify-between items-center">
              <ImCross />
              <div className="">
                <Image className="w-14" imgsrc="images/cart-image.png" />
              </div>
              <h3 className="font-dm font-bold text-sm text-primary">
                Novel Book
              </h3>
            </Flex>
          </div>
          <div className="w-[23%]">$12</div>
          <div className="w-[23%] ">
            <span className=" font-dm text-[16px] border border-[#767676] py-[3px] px-[21px]">
              - <span className="mx-[10px]"> 1</span> +
            </span>
          </div>
          <div className="w-[23%] font-dm text-[#262626] font-bold text-2xl ">
            $12
          </div>
        </Flex>
      </div>

      <div>
        <h3 className="flex justify-end font-dm font-bold text-xl">
          Cart Totals
        </h3>
      </div>
      <div className="mt-8 ">
        <Flex className="flex justify-end gap-x-8 ">
          <h4>Subtotal</h4>
          <p>32$</p>
        </Flex>
        <Flex className="flex justify-end gap-x-8 mt-3 ">
          <h4>Total</h4>
          <p>32$</p>
        </Flex>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-primary py-4 px-24 font-dm text-sm font-bold text-white">
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
