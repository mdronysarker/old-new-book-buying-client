import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import html2pdf from "html2pdf.js";

export default function AdminReport() {
  const [bookList, setBookList] = useState([]);

  const downloadPDFNew = () => {
    const content = document.getElementById("new-book-pdf");
    const pdfOptions = {
      margin: 10,
      filename: "download.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf(content, pdfOptions);
  };

  const downloadPDFOld = () => {
    const content = document.getElementById("old-book-pdf");
    const pdfOptions = {
      margin: 10,
      filename: "download.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf(content, pdfOptions);
  };

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

  // console.log(bookList);

  return (
    <div className="font-poppins">
      <div className="overflow-x-auto" id="new-book-pdf">
        <div className="flex gap-6 items-center mb-[10px]">
          <img
            className="w-[50px] h-[50px]"
            src="../public/images/report.jpg"
            alt="report-pic"
          />
          <h4 className="font-dm font-bold text-2xl md:text-[26px] ">
            Admin Report For Selling New Book
          </h4>
          <h5 className="font-dm font-bold text-2xl md:text-[24px] ms-auto me-6 ">
            Date: 23 to 10
          </h5>
        </div>
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
              bookList
                .filter((item) => {
                  return item.bookType === "new";
                })
                .map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar"></div>
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
      <div className="mt-[20px]">
        <button
          onClick={downloadPDFNew}
          className="px-[10px] py-4 mr-6 text-sm font-bold text-white border bg-primary font-dm hover:text-primary hover:bg-white hover:border hover:border-primary border-radius: rounded"
        >
          Download Report
        </button>
      </div>

      <div className="overflow-x-auto mt-10" id="old-book-pdf">
        <div className="flex gap-6 items-center mb-[10px]">
          <img
            className="w-[50px] h-[50px]"
            src="../public/images/report.jpg"
            alt="report-pic"
          />
          <h4 className="font-dm font-bold text-2xl md:text-[26px] ">
            Admin Report For Selling Old Book
          </h4>
          <h5 className="font-dm font-bold text-2xl md:text-[24px] ms-auto me-6 ">
            Date: 23 to 10
          </h5>
        </div>
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
              bookList
                .filter((item) => {
                  return item.bookType === "old";
                })
                .map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar"></div>
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
      <div className="mt-[20px]">
        <button
          onClick={downloadPDFOld}
          className="px-[10px] py-4 mr-6 text-sm font-bold text-white border bg-primary font-dm hover:text-primary hover:bg-white hover:border hover:border-primary border-radius: rounded"
        >
          Download Report
        </button>
      </div>
    </div>
  );
}
