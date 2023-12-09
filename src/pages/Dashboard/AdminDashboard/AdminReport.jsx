import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function AdminReport() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getReport")
      .then((res) => {
        setBookList(res.data);
        // console.log('report ', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
     <div className="font-poppins ">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Book Type </th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookList.length > 0 &&
              bookList.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                      </div>
                      <div>
                        <div className="font-bold hover:text-purple-700">
                          {item.bookName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.bookType}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
