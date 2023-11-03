import React from "react";
import ListItem from "./ListItem";
import List from "./List";

const LeftSideBar = () => {
  return (
    <div>
      <h3> Book by Category </h3>
      <List className="absolute mt-6 w-[263px] text-[#767676] font-regular font-dm text-sm z-50">
        <ListItem
          className="py-4  hover:px-3 border-b border-solid border-[#2d2d2d] duration-100 ease-in  "
          itemname="Fiction"
        ></ListItem>
        <ListItem
          className="py-4  hover:px-3  border-b border-solid border-[#2d2d2d] duration-100 ease-in"
          itemname="Non-Fiction"
        ></ListItem>
        <ListItem
          className="py-4 hover:px-3  border-b border-solid border-[#2d2d2d] duration-100 ease-in"
          itemname="Novel"
        ></ListItem>
        <ListItem
          className="py-4  hover:px-3  border-b border-solid border-[#2d2d2d] duration-100 ease-in"
          itemname="Children's Books"
        ></ListItem>
        <ListItem
          className="py-4  hover:px-3  border-b border-solid border-[#2d2d2d] duration-100 ease-in"
          itemname="Mystery"
        ></ListItem>
        <ListItem
          className="py-4  hover:px-3  border-b border-solid border-[#2d2d2d] duration-100 ease-in"
          itemname="Job peparation"
        ></ListItem>
      </List>
    </div>
  );
};

export default LeftSideBar;
