import { useEffect, useState } from "react";
import { products } from "../assets/assets";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Collection() {
  const [allCollection, setAllCollection] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [priceSorting, setPriceSorting] = useState("");

  useEffect(() => {
    let allProduct = [...products];

    if (category.length > 0) {
      allProduct = allProduct.filter((product) =>
        category.includes(product.category.toLowerCase())
      );
    }
    if (subCategory.length > 0) {
      allProduct = allProduct.filter((product) =>
        subCategory.includes(product.subCategory.toLowerCase())
      );
    }

    if (priceSorting === "lowtohigh") {
      allProduct = allProduct.sort((a, b) => a.price - b.price);
    } else if (priceSorting === "hightolow") {
      allProduct = allProduct.sort((a, b) => b.price - a.price);
    }
    setAllCollection(allProduct);
  }, [category, subCategory, priceSorting]);

  // let filtered = [];

  const categoryHandler = (e) => {
    const selectedCategory = e.target.value.toLowerCase();

    let updatedChecked;
    if (e.target.checked) {
      updatedChecked = [...category, selectedCategory];
    } else if (!e.target.checked) {
      updatedChecked = category.filter((item) => item !== selectedCategory);
    }
    setCategory(updatedChecked);
  };

  const subCategoryHandler = (e) => {
    const selectedCategory = e.target.value.toLowerCase();
    let updatedChecked;
    if (e.target.checked) {
      updatedChecked = [...subCategory, selectedCategory];
    } else if (!e.target.checked) {
      updatedChecked = subCategory.filter((item) => item !== selectedCategory);
    }
    setSubCategory(updatedChecked);
  };

  const optionsHandler = (e) => {
    const sortOption = e.target.value.toLowerCase();
    setPriceSorting(sortOption);
  };

  return (
    <div>
      <Navbar />

      <main className="mx-4 sm:mx-8 md:mx-16 mt-28 ">
        <section className="flex items-center flex-wrap gap-4 justify-between my-8">
          <h2 className=" text-2xl font-medium ">Filter—</h2>
          <select
            name=""
            id=""
            className="outline-0 p-2 border-[1px] "
            onChange={(e) => optionsHandler(e)}>
            <option className="sort" value="">
              Sort By: Relevant
            </option>
            <option className="sort" value="lowToHigh">
              Price: Low to High
            </option>
            <option className="sort" value="HighToLow">
              Price: High to Low
            </option>
          </select>
        </section>

        <section className="flex flex-col md:flex-row gap-8">
          <section className="flex-shrink-0 w-full md:w-[240px]">
            <button className="px-4 py-2 border-[1px] rounded-xl]">
              Clear All
            </button>
            <div className="flex flex-col gap-6">
              <div className=" bg-white border border-gray-200 rounded-xl p-6 shadow-sm ">
                <p className="mb-4 font-medium">Category</p>
                <form className="flex flex-wrap md:items-start md:flex-col items-center justify-between gap-4">
                  {[
                    { id: "women", label: "Women" },
                    { id: "men", label: "Men" },
                    { id: "kids", label: "Kids" },
                  ].map(({ id, label }) => (
                    <label
                      key={id}
                      htmlFor={id}
                      className="flex items-center gap-2 cursor-pointer transition-colors hover:text-mullRed">
                      <input
                        type="checkbox"
                        id={id}
                        value={label}
                        onChange={(e) => categoryHandler(e)}
                        className="w-4 h-4 accent-mullRed cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {label}
                      </span>
                    </label>
                  ))}
                </form>
              </div>

              <div className=" bg-white border border-gray-200 rounded-xl p-6 shadow-sm ">
                <p className="mb-4 font-medium">Subcategory</p>

                <form className="flex flex-wrap md:items-start md:flex-col items-center justify-between gap-4">
                  {[
                    { id: "topwear", label: "Topwear" },
                    { id: "bottomwear", label: "Bottomwear" },
                    { id: "winterwear", label: "Winterwear" },
                  ].map(({ id, label }) => (
                    <label
                      key={id}
                      htmlFor={id}
                      className="flex items-center gap-2 cursor-pointer transition-colors hover:text-mullRed">
                      <input
                        type="checkbox"
                        id={id}
                        value={label}
                        onChange={(e) => subCategoryHandler(e)}
                        className="w-4 h-4 accent-mullRed cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {label}
                      </span>
                    </label>
                  ))}
                </form>
              </div>
            </div>
          </section>

          <section className="grid items-center overflow-scroll sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <Card
              products={allCollection.length > 0 ? allCollection : products}
            />
          </section>
        </section>
      </main>
      <footer className="mx-4 sm:mx-8 md:mx-16 mt-24">
        <Footer />
      </footer>
    </div>
  );
}
