import { useEffect, useState } from "react";
import Heading from "./Heading";
import Flex from "./Flex";
import Product from "../products/Product";
import axios from "axios";

const BestSeller = () => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getBestSellerBookList")
      .then((res) => {
        setBookList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-5 md:mt-32 max-w-container mx-auto p-2.5">
      <Heading title="Best Seller" />
      <Flex className="sm:max-lg:flex-wrap sm:flex sm:max-md:justify-between gap-x-10">
        {bookList.map((item) => (
          <Product key={item._id} item={item} />
        ))}
      </Flex>
    </div>
  );
};

export default BestSeller;
