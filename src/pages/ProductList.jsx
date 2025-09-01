import { useContext } from "react";
import Card from "../components/Card";
import { ShopContext1 } from "../context/ShopContex1";
import Title from "../components/Title";

export default function ProductList() {
  const { productList } = useContext(ShopContext1);
  return (
    <section>
      <main className="mt-28 mx-8">
        <Title highlitedText="My" normalText="Product" />

        <section
          className={`grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] pb-4  flex-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto items-start
        transition-all duration-700 ease-in-out`}>
          <Card products={productList} />
        </section>
      </main>
    </section>
  );
}
