import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { AiOutlineBars } from "react-icons/ai";
import { useEffect, useState } from "react";
import About from "../../pages/About";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

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

  return (
    <nav className="py-8">
      <div className="max-w-container mx-auto p-2">
        <Flex className="lg:flex">
          <div className="lg:w-3/12">
            <Image imgsrc="images/logo.png" />
          </div>

          <div className="lg:w-9/12 w-full ">
            <AiOutlineBars
              onClick={handleShow}
              className="block lg:hidden ml-auto absolute top-2.5 right-2.5 "
            />
            {show && (
              <List className="lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0">
                <ListItem
                  className="font-dm text-sm font-bold hover:font-bold my-2.5 lg:my-0"
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
                  itemname={"Service"}
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname={"Contact"}
                  href="/contact"
                />
                <ListItem
                  className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                  itemname={"Dashboard"}
                  href="/dashboard"
                />
                {user ? (
                  <button onClick={handleLogOut} className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0">
                    Log Out
                  </button>
                ) : (
                  <ListItem
                    className="font-dm text-sm font-regular hover:font-bold my-2.5 lg:my-0"
                    itemname={"Login"}
                    href="/login"
                  />
                )}
              </List>
            )}
          </div>
        </Flex>
      </div>
    </nav>
  );
};

export default NavBar;
