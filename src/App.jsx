import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import SearchBar from "./components/SearchBar";
import { shopContext } from "./context/contextProvider";
import { useContext } from "react";

function App() {
  const { searchbtnClick } = useContext(shopContext);

  return (
    <>
      <Navbar />
      <section
        className={`mx-4 sm:mx-8 md:mx-16 ${
          searchbtnClick ? "mt-20 opacity-100 scroll-my-0" : "opacity-0"
        } transition-all duration-200 ease-in-out`}>
        <SearchBar searchbtnClick={searchbtnClick} />
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
