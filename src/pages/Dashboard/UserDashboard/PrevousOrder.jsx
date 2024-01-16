import axios from "axios";
import { useEffect, useState } from "react";
import useUserInfo from "../../../CustomHook/useUserInfo";

export default function PrevousOrder() {
  const [bookList, setBookList] = useState([]);

  const { userId } = useUserInfo();

  useEffect(() => {
    axios
      .post("http://localhost:5000/getPrevousOrder", { userId })
      .then((res) => setBookList(res.data))
      .catch((err) => console.log(err));
  }, [userId]);

  // console.log(bookList);

  return (
    <div className="font-poppins ">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Date</th>
              <th>Invoice Id</th>
              <th>City</th>
              <th>Adress</th>
              <th>House</th>
              <th>Status </th>
            </tr>
          </thead>
          <tbody>
            {bookList.length > 0 &&
              bookList.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="font-bold hover:text-purple-700">
                          {item.bookName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.date}</td>
                  <td>{item.invoiceId}</td>
                  <td>{item.city}</td>
                  <td>{item.address}</td>
                  <td>{item.house}</td>
                  <td>
                    <button
                      className={`rounded-lg px-1 py-1 text-white ${
                        item.delivered ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {" "}
                      {item.delivered ? "Delivered" : "Pending"}{" "}
                    </button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
