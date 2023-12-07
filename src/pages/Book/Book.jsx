import { useState } from "react";
import Flex from "../../components/layout/Flex";
import Pagination from "./Pagination";
import LeftSideBar from "./LeftSideBar";
import TopMenu from "./TopMenu";
import BookList from "./BookList";

const Book = () => {
  const [showNumber, setShowNumber] = useState(12);


  return (
    <>
      <div className="max-w-container mx-auto p-2.5">
        <Flex className="flex gap-x-10 ">
          <div className="w-[25%]  mt-[102px]">
            <LeftSideBar /> 
          </div>
          <div className="w-[75%] relative">
           <TopMenu/>
             <BookList/>
            <Pagination itemsPerPage={showNumber} />
          </div>
        </Flex>
      </div>
    </>
  );
};

export default Book;
