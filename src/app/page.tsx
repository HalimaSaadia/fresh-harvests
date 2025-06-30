import AboutUs from "@/components/HomePage/AboutUs";
import Banner from "@/components/HomePage/Banner";
import Products from "@/components/HomePage/Products";
import SeasonalFruits from "@/components/HomePage/SeasonalFruits";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Products />
      <AboutUs />
      <SeasonalFruits />
    </div>
  );
}
