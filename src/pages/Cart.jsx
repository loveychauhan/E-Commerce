import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItem, products, updateQuantity } = useContext(ShopContext);
  const [productData, setProductData] = useState([]);
  let total = 0;
  let totalQuantity = 1;

  const navigate = useNavigate();

  useEffect(() => {
    let tempData = [];
    for (const id in cartItem) {
      for (let s in cartItem[id]) {
        if (cartItem[id][s] > 0) {
          totalQuantity += cartItem[id][s];
          // console.log(totalQuantity);
          tempData.push({
            id: id,
            size: s,
            quantity: cartItem[id][s],
          });
        }
      }
    }
    const data = tempData.map((item) => {
      const product = products.find((product) => product._id === item.id);
      return {
        ...product,
        size: item.size,
        quantity: item.quantity,
      };
    });

    data.forEach((item) => {
      total += item.price * item.quantity;
      // console.log(total);
    });

    setProductData(data);
  }, [cartItem]);

  const clickHandler = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <div>
      <Navbar />
      <main className="mx-4  mt-28 max-w-[1024px] mx-auto min-h-[80vh] flex flex-col">
        <Title highlitedText="Cart" normalText="items" />
        {productData.map((item, index) => {
          return (
            <section
              key={index}
              className="grid grid-cols-1 sm:grid-cols-2 bg-gray-100 rounded-[8px] gap-4 p-4 my-2 items-center ">
              <div className="flex items-start gap-4 ">
                <div className="aspect-square w-32">
                  <img
                    className="w-full h-full object-contain"
                    src={item.image[0]}
                    alt={`Image of ${item.name}`}
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-700">
                    {item.name}
                  </h3>

                  <div className="">
                    <p className="text-xl sm:text-2xl font-medium text-gray-900">
                      ${item.price}
                    </p>
                    <p className="text-gray-700">size: {item.size}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-2">
                {" "}
                <div className="flex items-center flex-1 justify-between border px-4 py-2 rounded-xl text-lg max-w-[120px] bg-white shadow-sm">
                  {/* <button
                    className="hover:text-indigo-600"
                    onClick={(e) =>
                      clickHandler(
                        e.target.value,
                        item._id,
                        size
                      )
                    }>
                    −
                  </button>
                  <p className="font-medium">{item.quantity}</p>
                  <button
                    onClick={(e) => clickHandler(e)}
                    className="hover:text-indigo-600">
                    +
                  </button> */}
                  <input
                    type="number"
                    className="w-full outline-0"
                    onChange={(e) =>
                      updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                    }
                    min={1}
                    value={item.quantity}
                  />
                </div>
                <button className="ml-4 hover:scale-105 transition-transform">
                  <img
                    className="w-6 h-6"
                    src={assets.bin_icon}
                    alt="Delete item"
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                  />
                </button>
              </div>
            </section>
          );
        })}

        {productData.length > 0 && (
          <div className="flex justify-end flex-col items-end">
            <Title highlitedText="Your" normalText="total" />
            <h2 className="text-3xl font-medium">${total}</h2>
            <button
              onClick={() => navigate("/place-order")}
              className="px-8 py-3 text-lg rounded-xl bg-blue-600 text-white font-semibold my-4">
              Proceed To checkout
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
