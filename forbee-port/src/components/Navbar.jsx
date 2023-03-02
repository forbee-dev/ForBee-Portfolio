import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import {
  AiOutlineLinkedin,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";

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

        <div className="fixed left-0 top-0 w-full h-full bg-black/70">
          <div className="fixed left-0 top-0 w-3/4 sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500 shadow-md shadow-gray-400">
            <div className=" flex w-full h-10 items-center justify-between">
              <Image
                src="/assets/next.svg"
                alt="Forbee"
                width={150}
                height={150}
              />
              <div className="rounded-full shadow-md shadow-gray-400 ml-3 p-1 cursor-pointer">
                <MdClose size={30} />
              </div>
            </div>
            <div>
              <p className="text-black my-10 border-b border-gray-300">
                bla bla bla
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm hover:border-b">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm hover:border-b">About Me</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm hover:border-b">Web Dev</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm hover:border-b">
                    Graphic Design
                  </li>
                </Link>

                <Link href="/">
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
