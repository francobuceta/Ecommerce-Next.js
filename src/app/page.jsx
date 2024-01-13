import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import AboutUs from "@/components/home/AboutUs";
import BestSelling from "@/components/home/BestSelling";
import Faqs from "@/components/home/Faqs";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <AboutUs />
      {/* <BestSelling /> */}
      <Faqs />
    </>
  );
};

export default Home;
