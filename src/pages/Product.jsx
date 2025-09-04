import { useParams } from "react-router-dom";
import { products } from "../assets/assets";
import Navbar from "../components/Navbar";
import Rating from "../components/Rating";
import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import { shopContext } from "../context/contextProvider";
// import { ShopContext } from "../context/ShopContext";

function Product() {
  const { productId } = useParams();
  const allProducts = products;
  const [myProd] = allProducts.filter((prod) => prod._id === productId);
  const [toggle, setToggle] = useState("description");
  const [sizeSelected, setSizeSelected] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productId]);
  const { addToCart } = useContext(shopContext);
  const releatedProducts = allProducts
    .filter(
      (product) =>
        product.category === myProd.category &&
        product.subCategory === myProd.subCategory
    )
    .filter((item) => item._id !== myProd._id)
    .slice(0, 5);

  return (
    <>
      <Navbar />

      <main className="mx-4 max-w-[1040px] md:mx-auto  mt-28 ">
        <section className="grid grid-cols-1 items-start justify-items-center  gap-8 md:grid-cols-2">
          <div>
            <img src={myProd.image[0]} alt={`Image of ${myProd.name}`} />
          </div>
          <article className="text-gray-700  space-y-4">
            <h2 className="text-2xl text-gray-900  font-medium">
              {myProd.name}
            </h2>
            <div className="flex items-center gap-2">
              <Rating />
              <p>(5) </p>
            </div>
            <h1 className="text-3xl  text-gray-900  font-medium">
              ${myProd.price}
            </h1>
            <p className="text-sm">{myProd.description}</p>
            <h3 className="text-gray-900 text-lg font-semibold">Select Size</h3>
            <div
              className="flex items-center justify-between gap-2 max-w-max
          flex-wrap">
              {" "}
              {myProd.sizes.map((size) => {
                return (
                  <button
                    key={size}
                    onClick={(e) => setSizeSelected(size)}
                    className={`px-4 py-2 border-gray-300 border-2 rounded-md bg-white text-sm text-gray-700 shadow-sm  ${
                      sizeSelected === size ? "border-mullRed " : ""
                    }`}>
                    {size}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => addToCart(myProd._id, sizeSelected)}
              className="px-4 text-gray-900 font-medium py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 shadow-sm ">
              Add to Cart
            </button>
            <hr className="my-8" />
            <div className="text-sm">
              <p>100% original product</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy returns and excahange policy within 7 day.</p>
            </div>
          </article>
        </section>

        <section className="my-28">
          <div className="flex  border-gray-300">
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                toggle === "description"
                  ? "border-b-2  border-mullRed text-mullRed"
                  : "text-gray-500 hover:text-mullRed"
              }`}
              onClick={() => setToggle("description")}>
              Description
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                toggle === "reviews"
                  ? "border-b-2 border-mullRed text-mullRed"
                  : "text-gray-500 hover:text-mullRed"
              }`}
              onClick={() => setToggle("reviews")}>
              Reviews (5)
            </button>
          </div>

          <div className="border border-gray-200 rounded-b-xl p-6 max-h-[480px] overflow-y-auto space-y-6 bg-white shadow-sm scrollbar-hide transition-all duration-300">
            {toggle === "description" && (
              <>
                <p className="text-sm leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  voluptatum blanditiis porro consequatur dolore animi ducimus,
                  praesentium aut veritatis voluptatibus, nihil quam maxime
                  eveniet dicta, suscipit quaerat culpa iste cumque!
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  voluptatum blanditiis porro consequatur dolore animi ducimus,
                  praesentium aut veritatis voluptatibus, nihil quam maxime
                  eveniet dicta, suscipit quaerat culpa iste cumque!
                </p>
              </>
            )}

            {toggle === "reviews" && (
              <>
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-lg p-4 shadow-sm space-y-2">
                    <p className="text-sm font-semibold text-mullRed">Lovey</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto excepturi soluta mollitia quos eligendi modi.
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        <section className="mb-28">
          <Title highlitedText="Related" normalText="Products" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8 ">
            <Card products={releatedProducts} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Product;
