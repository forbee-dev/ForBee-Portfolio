import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className="relative w-1/5 h-20 ml-10">
            <Image
              src="/assets/next.svg"
              alt="Forbee"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </div>
          <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About Me
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Web Dev
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Graphic Design
                </li>
              </Link>

              <Link href="/">
                <li className="ml-10 mr-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="md:hidden">
              <MdMenu size={30} />
            </div>
          </div>
        </div>
        <div className="fixed left-0 top-0 w-full h-full bg-black/70"></div>
      </div>
    </>
  );
};

export default Navbar;
