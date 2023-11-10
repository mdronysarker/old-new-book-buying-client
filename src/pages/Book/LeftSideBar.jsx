import ListItem from "../../components/layout/ListItem";
import List from "../../components/layout/List";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BookContext } from "../../context/BookContext";

const LeftSideBar = () => { 

  const [allCategory, setAllCategory] = useState([]);
  const {dispatch} = useContext(BookContext);

    useEffect(() => {
        axios.get("http://localhost:5000/getAllCategory")
            .then((res) => {
                setAllCategory(res.data);
            })
            .catch((err) => {  
                console.log(err);
            })
    }, [])

    const handleCategory = (category) => {
        dispatch({type:'SET_CATEGORY',payload:category})
    }


  return (
    <div>
      <h3> Book by Category </h3>
      <List className="absolute mt-6 w-[263px] text-[#767676] font-regular font-dm text-sm z-50">
        { allCategory.map(category=> 
          <li key={category._id} onClick={()=>{handleCategory(category.category)}} className="py-4  hover:px-3 border-b border-solid border-[#2d2d2d] duration-100 ease-in cursor-pointer  ">
          {category.category}
        </li>)
        }
{/*         
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
        ></ListItem> */}
      </List>
    </div>
  );
};

export default LeftSideBar;
