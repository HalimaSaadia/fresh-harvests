"use client";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
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
      name: "Mushroom",
      price: 2.3,
      image:
        "https://t3.ftcdn.net/jpg/01/68/23/42/360_F_168234229_V70FDH4C4x6jXgh3UrYJ7DFYQGwXXvdt.jpg",
    },
    {
      name: "Mushroom",
      price: 2.3,
      image:
        "https://t3.ftcdn.net/jpg/01/68/23/42/360_F_168234229_V70FDH4C4x6jXgh3UrYJ7DFYQGwXXvdt.jpg",
    },
    {
      name: "Mushroom",
      price: 2.3,
      image:
        "https://t3.ftcdn.net/jpg/01/68/23/42/360_F_168234229_V70FDH4C4x6jXgh3UrYJ7DFYQGwXXvdt.jpg",
    },
    {
      name: "Mushroom",
      price: 2.3,
      image:
        "https://t3.ftcdn.net/jpg/01/68/23/42/360_F_168234229_V70FDH4C4x6jXgh3UrYJ7DFYQGwXXvdt.jpg",
    },
    {
      name: "Mushroom",
      price: 2.3,
      image:
        "https://t3.ftcdn.net/jpg/01/68/23/42/360_F_168234229_V70FDH4C4x6jXgh3UrYJ7DFYQGwXXvdt.jpg",
    },
    {
      name: "Mushroom",
      price: 2.3,
      image:
        "https://t3.ftcdn.net/jpg/01/68/23/42/360_F_168234229_V70FDH4C4x6jXgh3UrYJ7DFYQGwXXvdt.jpg",
    },
    {
      name: "Mushroom",
      price: 2.3,
      image:
        "https://t3.ftcdn.net/jpg/01/68/23/42/360_F_168234229_V70FDH4C4x6jXgh3UrYJ7DFYQGwXXvdt.jpg",
    },
  ];
  return (
    <MaxWidthWrapper>
      <Tabs defaultValue="all" className="">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="fruits">Fruits</TabsTrigger>
          <TabsTrigger value="vegetable">Vegetable</TabsTrigger>
          <TabsTrigger value="salad">Salad</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((item, idx) => (
              <ProductCard key={idx} data={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="fruits">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((item, idx) => (
              <ProductCard key={idx} data={item} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="vegetable">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts.map((item, idx) => (
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
    </MaxWidthWrapper>
  );
};

export default Products;
