import { useEffect, useState } from "react";
import useUserInfo from "../CustomHook/useUserInfo";
import html2pdf from "html2pdf.js";
import axios from "axios";

const Invoice = () => {
  const [address, setAddress] = useState([]);
  const [productList, setProductList] = useState([]);
  const { userId } = useUserInfo();
  const totalPrice = productList.reduce(
    (total, item) => total + item.singlePrice * item.quantity,
    0
  );

  useEffect(() => {
    axios
      .post("http://localhost:5000/getAddress", { userId })
      .then((res) => setAddress(res.data))
      .catch((err) => console.log(err));
  }, [userId]);

  useEffect(() => {
    axios;
    axios
      .post("http://localhost:5000/getCheckoutList", { userId })
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  // console.log(productList);

  // For download invoice pdf

  const downloadPDF = () => {
    const content = document.getElementById("invoice");
    const pdfOptions = {
      margin: 10,
      filename: "download.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf(content, pdfOptions);
  };

  return (
    <div>
      <section className="py-20 bg-white max-w-container mx-auto p-2.5 mt-12">
        {address.map((item, i) => (
          <div id="invoice" key={i}>
            <div className=" bg-white">
              <article className="overflow-hidden">
                <div className="bg-[white] rounded-b-md">
                  <div className="p-9">
                    <div className="space-y-6 text-slate-700">
                      <p className="text-xl font-extrabold tracking-tight uppercase font-body">
                        Invoice
                      </p>
                    </div>
                  </div>
                  <div className="p-9">
                    <div className="flex w-full">
                      <div className="grid grid-cols-4 gap-12">
                        <div className="text-sm font-light text-slate-500">
                          <p className="text-sm font-normal text-slate-700">
                            Invoice Id:
                          </p>
                          <p className="text-sm font-normal text-slate-700">
                            {item.invoiceId}
                          </p>
                        </div>
                        <div className="text-sm font-light text-slate-500">
                          <p className="text-sm font-normal text-slate-700">
                            Billed To
                          </p>
                          <p>user name : {item.name}</p>
                          <p>address : {item.address}</p>
                          <p>Mobile : {item.phone}</p>
                          <p>House No : {item.house}</p>
                        </div>
                        <div className="text-sm font-light text-slate-500">
                          <p className="mt-2 text-sm font-normal text-slate-700">
                            Date of Issue
                          </p>
                          <p> {item?.date} </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-9">
                    <div className="flex flex-col mx-0 mt-8">
                      <table className="min-w-full divide-y divide-slate-500">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0"
                            >
                              Product Name
                            </th>
                            <th
                              scope="col"
                              className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell"
                            >
                              price
                            </th>
                            <th
                              scope="col"
                              className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0"
                            >
                              Total price
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {productList.map((product) => (
                            <tr
                              key={product._id}
                              className="border-b border-slate-200"
                            >
                              <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                <div className="font-medium text-slate-700">
                                  {product.bookName}
                                </div>
                              </td>
                              <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                {product.quantity}
                              </td>
                              <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                ${product.singlePrice}
                              </td>
                              <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                ${product.price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <th
                              scope="row"
                              colSpan="3"
                              className="hidden pt-4 pl-6 pr-3 mt-5 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0"
                            >
                              All Total
                            </th>
                            <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                              ${totalPrice}
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
        <div className="flex justify-end">
          <button
            onClick={downloadPDF}
            className="bg-primary py-4 px-24 font-dm text-sm font-bold text-white border  hover:text-primary hover:bg-white hover:border hover:border-primary"
          >
            Download Invoice
          </button>
        </div>
      </section>
    </div>
  );
};

export default Invoice;
