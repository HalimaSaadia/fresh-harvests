"use client";
import ProductCard from "@/components/HomePage/ProductCard";
import { fruits } from "@/components/HomePage/Products";
import QuantityCounter from "@/components/Product/QuantityCounter";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const page = () => {
  return (
    <MaxWidthWrapper className="py-20">
      {/* Product Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            <SwiperSlide>
              <Image
                src={"/images/coconut1.jpg"}
                height={400}
                width={500}
                alt={"coconut"}
                className=" mx-auto"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/images/coconut2.png"}
                height={500}
                width={600}
                alt={"coconut"}
                className=" mx-auto"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          {/* information Section */}
          <div>
            <h3 className="text-[#749B3F] bg-gray-100 font-semibold inline-block px-2 rounded">
              Fruits
            </h3>
            <h1 className="text-3xl lg:text-5xl font-bold  text-[#212337] my-4">
              Coconut
            </h1>
            <div className="flex my-4 gap-1 items-center">
              <Star fill="#FFB848" color="#FFB848" className="w-4 h-4" />
              <Star fill="#FFB848" color="#FFB848" className="w-4 h-4" />
              <Star fill="#FFB848" color="#FFB848" className="w-4 h-4" />
              <Star fill="#FFB848" color="#FFB848" className="w-4 h-4" />
              <Star fill="#FFB848" color="#FFB848" className="w-4 h-4" />
              <div className="flex items-center ml-2">
                <h3 className="font-bold md:text-lg text-[#212337]">5.0 </h3>{" "}
                <span className="text-sm md:text-base inline-block font-normal text-[#212337]">
                  {" "}
                  &nbsp;(1 Review)
                </span>
              </div>
            </div>
            <h3 className="text-[#FF6A1A]  font-bold my-4 text-2xl md:text-[32px]">
              $6.3/kg
            </h3>
            <p className="text-[#4A4A52]">
              From our farm directly to your door, our fresh coconuts are
              harvested at the peak of ripeness, offering you a sweet, hydrating
              treat full of flavor. Packed with natural nutrients, coconut is
              perfect for a variety of culinary uses, from smoothies to savory
              dishes, or even for a refreshing drink straight from the shell.
            </p>
          </div>
          {/* Counter Section */}
          <QuantityCounter />

          {/* cart section */}
          <div className="flex gap-7 flex-wrap justify-center md:justify-start">
            <Button className="bg-[#F4F6F6] hover:bg-[#F4F6F6] text-lg text-[#4A4A52] font-bold py-5">
              <Heart
                size={25}
                className="inline-block"
                color="#D9D9D9"
                fill="#D9D9D9"
              />{" "}
              Save As Favorite
            </Button>
            <Button className="bg-[#FF6A1A] hover:bg-[#FF6A1A] text-lg text-[#ffffff] font-bold py-5">
              <ShoppingCart
                size={25}
                className="inline-block"
                color="#ffffff"
                fill="#ffffff"
              />{" "}
              Save As Favorite
            </Button>
          </div>
        </div>
      </div>

      {/* Description and reviews */}
      <Tabs defaultValue="description" className="py-20">
        <TabsList className="bg-transparent w-max mx-auto py-10">
          <TabsTrigger
            className="border border-[#D9D9D9] data-[state=active]:bg-[#749B3F] data-[state=active]:text-white text-sm md:text-lg rounded py-4 px-3 md:px-6  text-[#A6A6A6]"
            value="description"
          >
            Description{" "}
          </TabsTrigger>
          <TabsTrigger
            className="border border-[#D9D9D9] data-[state=active]:bg-[#749B3F] data-[state=active]:text-white text-sm md:text-lg rounded py-4 px-3 md:px-6 ml-3"
            value="reviews"
          >
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <div className="bg-[#F4F6F6] max-w-4xl rounded-xl p-8">
              <p className="text-[#4A4A52] sm:text-sm md:text-lg font-semibold">
                {" "}
                Our coconuts are sustainably grown, ensuring the best quality
                and taste. Each coconut is handpicked and carefully prepared,
                offering you the freshest product possible. Rich in healthy
                fats, electrolytes, and essential nutrients, coconuts provide
                both hydration and nourishment. Whether you&apos;re using the
                water, flesh, or milk, our coconuts bring versatility to your
                kitchen while supporting healthy living.
              </p>
              <p className="text-[#4A4A52] sm:text-sm md:text-lg mt-5 font-semibold">
                {" "}
                Perfect for smoothies, desserts, curries, and more — let the
                natural sweetness of the coconut elevate your recipes. Enjoy the
                tropical goodness in its purest form, directly from nature.
              </p>
            </div>
        </TabsContent>
        <TabsContent value="reviews">
         <div className="bg-[#F4F6F6] max-w-4xl rounded-xl p-8">
              <p className="text-[#4A4A52] sm:text-sm md:text-lg font-semibold">
                {" "}
                I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.
              </p>
            
            </div>
        </TabsContent>
      </Tabs>

      {/* Related Product Section */}
     <div className="py-20">
      <SectionHeading subTitle="Our Products" title="Related Products" description="" />
       <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
         {fruits.slice(0, 4).map((item, idx) => (
              <ProductCard key={idx} data={item} />
            ))}
      </div>
     </div>
    </MaxWidthWrapper>
  );
};

export default page;
