import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext1 = createContext();

function ShopContextProvider1({ children }) {
  const [productList, setProductList] = useState([]);

  const fetchData = async () => {
    const lists = await axios.get("http://localhost:8000/list").catch((err) => {
      console.log(err.message);
    });
    setProductList(lists.data);

  useEffect(() => {
    fetchData();
  }, []);
}

  // const addToCart = (id, size) => {
  //   if (!size) {
  //     return alert("select a size");
  //   }
  //   let cartData = structuredClone(cartItem);

  //   if (cartData[id]) {
  //     if (cartData[id][size]) {
  //       console.log("else with id same size");
  //       cartData[id][size] += 1;
  //       setCartQuantity((prev) => prev + 1);
  //     } else {
  //       console.log("else with id different size");
  //       cartData[id][size] = 1;
  //       setCartQuantity((prev) => prev + 1);
  //     }
  //   } else {
  //     console.log("else without id");
  //     cartData[id] = {};
  //     cartData[id][size] = 1;
  //     setCartQuantity((prev) => prev + 1);
  //   }
  //   setCardItem(cartData);
  // };

  // const updateQuantity = (id, size, quantity) => {
  //   let cardData = structuredClone(cartItem);
  //   cardData[id][size] = quantity;

  //   if (quantity === 0) {
  //     setCartQuantity((prev) => prev - quantity);
  //   }
  //   if (quantity > prevQuantity) {
  //     setCartQuantity((prev) => prev + 1);
  //   } else {
  //     setCartQuantity((prev) => prev - 1);
  //   }

  //   setCardItem(cardData);
  //   setPrevQuantity(quantity);
  // };

  // console.log("prevQuantity", prevQuantity);
  // console.log(cartQuantity);

  const obj = { productList };

  return <ShopContext1.Provider value={obj}>{children}</ShopContext1.Provider>;
}

export default ShopContextProvider1;
