import Link from "next/link";
import {
  AiOutlineLinkedin,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Main = () => {
  const [text, count] = useTypewriter({
    words: ["Web Developement", "Graphic Design", "Geek culture"],
    loop: 1,
  });

  return (
    <div className=" max-h-screen w-full justify-center snap-y snap-mandatory overflow-y-scroll">
      <div
        className="max-w-screen-xl mx-auto h-[1024px] mt-28 text-center bg-scroll bg-no-repeat bg-top snap-start  scroll-mt-28  "
        style={{
          backgroundImage: `url("/assets/dvc.png")`,
        }}
      >
        <div className="flex flex-wrap justify-center align-middle p-2">
          <h1 className="max-w-6xl overflow-clip text-ellipsis uppercase md:text-5xl font-black text-white shadow-inner sm:text-3xl">
            Where creativity meets technology and &nbsp;
            <span className=" overflow-clip text-ellipsis uppercase md:text-5xl font-black italic text-red-600  sm:text-3xl">
              {text}
            </span>
            <Cursor cursorColor="red" />
            reigns supreme.
          </h1>

          <p className="max-w-sm m-auto text-center text-white pt-5 font-bold invisible md:visible">
            As a Web Developer and Graphic Designer, I bring a unique
            perspective to every project I work on.
          </p>
          <p className="max-w-md m-auto text-center	 text-white pt-5 pl-20 font-bold invisible md:visible">
            With my passion for all things geeky, I approach each project with
            creativity and innovation, always striving to bring my client's
            vision to life.
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-wrap max-w-screen-xl mx-auto h-screen justify-center snap-start  scroll-mt-28 ">
        <div className="basis-1/3 px-2">
          <h2 className="uppercase text-center">Web Development</h2>
          <p>Check out some of the Websites and Web Applications I've built:</p>
          <img
            src=""
            alt=""
          />
        </div>
        <div className="basis-1/3 px-2">
          <h2 className="uppercase text-center">Graphic Design</h2>
          <p>
            Take a look at some of my graphic design work, including branding
            projects, illustrations, and UI/UX design:
          </p>
          <img
            src=""
            alt=""
          />
        </div>
        <div className="basis-1/3 px-2">
          <h2 className="uppercase text-center">Contact Me</h2>
          <p>
            If you're interested in working with me or just want to say hi, feel
            free to reach out via the contact page or any of the social media.
          </p>
          <div>
            <div className="flex flex-wrap items-center justify-center my-2 ">
              <div className=" cursor-pointer">
                <Link
                  href="https://www.linkedin.com/in/forbee/"
                  target="_blank"
                >
                  <AiOutlineLinkedin size={50} />
                </Link>
              </div>
              <div className=" cursor-pointer">
                <Link
                  href="https://twitter.com/forbee"
                  target="_blank"
                >
                  <AiFillTwitterSquare size={50} />
                </Link>
              </div>
              <div className="  cursor-pointer">
                <Link
                  href="https://github.com/forbee-dev"
                  target="_blank"
                >
                  <AiFillGithub size={50} />
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link
                  href="mailto:code@forbee.dev"
                  target="_blank"
                >
                  <AiOutlineMail size={50} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
