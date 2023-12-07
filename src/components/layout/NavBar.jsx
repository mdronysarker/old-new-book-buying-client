import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { AiOutlineBars } from "react-icons/ai";
import { useEffect, useState } from "react";
import About from "../../pages/About";
import { ImCross } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Search from "./Search";
import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";
import { MdShoppingCart } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { RxTriangleDown } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useRef } from "react";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const [userDropDownShow, setUserDropDownShow] = useState(false);
  const [cartDropDownShow, setCartDropDownShow] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    window.addEventListener("resize", scrollWidth);
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  const userref = useRef();
  const cartref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(ref.current);

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
    <nav className="py-8">
      <div className="max-w-container mx-auto p-2">
        <Flex className="lg:flex lg:items-center">
          <div className="lg:w-3/12">
            <Image imgsrc="images/logo.png" />
          </div>
          <div className="w-auto lg:w-[600px] relative">
            <Search
              className="w-full py-4 px-5 placeholder:text[#c4c4c4] font-dm text-sm"
              placeholder="Search Book"
            />
            <FaSearch className="absolute top-4 right-4" />
          </div>
          <div className="lg:w-9/12 w-full ">
            <AiOutlineBars
              onClick={handleShow}
              className="block lg:hidden ml-auto absolute top-2.5 right-2.5 "
            />
            {show && (
              <List className="lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0">
                <ListItem
                  className="font-dm text-sm font-regular  hover:font-bold my-2.5 lg:my-0"
                  itemname={"Home"}
                  href="/"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname={"Book"}
                  href="/book"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname={"About"}
                  href="/about"
                />

                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname={"Contact"}
                  href="/contact"
                />
                {user ?
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
                            href="/dashboard"
                            className="py-4 px-5  border-b border-solid border-[#f0f0f0] hover:bg-primary hover:text-white duration-100 ease-in  "
                            itemname="My Account"
                          ></ListItem>
                          <ListItem 
                            click={true}
                            className="py-4 px-5   border-b border-solid border-[#f0f0f0] hover:text-white hover:bg-primary duration-100 ease-in"
                            itemname="Logout"
                          ></ListItem>
                        </List>
                      )}
                    </Dropdown>
                    <div>
                      <Dropdown className="relative" dropref={cartref}>
                        <Link to='/cart'>
                          <MdShoppingCart className="text-2xl" />
                          </Link> 
                      </Dropdown>
                    </div>
                  </Flex>
                </div>
                 : 
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname={"Login"}
                  href="/login"
                />

                }
              </List>
            )}
          </div>
        </Flex>
      </div>
    </nav>
  );
};

export default NavBar;
