import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow mx-4 sm:mx-8 md:mx-16 mt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] sm:h-[70vh] rounded-lg overflow-hidden shadow-lg">
          <img
            src={assets.aboutHero}
            alt="e-commerceApp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
              CodeWare Store
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl mt-2 font-medium">
              Your Daily Go-To Store
            </p>
          </div>
        </section>

        {/* New Sections Below */}
        {/* <Features />
        <Categories />
        <Testimonials />
        <Newsletter /> */}
      </main>

      <footer className="mx-4 sm:mx-8 md:mx-16 mt-16">
        <Footer />
      </footer>
    </div>
  );
}
