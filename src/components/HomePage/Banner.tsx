import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 from-70% to-30% to-[#749B3F] pt-44 py-20 flex items-center relative -mt-32">
      <MaxWidthWrapper className="flex z-0">
        <div className="">
          <div className="max-w-xl">
            <h3 className="text-[#749B3F] bg-gray-100 font-semibold inline-block px-2 rounded">
              Welcome to Fresh Harvest
            </h3>
            <h1 className="text-5xl lg:text-7xl font-bold  text-[#212337] my-4">
              Fresh Fruits and Vegetables
            </h1>
            <p className="text-[#4A4A52]">
              At Fresh Harvests, we are passionate about providing you with the
              freshest and most flavorful fruits and vegetables
            </p>
          </div>

          <Button className="bg-[#FF6A1A] text-white my-8">Shop Now</Button>

          {/* Discount section */}
          <div className="flex justify-end">
            {" "}
            <div className="z-20 relative bg-[#EBEBEB] rounded-xl p-3 md:p-5 w-max flex gap-5">
              <div>
                <div className="text-center lg:text-start">
                  <h3 className="text-sm md:text-base font-bold  text-[#176D38] ">
                    Special Offer
                  </h3>
                  <h1 className="text-lg md:text-3xl font-bold  text-[#212337] my-1">
                    Fresh Salad
                  </h1>
                  <h3 className="text-sm md:text-base font-bold  text-[#212337] ">
                    <span className="text-[#176D38] text-sm md:text-base ">
                      Up to{" "}
                    </span>
                    <span className="text-lg md:text-3xl">70%</span>{" "}
                    <span>Off</span>
                  </h3>
                </div>

                <div className="bg-[#176D38] w-max rounded-full flex mx-auto lg:mx-0 mt-1">
                  <h3 className="font-bold text-white text-sm md:text-base py-1.2 px-3 ">
                    CODE: <span className="text-[#FAC714]">FRESH28</span>
                  </h3>
                </div>
              </div>
              <div>
                <Image
                  src={"/images/foodBowl.png"}
                  height={150}
                  width={150}
                  alt="foodBowl"
                  className="rounded-full"
                />
              </div>
            </div>{" "}
          </div>
          {/* Download App Section */}
          <div className="mt-7">
            <h1 className="font-bold text-[#212337]">Download App</h1>
            <div className="flex gap-3 flex-wrap ">
              <div>
                <Image
                  src={"/images/appleStore.png"}
                  width={138}
                  height={40}
                  className="max-w-[138px] max-h-[40px] object-cover"
                  alt="store"
                />
              </div>

              <div>
                <Image
                  src={"/images/playstore.png"}
                  width={138}
                  height={40}
                  className="max-w-[138px] max-h-[40px] object-cover"
                  alt="store"
                />
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="absolute bottom-0 right-0 z-10">
        <Image
          alt="banner"
          src={"/images/banner.png"}
          width={700}
          height={800}
          className=""
        />
      </div>
    </div>
  );
};

export default Banner;
