import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ itemname, className, href }) => {
  return (
    <li className={className}>
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : "font-regular")}
        to={href}
      >
        {itemname}
      </NavLink>
    </li>
  );
};

export default ListItem;
