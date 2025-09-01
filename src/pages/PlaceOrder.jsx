import { useContext, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import { shopContext } from "../context/contextProvider";

function PlaceOrder() {
  const [shipping, setShipping] = useState(10);
  const [ischecked, setIsChecked] = useState("code");

  const { totalCost } = useContext(shopContext);

  //   const checkboxHandler = (e) => {
  //     console.log(e.target.checked);
  //     e.target.checked = true;
  //   };
  return (
    <>
      <Navbar />
      <main className="mx-4 sm:mx-8 md:mx-16 mt-28 ">
        <div className="flex items-start mb-4">
          <Title highlitedText="Delivery " normalText="Information" />
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          <form action="" className="grid gap-4 grid-cols-2">
            <input className="input" type="text" placeholder="First Name" />
            <input className="input" type="text" placeholder="Last Name" />

            <input
              className="input col-span-2"
              type="email"
              placeholder="Email"
            />

            <input className="input" type="text" placeholder="City" />
            <input className="input" type="text" placeholder="State" />
            <input
              className="input col-span-2"
              type="email"
              placeholder="Street"
            />
            <input className="input" type="text" placeholder="Zip/PinCode" />
            <input className="input" type="text" placeholder="Country" />

            <input
              className="input col-span-2"
              type="text"
              placeholder="Phone Number"
            />
          </form>

          <section>
            <div className="mb-4">
              <div className="mb-2">
                <h3 className="text-3xl">
                  <span className="text-mullRed">Cart </span> <span>Total</span>
                </h3>
              </div>
              <div className="border-b-[1px] flex justify-between items-center py-2">
                <p>Sub Total</p>
                <p>${totalCost}</p>
              </div>
              <div className="border-b-[1px] flex justify-between items-center py-2">
                <p>Shipping</p>
                <p>${shipping}</p>
              </div>
              <div className="flex items-center justify-between py-2">
                <p>Total</p>
                <p className="font-semibold">${totalCost + shipping}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-3xl  ">
                <span className="text-mullRed">Payment </span>{" "}
                <span>Method</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-start items-stretch">
              <div
                onClick={() => setIsChecked("razorpay")}
                className="flex items-center justify-between gap-4 border rounded-lg px-3 lg:px-5 lg:py-3 py-1.5 cursor-pointer transition-all duration-300 hover:shadow-sm">
                <div
                  className={`w-4 h-4 rounded-full border border-gray-600 ${
                    ischecked === "razorpay" ? "bg-green-400" : ""
                  }`}></div>
                <img
                  className="w-20  lg:w-24 object-contain"
                  src={assets.razorpay_logo}
                  alt="Razorpay"
                />
              </div>

              <div
                onClick={() => setIsChecked("stripe")}
                className="flex items-center justify-between gap-4 border rounded-lg px-3 lg:px-5 lg:py-3 py-1.5  cursor-pointer transition-all duration-300 hover:shadow-sm">
                <div
                  className={`w-4 h-4 rounded-full border border-gray-600 ${
                    ischecked === "stripe" ? "bg-green-400" : ""
                  }`}></div>
                <img
                  className="w-16 lg:w-24 object-contain"
                  src={assets.stripe_logo}
                  alt="Stripe"
                />
              </div>

              <div
                onClick={() => setIsChecked("cod")}
                className="flex items-center justify-between gap-4 border rounded-lg px-3 lg:px-5 lg:py-3 py-1.5  cursor-pointer transition-all duration-300 hover:shadow-sm">
                <div
                  className={`w-4 h-4 rounded-full border border-gray-600 ${
                    ischecked === "cod" ? "bg-green-400" : ""
                  }`}></div>
                <p className="text-gray-700 font-medium">Cash On Delivery</p>
              </div>
            </div>

            <div className="my-4 flex">
              <button className="px-8 w-full  rounded-[8px] py-2 border border-blue-500 bg-blue-500 text-white text-lg">
                Proceed
              </button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default PlaceOrder;
