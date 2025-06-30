import { cn } from "@/lib/utils";
import React from "react";
type SectionHeading = {
  title: string;
  subTitle: string;
  description: string;
  className?: string;
};

const SectionHeading = ({
  title,
  subTitle,
  description,
  className,
}: SectionHeading) => {
  return (
    <div className={cn("py-6 text-center", className)}>
      <h3 className="text-[#749B3F] bg-gray-100 font-semibold inline-block px-2 rounded">
        {subTitle}
      </h3>
      <h1 className="text-3xl lg:text-5xl font-bold  text-[#212337] my-4">
        {title}
      </h1>
      <p className="text-[#4A4A52]">{description}</p>
    </div>
  );
};

export default SectionHeading;
