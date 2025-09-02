import { Link } from "react-router-dom";

export default function Card({ products }) {
  return products?.map((product) => {
    return (
      <article
        key={product._id}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <Link to={`/product/${product._id}`} className="block h-full">
          <div className="relative overflow-hidden aspect-[4/5]">
            <img
              src={product.image[0]}
              alt={`Image of ${product.name}`}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-4 flex flex-col gap-2">
            <p className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-mullRed transition-colors duration-200">
              {product.name}
            </p>
            <p className="text-sm font-bold text-mullRed tracking-wide">
              ₹ {product.price.toLocaleString("en-IN")}
            </p>
          </div>
        </Link>
      </article>
    );
  });
}
