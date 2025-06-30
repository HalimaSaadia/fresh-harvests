"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({}) => {
  const pathname = usePathname();
  const navLinks = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/shop", label: "Shop" },
    { id: 3, url: "/about-us", label: "About Us" },
    { id: 4, url: "/blogs", label: "Blog" },
  ];

  return (
    <div className="flex flex-col items-center lg:flex-row">
      <div className="flex flex-col items-center md:flex-row xl:gap-12">
        {navLinks.map((link) => (
          <Button
            asChild
            variant="ghost"
            key={link.id}
            className={`hover:bg-white font-normal flex-col  ${cn(
              pathname === link.url ? " " : ""
            )}`}
          >
            <p>
              <Link href={link.url} className="text-base block">
                {link.label}
              </Link>
             {pathname === link.url && <span className="block h-1.5 w-4 bg-[#749B3F] rounded-xl text-transparent">&nbsp;</span>}
            </p>
          </Button>
        ))}
      </div>

      
    </div>
  );
};

export default NavItems;
