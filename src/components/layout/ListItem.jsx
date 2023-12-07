import React, { useContext } from "react";
import { NavLink, redirect } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const ListItem = ({ itemname, className, href,click=false }) => {

  const {logOut} = useContext(AuthContext);

  const handleFunctionClick =()=>{
    if(click){
        logOut();
        redirect('home');
    }
  }

  return (
    <li className={className}>
      <NavLink
        className={({ isActive }) => (isActive ? "font-bold" : "font-regular")}
        to={href}
        onClick={handleFunctionClick}
      >
        {itemname}
      </NavLink>
    </li>
  );
};

export default ListItem;
