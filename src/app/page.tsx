import AboutUs from "@/components/HomePage/AboutUs";
import Banner from "@/components/HomePage/Banner";
import Blog from "@/components/HomePage/Blog";
import Products from "@/components/HomePage/Products";
import SeasonalFruits from "@/components/HomePage/SeasonalFruits";
import Testimonial from "@/components/HomePage/Testimonial";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Products />
      <AboutUs />
      <SeasonalFruits />
      <Testimonial />
      <Blog />
    </div>
  );
}
