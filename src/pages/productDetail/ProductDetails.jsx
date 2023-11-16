import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import List from "../../components/layout/List";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {

  const {productId} = useParams();
  const [book,setBook] = useState({});

  useEffect(()=>{
    axios.post('http://localhost:5000/getProductDetails',productId)
    .then(res=>setBook(res.data))
    .catch(err=> console.log(err))
  },[productId])        

  return (
    <div className="max-w-container mx-auto p-2.5 ">
      <div className="flex gap-8">
        <div className="w-[30%] bg-slate-400">
          <img src="./images/newp2.png" alt="" />
        </div>
        <div className="w-[33%]">
          <h1 className="text-[#333] text-[22px] font-bold">
            {book.bookName}
          </h1>
          <span className="font-dm text-[#333] text-[24px] font-bold mt-6 ">
            {book.price}
          </span>
          <div className="border-t border-solid border-[#2d2d2d] mt-[8px]">
            <p className="font-dm mb-[10px] mt-5 text-[#333]">
             {book.description}
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
              Categories: <span className="ml-3">{book.categegory}</span>
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
        <div className="w-[30%] bg-zinc-200">
          {/* <LeftSideBar/> */}
        </div>
      </div>
      <div className="w-[63%] mt-10">
        <h6 className="font-dm text-[14px] font-semibold">DETAILS</h6>
        <div className="mt-5  border-t border-solid border-[#000]">
          <p className="mt-5"> {book.description} </p>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
