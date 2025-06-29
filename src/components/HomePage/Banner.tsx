import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 from-70% to-30% to-[#749B3F] py-20 flex items-center ">
      <MaxWidthWrapper className="flex">
        <div>
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
          <Button  className="bg-[#FF6A1A] text-white my-8">Shop Now</Button>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Banner;
