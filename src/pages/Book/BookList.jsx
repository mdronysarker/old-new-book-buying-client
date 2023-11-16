import  { useContext, useEffect, useState } from 'react'
import { BookContext } from '../../context/BookContext'
import axios from 'axios';
import Product from '../../components/products/Product';

export default function BookList() {

    const {state,dispatch} = useContext(BookContext);
    const [bookData,setBookData] = useState([]);

    useEffect(()=>{
       axios.post('http://localhost:5000/getBookData',state)
       .then(res=>setBookData(res.data))
       .catch(err=> console.log(err))
    },[state])

  return (
    
    <div className="md:flex md:flex-wrap md:justify-between">
      {
        bookData.map(book=><Product item={book} key={book._id}></Product>)
      }
    </div>
  )
}
