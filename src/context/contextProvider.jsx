import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const shopContext = createContext();

function ShopContextProvider({ children }) {
  const [cartItem, setCartItem] = useState({});
  const [productData, setProductData] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [searchbtnClick, setSearchbtnClick] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [collectionProducts, setCollectionProducts] = useState(products);

  const addToCart = (id, size) => {
    if (!size) {
      return alert("Select a size");
    }
    const cartData = structuredClone(cartItem);

    if (cartData[id]) {
      if (cartData[id][size]) {
        cartData[id][size] += 1;
      } else {
        cartData[id][size] = 1;
      }
    } else {
      cartData[id] = {};
      cartData[id][size] = 1;
    }
    setCartItem(cartData);
  };

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setCollectionProducts(collectionProducts);
      return;
    }

    const filteredData = products.filter((prod) => {
      const nameMatch =
        prod.name?.toLowerCase().includes(query) ||
        prod.name?.toLowerCase().startsWith(query);
      const categoryMatch = prod.subCategory.toLowerCase().includes(query);
      return nameMatch || categoryMatch;
    });

    setCollectionProducts(filteredData);
  }, [searchQuery]);

  useEffect(() => {
    const tempData = [];
    for (const id in cartItem) {
      for (const size in cartItem[id]) {
        if (cartItem[id][size] > 0) {
          tempData.push({
            id: id,
            size: size,
            quantity: cartItem[id][size],
          });
        }
      }
    }

    let total = 0;
    let totalCartItems = 0;
    const data = tempData.map((item) => {
      const product = products.find((prod) => prod._id === item.id);
      const newData = {
        ...product,
        size: item.size,
        quantity: item.quantity,
      };
      total += newData.quantity * newData.price;
      totalCartItems += newData.quantity;
      return newData;
    });
    setProductData(data);
    setTotalCost(total);
    setCartQuantity(totalCartItems);
  }, [cartItem]);

  const updateQuantity = (e, id, size, quantity) => {
    const cartData = structuredClone(cartItem);
    if (quantity === 0) {
      cartData[id][size] = 0;
    }
    if (e.target.dataset.action === "decrease") {
      cartData[id][size] -= 1;
    } else if (e.target.dataset.action === "increase") {
      cartData[id][size] += 1;
    }
    setCartItem(cartData);
  };
  // console.log(collectionProducts);
  const user = {
    addToCart,
    productData,
    updateQuantity,
    cartQuantity,
    totalCost,
    setSearchbtnClick,
    searchbtnClick,
    setSearchQuery,
    searchQuery,
    collectionProducts,
  };
  return <shopContext.Provider value={user}>{children}</shopContext.Provider>;
}

export default ShopContextProvider;
