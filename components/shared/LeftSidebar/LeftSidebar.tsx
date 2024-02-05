"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Navlinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 flex-col gap-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        // TODO - Add dynamic route for profile link

        return (
          <Link
            key={item.route}
            href={item.route}
            className={`${
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900"
            } flex items-center justify-start gap-4 bg-transparent p-4 max-lg:justify-center`}
          >
            <Image
              className={`${isActive ? "" : "invert-colors"} `}
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
            />
            <p
              className={`max-lg:hidden ${
                isActive ? "base-bold" : "base-medium "
              }`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

const LeftSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <Navlinks />
      <div className="flex flex-col gap-3">
        <SignedIn>
          <Link href="/log-out">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient">Log out</span>
            </Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="Login"
                width={20}
                height={20}
                className="primary-text-gradient invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log in
              </span>
            </Button>
          </Link>
          <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image
              src="/assets/icons/sign-up.svg"
              alt="Sign up"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Sign up</span>
          </Button>
        </SignedOut>
      </div>
    </section>
  );
};
export default LeftSidebar;
