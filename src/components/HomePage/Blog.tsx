import blog1 from "@/assets/blog1.png";
import blog2 from "@/assets/blog2.png";
import blog3 from "@/assets/blog3.png";
import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const Blog = () => {
  const blogs = [
    {
      image: blog1,
      date: "May 23 2024",
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    },
    {
      image: blog2,
      date: "May 23 2024",
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    },
    {
      image: blog3,
      date: "May 23 2024",
      title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    },
  ];
  return (
    <MaxWidthWrapper className="py-16">
      {" "}
      <SectionHeading className="max-w-md mx-auto" title="Fresh Harvest Blog" subTitle="Our Blog" description="Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {blogs.map((item, idx) => (
          <div key={idx}>
            <Image
              src={item.image}
              alt="blog1"
              height={250}
              width={384}
              className="max-h-[250px] object-cover rounded-lg"
            />
            <div className="py-6">
              <p className="text-[#4A4A52] text-lg">{item.date}</p>
              <h3 className="my-2 font-bold text-[#212337] ">{item.title}</h3>
              <p className="my-2 font-bold text-[#FF6A1A] ">Read More <ArrowRight className="inline-block" /></p>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Blog;
