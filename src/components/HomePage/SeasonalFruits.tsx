import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";

const SeasonalFruits = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-vector/seamless-background-pattern-organic-farm-260nw-2165663005.jpg')",
      }}
      className=" bg-no-repeat bg-cover my-16 mt-32"
    >
      <div className="bg-gray-200/50 ">
        <MaxWidthWrapper className="py-16  relative">
         <div className="z-20 relative">
             <div className="text-center lg:text-start">
            <h3 className="text-[#749B3F] bg-gray-100 font-semibold inline-block px-2 rounded">
              Special Offer
            </h3>
            <h1 className="text-5xl lg:text-7xl font-bold  text-[#212337] my-4">
              Seasonal Fruit Bundle
            </h1>
            <h3 className="text-3xl lg:text-4xl font-bold  text-[#212337] my-4">
              Discount up to <span className="text-[#FF6A1A]">80% OFF</span>
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-5 my-8 justify-center lg:justify-start">
            <div className="bg-white p-5 md:p-7 rounded-lg text-center">
              <h1 className="text-3xl lg:text-[40px] font-bold text-[#212337]">
                03
              </h1>
              <p className="text-[#4A4A52]  lg:text-xl">Days</p>
            </div>
            <div className="bg-white p-5 md:p-7 rounded-lg text-center">
              <h1 className="text-3xl lg:text-[40px] font-bold text-[#212337]">
                18
              </h1>
              <p className="text-[#4A4A52]  lg:text-xl">Hour</p>
            </div>
            <div className="bg-white p-5 md:p-7 rounded-lg text-center">
              <h1 className="text-3xl lg:text-[40px] font-bold text-[#212337]">
                54
              </h1>
              <p className="text-[#4A4A52]  lg:text-xl">Min</p>
            </div>
            <div className="bg-white p-5 md:p-7 rounded-lg text-center">
              <h1 className="text-3xl lg:text-[40px] font-bold text-[#212337]">
                21
              </h1>
              <p className="text-[#4A4A52]  lg:text-xl">Sec</p>
            </div>
          </div>

          <div className="bg-[#176D38] w-max rounded-full flex mx-auto lg:mx-0">
            <h3 className="font-bold text-white text-2xl md:text-[32px] py-3 px-6">
              CODE: <span className="text-[#FAC714]">FRESH28</span>
            </h3>
          </div>
         </div>

          <div className="absolute hidden md:block bottom-0 right-0">
            <Image src={"/images/vegetables.png"} alt="vegetable" height={500} width={500} />
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default SeasonalFruits;
