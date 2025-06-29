import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type MaxWidthWrapperProps = {
  children: ReactNode;
  className?: string;
};
const MaxWidthWrapper = ({ children, className }:MaxWidthWrapperProps) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-4 md:px-5 xl:px-0", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;