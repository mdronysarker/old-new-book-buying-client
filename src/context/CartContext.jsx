import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import useUserInfo from "../CustomHook/useUserInfo";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useUserInfo();
  const [key, setKey] = useState(0); // Add a key state

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!userId) {
          return;
        }

        const response = await axios.post(
          "http://localhost:5000/findCartItem",
          { userId }
        );

        const allData = response.data;
        const newData = allData.map((data) => ({ ...data, quantity: 1 }));
        setProductList(newData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userId, key]); // Include key in the dependency array

  const contextValue = {
    productList,
    setProductList,
    loading,
    setLoading,
    refreshCart: () => setKey((prevKey) => prevKey + 1), // Function to force a remount
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
