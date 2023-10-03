import React from "react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ISessionUser } from "@/models/ISessionUser";

const DesktopNav = () => {
  const { data: session } = useSession();

  let user: ISessionUser = {
    name: "",
    email: "",
    image: "",
  };
  if (session) {
    user = session.user as ISessionUser;
  }
  return (
    <div className="gap-2 hidden sm:flex">
      <Button asChild>
        <Link href="/" className={buttonVariants({ variant: "secondary" })}>
          Home
        </Link>
      </Button>
      {session && (
        <Button asChild>
          <Link
            href="/add-post"
            className={buttonVariants({ variant: "secondary" })}
          >
            Add Note
          </Link>
        </Button>
      )}
    </div>
  );
};

export default DesktopNav;
