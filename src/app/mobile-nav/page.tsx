import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import AddPostButton from "@/components/AddPostButton";

const MobileNav = () => {
  return (
    <nav className="h-screen w-screen mx-auto text-center absolute left-0 top-16 transition z-20 bg-background">
      <div className="flex gap-20 flex-col text-xl p-12 w-fit mx-auto">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          Home
        </Link>
        <AddPostButton />
      </div>
    </nav>
  );
};

export default MobileNav;
