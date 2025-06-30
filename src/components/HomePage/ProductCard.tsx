"use client";

import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import { Button } from "../ui/button";
import { Product } from "./Products";
import Link from "next/link";
interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }:ProductCardProps) => {
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
          className="mx-auto h-[120px] w-[150px] md:h-[200px] md:w-[200px] object-cover"
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
          <Link href={`/product/${name}`}>Add To Cart</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
