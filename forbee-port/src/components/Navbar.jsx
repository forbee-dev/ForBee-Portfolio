import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import {
  AiOutlineLinkedin,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";
import Theme from "./Theme";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="navbar fixed w-full h-20 shadow-xl z-[100] bg-base-100">
        <div className=" max-w-screen-xl mx-auto flex justify-between items-center w-full h-full px-2 ">
          <div className="relative w-1/5 h-20 ml-10 ">
            <Image
              src="/assets/next.svg"
              alt="Forbee"
              layout="fill"
              objectFit="contain"
              priority={true}
            />
          </div>
          <div>
            <ul className="hidden items-center md:flex ">
              <Link href="/">
                <li className="ml-10 text-sm text-center uppercase hover:border-b">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="ml-10 text-sm text-center uppercase hover:border-b">
                  About Me
                </li>
              </Link>
              <Link href="/web-dev">
                <li className="ml-10 text-sm text-center uppercase hover:border-b">
                  Web Dev
                </li>
              </Link>
              <Link href="/graphic-design">
                <li className="ml-10 text-sm text-center uppercase hover:border-b">
                  Graphic Design
                </li>
              </Link>

              <Link href="/contact">
                <li className="ml-10 mr-10 text-sm text-center uppercase hover:border">
                  Contact
                </li>
              </Link>
              <li className="  ">
                <Theme />
              </li>
            </ul>

            <div
              onClick={handleNav}
              className="md:hidden"
            >
              <MdMenu size={30} />
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? " md:hidden fixed left-0 top-0 w-full h-full bg-base-200 bg-opacity-70 "
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-3/4 sm:w-[60%] md:w-[45%] h-screen bg-base-200 p-10 ease-in duration-500 shadow-md shadow-gray-400"
                : "fixed left-[-500%] top-0 p-10 ease-in duration-500 shadow-md shadow-gray-400"
            }
          >
            <div className=" flex w-full h-10 items-center justify-between">
              <Image
                src="/assets/next.svg"
                alt="Forbee"
                width={150}
                height={150}
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-400 ml-3 p-1 cursor-pointer"
              >
                <MdClose size={30} />
              </div>
            </div>
            <div>
              <p className=" my-10 border-b border-gray-300">bla bla bla</p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm hover:border-b">Home</li>
                </Link>
                <Link href="/about">
                  <li className="py-4 text-sm hover:border-b">About Me</li>
                </Link>
                <Link href="/web-dev">
                  <li className="py-4 text-sm hover:border-b">Web Dev</li>
                </Link>
                <Link href="/graphic-design">
                  <li className="py-4 text-sm hover:border-b">
                    Graphic Design
                  </li>
                </Link>

                <Link href="/contact">
                  <li className="py-4 text-sm hover:border-b">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest ">Let's talk</p>
                <div className="flex flex-wrap items-center justify-start my-2 w-full sm:w-[80%]">
                  <div className=" cursor-pointer">
                    <AiOutlineLinkedin size={50} />
                  </div>
                  <div className=" cursor-pointer">
                    <AiFillTwitterSquare size={50} />
                  </div>
                  <div className="  cursor-pointer">
                    <AiFillGithub size={50} />
                  </div>
                  <div className="cursor-pointer">
                    <AiOutlineMail size={50} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
