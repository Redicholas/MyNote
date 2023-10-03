"use client";

import { Button } from "./ui/button";
import DesktopNav from "./DesktopNav";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { ISessionUser } from "@/models/ISessionUser";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();

  let user: ISessionUser = {
    name: "",
    email: "",
    image: "",
  };

  if (session) {
    user = session.user as ISessionUser;
  }

  function handleCloseMenu() {
    if (pathname === "/mobile-nav") {
      router.back();
    }
  }

  return (
    <>
      <header className="flex items-center justify-between p-4 border-b border-border">
        <h1 className="text-4xl tracking-wide">MyNote</h1>
        <DesktopNav />
        <Button
          asChild
          className="sm:hidden"
          variant={"outline"}
          onClick={handleCloseMenu}
        >
          <Link href="/mobile-nav">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current text-primary"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
              />
            </svg>
          </Link>
        </Button>
      </header>
      {session ? (
        <div className="p-4 border-b flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <Image
              src={user.image}
              alt={user.name}
              width={30}
              height={30}
              loading="lazy"
              style={{ borderRadius: "50%" }}
            />
            <p>{user.name}</p>
          </div>
          <Button variant="outline" onClick={() => signOut()}>
            Sign Out
          </Button>
        </div>
      ) : (
        <div className="p-4 border-b flex flex-row-reverse z-10">
          <Button variant="outline" onClick={() => signIn()} className="">
            Sign In
          </Button>
        </div>
      )}
    </>
  );
};
