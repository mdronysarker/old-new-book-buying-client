import { useEffect, useState } from "react";
import Flex from "../components/layout/Flex";
import { ImCross } from "react-icons/im";
import Image from "../components/layout/Image";
import useUserInfo from "../CustomHook/useUserInfo";
import axios from "axios";
import Swal from "sweetalert2";

const Cart = () => {
  const [productList, setProductList] = useState([]);
  // console.log(productList);

  const totalPrice = productList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const { userId } = useUserInfo();

  const changeQuantity = (type, index) => {
    const updatedList = [...productList];

    if (
      type === "increase" &&
      productList[index].quantity < productList[index].bookQuantity
    ) {
      updatedList[index].quantity++;
    } else if (type === "increase") {
      Swal.fire({
        icon: "error",
        title: `Only ${productList[index].bookQuantity} is available`,
        text: "You cannot add more than that",
        timer: 1000,
      });
      return;
    }

    if (type === "decrease" && productList[index].quantity > 1) {
      updatedList[index].quantity--; // Decrement the quantity
    } else if (type === "decrease") {
      Swal.fire({
        icon: "error",
        title: "Zero items are not allowed",
        text: "You cannot order zero items",
        timer: 1000,
      });
      return;
    }

    setProductList(updatedList);
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/findCartItem", { userId })
      .then((res) => {
        const allData = res.data;
        const newData = allData.map((data) => ({ ...data, quantity: 1 }));
        setProductList(newData);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  // console.log(productList);

  return (
    <div className="max-w-container mx-auto p-2.5">
      <h2 className="mb-10 font-dm text-4xl font-bold">Cart</h2>
      <div className="bg-[#F5F7F7] py-[34px] px-5 ">
        <Flex className="flex justify-between">
          <div className="w-[23%]">Product</div>
          <div className="w-[23%]">Price</div>
          <div className="w-[23%]">Quantity</div>
          <div className="w-[23%]">Total</div>
        </Flex>
      </div>
      <div className="py-[34px] px-5">
        {productList.map((product, index) => (
          <Flex key={product._id} className="flex justify-between items-center">
            <div className="w-[23%] relative">
              <Flex className="flex justify-between items-center">
                <ImCross className="w-[100%]" />
                <div className="w-[100%] mb-6">
                  <Image className="w-14" imgsrc={product.image} />
                </div>
                <h3 className="font-dm font-bold text-sm text-primary w-[100%]">
                  {product.bookName}
                </h3>
              </Flex>
            </div>
            <div className="w-[23%]">{product.price}</div>
            <div className="w-[23%] ">
              <span className=" font-dm text-[16px] border border-[#767676] py-[3px] px-[21px]">
                <button
                  onClick={() => {
                    changeQuantity("decrease", index);
                  }}
                >
                  -
                </button>
                <span className="mx-[10px]"> {product.quantity}</span>
                <button
                  onClick={() => {
                    changeQuantity("increase", index);
                  }}
                >
                  +
                </button>
              </span>
            </div>
            <div className="w-[23%] font-dm text-[#262626] font-bold text-2xl ">
              {product.price * product.quantity}
            </div>
          </Flex>
        ))}
      </div>

      <div>
        <h3 className="flex justify-end font-dm font-bold text-xl">
          Cart Totals
        </h3>
      </div>
      <div className="mt-8 ">
        <Flex className="flex justify-end gap-x-8 ">
          <h4>Total Price </h4>
          <p>${totalPrice}</p>
        </Flex>
        <Flex className="flex justify-end gap-x-8 mt-3 ">
          <h4>Service Charge </h4>
          <p>32$</p>
        </Flex>
      </div>
      <div className="flex justify-end mt-4">
        <button className="bg-primary py-4 px-24 font-dm text-sm font-bold text-white">
          Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
