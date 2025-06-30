import React from "react";
import ReviewSlider from "./ReviewSlider";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import SectionHeading from "../shared/SectionHeading";

const Testimonial = () => {
  return (
    <MaxWidthWrapper className="py-16 max-w-[1030px]" >
        <SectionHeading className="py-5 max-w-xl mx-auto" subTitle="Testimonial" title="What Our Customers Say" description="Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:" />
      <ReviewSlider />
    </MaxWidthWrapper>
  );
};

export default Testimonial;
