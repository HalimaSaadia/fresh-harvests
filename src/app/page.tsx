import AboutUs from "@/components/HomePage/AboutUs";
import Banner from "@/components/HomePage/Banner";
import Products from "@/components/HomePage/Products";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Products />
      <AboutUs />
    </div>
  );
}
