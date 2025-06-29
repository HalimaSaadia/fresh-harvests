// @ts-nocheck
"use client";

import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import { Button } from "../ui/button";

const ProductCard = ({ data }) => {
  const { name, image, price } = data;
  return (
    <div className="rounded shadow p-3 ">
      <div className="bg-[#F4F6F6] rounded  p-3">
        <Image
          loader={customLoader}
          src={image}
          width={200}
          height={200}
          alt={name}
          className="mx-auto"
        />
      </div>
      <div>
        <h3 className="font-semibold text-xl text-center text-[#212337]">
          {name}
        </h3>
        <p className="text-center my-2">$ {price}/kg </p>
        <Button
          variant={"outline"}
          className="text-[#212337] font-normal w-full hover:bg-[#FF6A1A]  hover:text-white hover:cursor-pointer"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
