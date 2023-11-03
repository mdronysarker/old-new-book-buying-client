import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiSolidUser } from "react-icons/bi";
import { RxTriangleDown } from "react-icons/rx";
import { MdShoppingCart } from "react-icons/md";
import { ImCross } from "react-icons/im";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import Image from "./Image";
import { Link } from "react-router-dom";
const Header = () => {
  const [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  const [userDropDownShow, setUserDropDownShow] = useState(false);
  const [cartDropDownShow, setCartDropDownShow] = useState(false);

  const categoryref = useRef();
  const userref = useRef();
  const cartref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(ref.current);
      if (categoryref.current.contains(e.target)) {
        setCategoryDropDownShow(true);
      } else {
        setCategoryDropDownShow(false);
      }

      if (userref.current.contains(e.target)) {
        setUserDropDownShow(true);
      } else {
        setUserDropDownShow(false);
      }

      if (cartref.current.contains(e.target)) {
        setCartDropDownShow(true);
      } else {
        setCartDropDownShow(false);
      }
    });
  }, []);

  return (
    <div className="bg-[#f5f5f3] py-6">
      <div className="max-w-container mx-auto p-2.5">
        <Flex className="flex justify-between">
          <div className="flex items-center">
            <Dropdown className="relative" dropref={categoryref}>
              <p className="flex items-center gap-x-2.5 font-dm text-sm font-regular">
                <FaBars />{" "}
                <span className="hidden lg:inline-block">Book by Category</span>
              </p>
              {categoryDropDownShow && (
                <List className="absolute mt-6 w-[263px] bg-primary text-[#767676] font-regular font-dm text-sm z-50">
                  <ListItem
                    className="py-4 px-5 hover:px-7 border-b border-solid border-[#2d2d2d] hover:text-white duration-100 ease-in  "
                    itemname="Fiction"
                  ></ListItem>
                  <ListItem
                    className="py-4 px-5 hover:px-7  border-b border-solid border-[#2d2d2d] hover:text-white duration-100 ease-in"
                    itemname="Non-Fiction"
                  ></ListItem>
                  <ListItem
                    className="py-4 px-5 hover:px-7  border-b border-solid border-[#2d2d2d] hover:text-white duration-100 ease-in"
                    itemname="Novel"
                  ></ListItem>
                  <ListItem
                    className="py-4 px-5 hover:px-7  border-b border-solid border-[#2d2d2d] hover:text-white duration-100 ease-in"
                    itemname="Children's Books"
                  ></ListItem>
                  <ListItem
                    className="py-4 px-5 hover:px-7  border-b border-solid border-[#2d2d2d] hover:text-white duration-100 ease-in"
                    itemname="Mystery"
                  ></ListItem>
                </List>
              )}
            </Dropdown>
          </div>
          <div className="w-auto lg:w-[600px] relative">
            <Search
              className="w-full py-4 px-5 placeholder:text[#c4c4c4] font-dm text-sm"
              placeholder="Search Book"
            />
            <FaSearch className="absolute top-4 right-4" />
          </div>
          <div className="flex items-center">
            <Flex className="flex gap-x-10">
              <Dropdown className=" z-50 relative" dropref={userref}>
                <div className="flex items-center">
                  <BiSolidUser />
                  <RxTriangleDown />
                </div>
                {userDropDownShow && (
                  <List className="absolute mt-6 right-20 w-[200px] bg-white text-primary text-center font-regular font-dm text-sm border border-solid border-[#f0f0f0] z-50">
                    <ListItem
                      className="py-4 px-5  border-b border-solid border-[#f0f0f0] hover:bg-primary hover:text-white duration-100 ease-in  "
                      itemname="My Account"
                    ></ListItem>
                    <ListItem
                      className="py-4 px-5   border-b border-solid border-[#f0f0f0] hover:text-white hover:bg-primary duration-100 ease-in"
                      itemname="Logout"
                    ></ListItem>
                  </List>
                )}
              </Dropdown>
              <div>
                <Dropdown className="relative" dropref={cartref}>
                  <MdShoppingCart className="text-2xl" />

                  {cartDropDownShow && (
                    <div className="absolute mt-6 right-20 w-[360px] boder border-solid border-[#f0f0f0] z-40 ">
                      <div className=" bg-[#f5f5f3] p-5 ">
                        <Flex className="flex gap-5">
                          <div className="w-4/12">
                            <Image
                              className="w-14"
                              imgsrc="images/cart-image.png"
                            />
                          </div>
                          <div className="relative flex w-4/6 flex-col justify-center">
                            <h3 className="font-dm font-bold text-sm text-primary">
                              Novel Book
                            </h3>
                            <p className="mt-3 font-dm font-bold text-sm text-primary">
                              $5
                            </p>
                            <ImCross className="absolute text-sm  right-0 " />
                          </div>
                        </Flex>
                      </div>
                      <div className="bg-white p-5">
                        <h4 className="font-dm font-regular text-base text-[#767676]">
                          Subtotal:{" "}
                          <span className="font-blod text-primary">$5</span>
                        </h4>
                        <Link
                          to="/cart"
                          className="inline-block font-dm font-bold text-sm py-4 px-10 border border-solid border-primary mt-3"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="#"
                          className="inline-block font-dm font-bold text-sm text-white py-4 px-10 border border-solid border-primary mt-3 bg-primary ml-5"
                        >
                          Order
                        </Link>
                      </div>
                    </div>
                  )}
                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
