import { useEffect, useState } from "react";
import Flex from "../components/layout/Flex";
import { BeatLoader } from "react-spinners";
import { useFormik } from "formik";
import { Billing } from "../validation";
import axios from "axios";
import useUserInfo from "../CustomHook/useUserInfo";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../context/CartContext";
import { FaCreditCard } from "react-icons/fa";
import Swal from "sweetalert2";

const Checkout = () => {
  const [Payment, setPayment] = useState(false);

  const hanldeShowPayment = () => {
    setPayment(!Payment);
  };

  const { userId } = useUserInfo();
  const navigate = useNavigate();

  // From cart Context api (context /cartContext)
  const { productList, loading, setLoading } = useCart();

  const totalPrice = productList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const initialValues = {
    name: "",
    address: "",
    phone: "",
    city: "",
    house: "",
    email: "",
    number: "",
    expiry: "",
    cvc: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Billing,
    onSubmit: (values) => {
      setLoading(true);
      const invoice = uuidv4();
      const date = new Date();
      // console.log("address ", values);
      axios
        .post("http://localhost:5000/addAddress", {
          ...values,
          userId,
          invoiceId: invoice,
          date,
        })
        .then((res) => {
          if (res.status) {
            setLoading(true);
            axios
              .post("http://localhost:5000/addCompleteOrder", {
                invoiceId: invoice,
                address: formik.values.address,
                city: formik.values.city,
                house: formik.values.house,
                name: formik.values.name,
                productList,
                userId,
              })
              .then((res) => {
                if (res.data.status) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment Successful.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/invoice");
                  setLoading(false);
                }
              })
              .catch((err) => console.log(err));
          }
        })
        .catch((err) => console.log(err));
    },
  });

  // console.log(formik);

  // console.log(productList);

  return (
    <div className="max-w-container mx-auto p-2.5">
      <h2 className="font-dm font-bold text-[24px] md:text-[30px] mb-8">
        Billing Details
      </h2>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="w-[40%] resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0"
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="text-[#cd0404] mb-5">{formik.errors.name}</p>
          ) : (
            ""
          )}
        </div>
        <div className="my-[20px]">
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={formik.handleChange}
            value={formik.values.address}
            className="w-[40%] resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0"
          />
          {formik.errors.address && formik.touched.address ? (
            <p className="text-[#cd0404] mb-5">{formik.errors.address}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Mobile Number"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="w-[40%] resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <p className="text-[#cd0404] mb-5">{formik.errors.phone}</p>
          ) : (
            ""
          )}
        </div>
        <div className="my-[20px]">
          <input
            type="text"
            placeholder="Town / city"
            name="city"
            onChange={formik.handleChange}
            value={formik.values.city}
            className="w-[40%] resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0"
          />
          {formik.errors.city && formik.touched.city ? (
            <p className="text-[#cd0404] mb-5">{formik.errors.city}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="House Number and street name"
            name="house"
            onChange={formik.handleChange}
            value={formik.values.house}
            className="w-[40%] resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0"
          />
          {formik.errors.house && formik.touched.house ? (
            <p className="text-[#cd0404] mb-5">{formik.errors.house}</p>
          ) : (
            ""
          )}
        </div>
        <div className="mt-[20px]">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-[40%] resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0"
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="text-[#cd0404] mb-5">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>

        <h4 className="mt-[100px] font-dm font-bold text-[24px] md:text-[26px] mb-8">
          Your Order
        </h4>
        <div className="bg-[#F5F7F7] py-[34px] px-5 ">
          <Flex className="flex justify-between">
            <div className="w-[23%]">Product</div>
            <div className="w-[23%]">Price</div>
            <div className="w-[23%]">Quantity</div>
            <div className="w-[23%]">Total</div>
          </Flex>
        </div>

        {productList.map((product) => (
          <Flex
            key={product._id}
            className="flex justify-between items-center my-[34px] mx-[5]"
          >
            <div className="w-[23%] relative">
              <Flex className="flex items-center justify-between">
                <h3 className="font-dm font-bold text-sm text-primary w-[100%]">
                  {product.bookName}
                </h3>
              </Flex>
            </div>
            <div className="w-[23%]"> {product.price} </div>
            <div className="w-[23%] ">
              <span className="mx-[10px]"> {product.quantity} </span>
            </div>
            <div className="w-[23%] font-dm text-[#262626] font-bold text-2xl ">
              {product.price * product.quantity}
            </div>
          </Flex>
        ))}
        {productList.length > 0 && (
          <div>
            <div className="mt-[5px]">
              <h3 className="flex justify-end text-xl font-bold font-dm">
                Cart Totals
              </h3>
            </div>
            <div className="mt-5 ">
              <Flex className="flex justify-end gap-x-8 ">
                <h4>Total Price </h4>
                <p>{totalPrice}</p>
              </Flex>
            </div>
            <div
              className="flex items-center gap-4 justify-end mt-5  "
              onClick={hanldeShowPayment}
            >
              <FaCreditCard className="w-[40px] h-[40px]" />
              <span className="text-xl font-bold font-dm">
                Payment With Card
              </span>
            </div>
            {Payment && (
              <div className="flex flex-col mr-0 my-7 max-w-md mx-auto p-8 bg-white shadow-lg rounded-md">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    placeholder="Card Number"
                    className="w-full p-2 border rounded-md"
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <p className="text-[#cd0404] mb-5">
                      {formik.errors.number}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="tel"
                    name="expiry"
                    onChange={formik.handleChange}
                    value={formik.values.expiry}
                    placeholder="MM/YY"
                    className="w-full p-2 border rounded-md"
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <p className="text-[#cd0404] mb-5">
                      {formik.errors.expiry}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    CVC
                  </label>
                  <input
                    type="tel"
                    name="cvc"
                    onChange={formik.handleChange}
                    value={formik.values.cvc}
                    placeholder="CVC"
                    className="w-full p-2 border rounded-md"
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <p className="text-[#cd0404] mb-5">{formik.errors.cvc}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-end mt-4">
              {loading ? (
                <button className="px-24 py-4 text-sm font-bold text-white bg-primary font-dm">
                  <BeatLoader color="#36d7b7" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-24 py-4 text-sm font-bold text-white bg-primary font-dm"
                >
                  Order
                </button>
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Checkout;
