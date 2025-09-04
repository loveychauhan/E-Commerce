import { useContext } from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { shopContext } from "../context/contextProvider";
import EmptyCart from "../lottiefiles/emptyCart";

export default function Cart() {
  const { productData, updateQuantity, totalCost } = useContext(shopContext);
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <main className="mx-auto mt-16 max-w-[1024px] min-h-[80vh] px-4 flex flex-col gap-6">
        <Title highlitedText="Cart" normalText="items" />
        {productData.length > 0 ? (
          <>
            {productData.map((item, index) => {
              return (
                <section
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-2 bg-white rounded-xl shadow-md gap-6 p-6 transition-transform hover:shadow-md duration-300">
                  <div className="flex items-start gap-4 ">
                    <div className="aspect-square w-32 rounded-lg overflow-hidden">
                      <img
                        className="w-full h-full object-contain"
                        src={item.image[0]}
                        alt={`Image of ${item.name}`}
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 tracking-tight">
                        {item.name}
                      </h3>

                      <div className="">
                        <p className="text-xl sm:text-2xl font-bold text-mullRed">
                          ${item.price}
                        </p>
                        <p className="text-sm text-gray-600">
                          Size: {item.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-2">
                    {" "}
                    <div className="flex items-center flex-1 justify-between border px-4 py-2 rounded-xl text-lg max-w-[120px] bg-white shadow-sm">
                      {item.quantity === 1 ? (
                        <button className="hover:scale-110 transition-transform ease-in-out ">
                          <img
                            className="w-4 h-4"
                            src={assets.bin_icon}
                            alt="Delete item"
                            onClick={(e) =>
                              updateQuantity(e, item._id, item.size, 0)
                            }
                          />
                        </button>
                      ) : (
                        <button
                          data-action="decrease"
                          className="text-gray-500 hover:text-indigo-600 transition-colors"
                          onClick={(e) =>
                            updateQuantity(e, item._id, item.size)
                          }>
                          −
                        </button>
                      )}

                      <p className="font-semibold text-gray-800">
                        {item.quantity}
                      </p>
                      <button
                        data-action="increase"
                        className="text-gray-500 hover:text-indigo-600 transition-colors"
                        onClick={(e) => updateQuantity(e, item._id, item.size)}>
                        +
                      </button>
                    </div>
                    <button className="ml-4 hover:scale-110 transition-transform">
                      <img
                        className="w-6 h-6 opacity-70 hover:opacity-100"
                        src={assets.bin_icon}
                        alt="Delete item"
                        onClick={(e) =>
                          updateQuantity(e, item._id, item.size, 0)
                        }
                      />
                    </button>
                  </div>
                </section>
              );
            })}
          </>
        ) : (
          <EmptyCart />
        )}

        {productData.length > 0 && (
          <div className="flex flex-col  items-end gap-4 my-8">
            <Title highlitedText="Your" normalText="total" />
            <h2 className="text-4xl font-bold text-mullRed">${totalCost}</h2>
            <button
              onClick={() => navigate("/place-order")}
              className="px-8 py-3 text-lg rounded-xl bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold shadow-md">
              Proceed To Checkout
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
