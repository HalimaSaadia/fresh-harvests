import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import AboutUsProductCard from "./AboutUsProductCard";
import SectionHeading from "../shared/SectionHeading";
import { Button } from "../ui/button";

const AboutUs = () => {
  return (
    <MaxWidthWrapper className="">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
        <div className="">
          <div className="w-max mx-auto relative">
            <Image
              src="/images/about-us.png"
              alt="about-us"
              className=" max-w-80  md:max-w-[500px] rounded-full"
              height={400}
              width={400}
            />
            <div className="bg-white w-max rounded absolute top-44 md:top-56 left-44 md:left-52 py-1">
              <h3 className="font-semibold inline-block px-3 rounded">
                Fresh Harvest
              </h3>
            </div>
            <div className="absolute  -bottom-10  -right-5">
              <AboutUsProductCard />
            </div>
          </div>
        </div>
        <div className="py-16">
          <div>
            <SectionHeading
              className="text-start"
              subTitle="About Us"
              title="About Fresh Harvest"
              description="Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience."
            />
          </div>
          <Button
            variant={"outline"}
            className="text-[#FF6A1A] font-semibold border border-[#FF6A1A]  mx-auto hover:bg-[#FF6A1A]  hover:text-white hover:cursor-pointer"
          >
            Read More
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutUs;
