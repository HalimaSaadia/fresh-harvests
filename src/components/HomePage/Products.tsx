"use client";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import SectionHeading from "../shared/SectionHeading";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProductCard from "./ProductCard";

export interface Product {
  name: string;
  price: number;
  image: string;
}
const Products = () => {
  const allProducts: Product[] = [
    {
      name: "Mushroom",
      price: 2.3,
      image:
        "https://t3.ftcdn.net/jpg/01/68/23/42/360_F_168234229_V70FDH4C4x6jXgh3UrYJ7DFYQGwXXvdt.jpg",
    },
    {
      name: "Mustard",
      price: 2.3,
      image:
        "https://bd-live-21.slatic.net/kf/Sbf3cf5a6b5ae45eea4da676472339ae6K.jpg",
    },
    {
      name: "Orange",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdUlevaWPqu7lObc3QkkGCZEbkRaN_yA-bw&s",
    },
    {
      name: "Pomegranate",
      price: 2.3,
      image:
        "https://agribegri.com/productimage/8d9000c65a836f2036f8ea5227b3e5fd-06-12-19-10-01-41.webp",
    },
    {
      name: "Kiwi",
      price: 2.3,
      image: "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
    },
    {
      name: "Coconut",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrfZkm098rTCdV_i71F0tPBxZ8-qyyGKs7Q&s",
    },
    {
      name: "Guava",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBePRa9mErJGZpF7C9ZuD4RehKCcFyySQOEw&s",
    },
    {
      name: "Eggplant",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitYipbBtEAkVKfz_jdXp3saKbLosEkWl9Tg&s",
    },
  ];
  const fruits: Product[] = [
    {
      name: "Orange",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdUlevaWPqu7lObc3QkkGCZEbkRaN_yA-bw&s",
    },
    {
      name: "Pomegranate",
      price: 2.3,
      image:
        "https://agribegri.com/productimage/8d9000c65a836f2036f8ea5227b3e5fd-06-12-19-10-01-41.webp",
    },
    {
      name: "Kiwi",
      price: 2.3,
      image: "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
    },
    {
      name: "Coconut",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUrfZkm098rTCdV_i71F0tPBxZ8-qyyGKs7Q&s",
    },
    {
      name: "Guava",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBePRa9mErJGZpF7C9ZuD4RehKCcFyySQOEw&s",
    },
    {
      name: "Orange",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdUlevaWPqu7lObc3QkkGCZEbkRaN_yA-bw&s",
    },
    {
      name: "Pomegranate",
      price: 2.3,
      image:
        "https://agribegri.com/productimage/8d9000c65a836f2036f8ea5227b3e5fd-06-12-19-10-01-41.webp",
    },
    {
      name: "Kiwi",
      price: 2.3,
      image: "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
    },
  ];

  const vegetables: Product[] = [
    {
      name: "Mushroom",
      price: 2.3,
      image:
        "https://t3.ftcdn.net/jpg/01/68/23/42/360_F_168234229_V70FDH4C4x6jXgh3UrYJ7DFYQGwXXvdt.jpg",
    },
    {
      name: "Mustard",
      price: 2.3,
      image:
        "https://bd-live-21.slatic.net/kf/Sbf3cf5a6b5ae45eea4da676472339ae6K.jpg",
    },

    {
      name: "Eggplant",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitYipbBtEAkVKfz_jdXp3saKbLosEkWl9Tg&s",
    },
    {
      name: "Mushroom",
      price: 2.3,
      image:
        "https://t3.ftcdn.net/jpg/01/68/23/42/360_F_168234229_V70FDH4C4x6jXgh3UrYJ7DFYQGwXXvdt.jpg",
    },
    {
      name: "Mustard",
      price: 2.3,
      image:
        "https://bd-live-21.slatic.net/kf/Sbf3cf5a6b5ae45eea4da676472339ae6K.jpg",
    },

    {
      name: "Eggplant",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitYipbBtEAkVKfz_jdXp3saKbLosEkWl9Tg&s",
    },
    {
      name: "Mustard",
      price: 2.3,
      image:
        "https://bd-live-21.slatic.net/kf/Sbf3cf5a6b5ae45eea4da676472339ae6K.jpg",
    },

    {
      name: "Eggplant",
      price: 2.3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTitYipbBtEAkVKfz_jdXp3saKbLosEkWl9Tg&s",
    },
  ];

  return (
    <MaxWidthWrapper className="py-16">
      <SectionHeading
        title="Our Fresh Products"
        subTitle="Our  Products"
        description=" We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients."
      />
      <Tabs defaultValue="all" className="">
        <TabsList className="bg-transparent w-max mx-auto py-10">
          <TabsTrigger
            className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white text-sm md:text-base rounded py-4 px-3 md:px-6 border"
            value="all"
          >
            All{" "}
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white text-sm md:text-base rounded py-4 px-3 md:px-6 border"
            value="fruits"
          >
            Fruits
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white text-sm md:text-base rounded py-4 px-3 md:px-6 "
            value="vegetable"
          >
            Vegetable
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#749B3F] data-[state=active]:text-white text-sm md:text-base rounded py-4 px-3 md:px-6 "
            value="salad"
          >
            Salad
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {allProducts.map((item, idx) => (
              <ProductCard key={idx} data={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="fruits">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fruits.map((item, idx) => (
              <ProductCard key={idx} data={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="vegetable">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vegetables.map((item, idx) => (
              <ProductCard key={idx} data={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="salad">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((item, idx) => (
              <ProductCard key={idx} data={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-10">
        <Button
          variant={"outline"}
          className="text-[#FF6A1A] font-semibold border border-[#FF6A1A]  mx-auto hover:bg-[#FF6A1A]  hover:text-white hover:cursor-pointer"
        >
          See All Products
        </Button>
      </div>
    </MaxWidthWrapper>
  );
};

export default Products;
