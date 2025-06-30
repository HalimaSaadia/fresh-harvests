"use client";
import QuantityCounter from "@/components/Product/QuantityCounter";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Star } from "lucide-react";
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
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
