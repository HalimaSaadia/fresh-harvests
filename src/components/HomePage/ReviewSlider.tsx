"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewer1  from "@/assets/reveiwer1.png"
import reviewer2  from "@/assets/reveiwer2.png"
import reviewer3  from "@/assets/reviewer3.png"

const ReviewSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper "
    >
      {reviews?.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div className="grid lg:grid-cols-3 gap-8 pb-20 items-center mt-16">
            <div className="lg:col-span-1">
                <Image src={item.profileImage} height={396} width={287} alt={item.authorName} className="rounded-full mx-auto" />
            </div>
            <div className="lg:col-span-2">
                <div className="bg-[#F4F6F6] max-w-2xl rounded-xl p-8">
                    <p className="text-[#4A4A52] sm:text-sm md:text-xl">{item.review}</p>
                    <h3 className=" sm:text-sm md:text-xl my-8"> <span className="inline-block font-bold">{item.authorName}</span> <span className="text-[#4A4A52]"> - {item.authorProfession}</span></h3>
                </div>
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const reviews = [
  {
    review:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    authorName: "John Doe",
    authorProfession:"Professional Chef",
    profileImage: reviewer1,
  },
  {
    review:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    authorName: "John Doe",
    authorProfession:"Professional Chef",
    profileImage: reviewer2,
  },
  {
    review:
      "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.",
    authorName: "John Doe",
    authorProfession:"Professional Chef",
    profileImage: reviewer3,
  },
  
];

export default ReviewSlider;