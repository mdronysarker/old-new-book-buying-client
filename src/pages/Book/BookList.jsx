import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/BookContext";
import axios from "axios";
import Product from "../../components/products/Product";
import { useSearchContext } from "../../context/SearchContext";

export default function BookList() {
  const { state, dispatch } = useContext(BookContext);
  const [bookData, setBookData] = useState([]);

  // For search

  const { searchQuery } = useSearchContext();
  // console.log(searchQuery);

  // console.log(state);
  // console.log(bookData);

  useEffect(() => {
    axios
      .post("http://localhost:5000/getBookData", state)
      .then((res) => setBookData(res.data))
      .catch((err) => console.log(err));
  }, [state]);

  // console.log(bookData);

  return (
    <div className="md:flex md:flex-wrap md:justify-between">
      {bookData
        .filter((item) => {
          const bookname = item.bookName; // Handle the case where username is undefined
          return bookname.toLowerCase().includes(searchQuery);
        })
        .map((book) => (
          <Product item={book} key={book._id}></Product>
        ))}
    </div>
  );
}
