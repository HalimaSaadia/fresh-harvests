"use client"
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const AboutUsProductCard = () => {
  return (
    <div className="rounded shadow p-1.5 bg-white">
      <div className="bg-[#F4F6F6] rounded">
        <Image
          loader={customLoader}
          src={
            "https://cdn.dotpe.in/longtail/store-items/6434302/n3hdNVR0.jpeg"
          }
          width={100}
          height={100}
          alt={"Mushrooms"}
          className="mx-auto h-[58px] w-[58px] md:h-[100px] md:w-[100px] object-cover"
        />
      </div>
      <div>
       <div className="py-1">
         <h3 className="font-semibold text-[10px] text-center text-[#212337]">
          Mushrooms
        </h3>
        <p className="text-center text-[9px]">$2.3/kg </p>
       </div>
        <Button
          variant={"outline"}
          className="text-[#212337] font-normal text-[9px] w-full hover:bg-[#FF6A1A]  hover:text-white hover:cursor-pointer h-7"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default AboutUsProductCard;
