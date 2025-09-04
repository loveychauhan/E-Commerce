import { useContext } from "react";
import { assets } from "../assets/assets";
import BestSeller from "../components/BestSeller";
import EmailNewsLetter from "../components/EmailNewsLetter";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import OurPolicy from "../components/OurPolicy";
import Title from "../components/Title";
import { shopContext } from "../context/contextProvider";

export default function Home() {
  const { searchbtnClick } = useContext(shopContext);
  const offset = searchbtnClick ? "mt-10" : "mt-20";
  return (
    <>
      <main
        className={`mx-4 sm:mx-8 md:mx-16 ${offset} transition-all duration-200 ease-in-out`}>
        <section className=" border mb-16">
          <Hero />
        </section>
        <section className="grid gap-24">
          <Title
            highlitedText="Latest"
            normalText="Collections"
            details="Shop the latest trend now with the best discount on your favorite drip."
          />
          <LatestCollections />
          <Title
            highlitedText="Best "
            normalText="Seller"
            details="Today's Best Seller Items, trendy & pocket friendly."
          />
          <BestSeller />
        </section>
        <section className="grid gap-8 my-24">
          <Title highlitedText="Our " normalText="Policy" />
          <section className="grid grid-cols-1 items-center justify-center gap-16 lg:grid-cols-3">
            <OurPolicy
              image={assets.exchange_icon}
              heading="Easy exchange policy"
              description="We offer hassel free exchange policy"
            />
            <OurPolicy
              image={assets.quality_icon}
              heading="7 days return policy"
              description="We provide 7 days free return policy"
            />
            <OurPolicy
              image={assets.support_img}
              heading="Best customer support "
              description="We provide 24&#10005;7 customer support"
            />
          </section>
        </section>
        <section className="my-24 text-center">
          <EmailNewsLetter />
        </section>
      </main>
      <footer className="mx-4 sm:mx-8 md:mx-16">
        <Footer />
      </footer>
    </>
  );
}
