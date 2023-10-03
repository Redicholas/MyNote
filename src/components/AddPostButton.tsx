"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { useSession } from "next-auth/react";

const AddPostButton = () => {
  const { data: session } = useSession();
  if (session)
    return (
      <Link href="/add-post" className={buttonVariants({ variant: "outline" })}>
        Add Post
      </Link>
    );
};

export default AddPostButton;
