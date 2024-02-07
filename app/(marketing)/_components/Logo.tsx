"use client";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Logo = () => {
  return (
    <div className="hidden md:flex items-start gap-x-2">
      <Image
        src="/logo.svg"
        alt="Logo"
        width="32"
        height="32"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Logo"
        width="32"
        height="32"
        className="hidden dark:block"
      />
      <p className={cn(font.className, "font-semibold")}>Jotion</p>
    </div>
  );
};

export default Logo;
