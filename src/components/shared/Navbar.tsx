"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import NavItems from "./NavItems";
import { AlignJustify, Heart, ShoppingCart } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import { SingInForm } from "../HomePage/SignInForm";

const Navbar = () => {
  return (
    <nav className={`w-full bg-transparent py-7 relative z-50 `}>
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex justify-center gap-2">
          <Image
            src={"/images/logo.png"}
            alt="footer logo"
            height={30}
            width={30}
          />
          <h1 className="text-[#212337] text-2xl font-semibold">
            Fresh Harvests
          </h1>
        </div>

        <div className="hidden lg:block  ">
          <NavItems />
        </div>

        <div className="hidden lg:block   ">
          <div className="flex gap-4">
            <div className="flex gap-1 items-center">
              <Heart size={16} />
              <p>Favorites</p>
            </div>
            <div className="flex gap-1 items-center">
              <ShoppingCart size={16} />
              <p>cart</p>
            </div>

            <div>
              <SingInForm />
            </div>
          </div>
        </div>

        <div className="flex gap-4 lg:hidden">
          <div className="flex gap-1 items-center">
            <ShoppingCart size={16} />
          </div>
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <AlignJustify />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <NavItems />
              <div className=" mx-auto ">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-1 items-center">
                    <Heart size={16} />
                    <p>Favorites</p>
                  </div>

                  <div>
                    <Button variant="outline">Sing in</Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
