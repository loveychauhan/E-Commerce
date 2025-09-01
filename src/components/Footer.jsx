import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <>
      <footer className="flex text-gray-700 items-center flex-col md:flex-row  justify-start md:justify-between">
        <section className="max-w-[360px] self-start ">
          <div className="max-w-[120px] my-4">
            <NavLink to="/">
              <h1 className="text-3xl font-bold text-black ">Neu</h1>
            </NavLink>
          </div>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex velit
            et praesentium delectus ipsa minus, perferendis officiis, magnam
            unde, commodi corporis dolore minima consequatur numquam. Explicabo
            beatae laborum molestias!
          </p>
        </section>
        <nav className="p-4 self-start space-y-2">
          <h2 className="font-medium text-2xl my-4">Comapny</h2>
          <div>
            <ul className="">
              <NavLink to="/" className="w-full">
                <li>Home</li>
              </NavLink>
              <NavLink to="/collection" className="w-full">
                <li>Collections</li>
              </NavLink>
              <NavLink to="/about" className="w-full">
                <li>About</li>
              </NavLink>
              <NavLink to="/contact" className="w-full">
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
        </nav>
        <section className="p-4 self-start space-y-2">
          <h2 className="font-medium text-2xl my-4">Get in touch</h2>
          <p>+91-6382930828</p>
          <p>email@gmail.com</p>
        </section>
      </footer>
      <section className="my-4 grid gap-4  text-center">
        <hr />
        <p className="font-medium">
          Copyright 2025@ neu.pvt@onlineStore.com - All Right Reserved.
        </p>
      </section>
    </>
  );
}
