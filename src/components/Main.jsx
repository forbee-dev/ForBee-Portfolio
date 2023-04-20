import Link from "next/link";
import {
  AiOutlineLinkedin,
  AiFillTwitterSquare,
  AiOutlineMail,
  AiFillGithub,
} from "react-icons/ai";

const Main = () => {
  return (
    <div
      className="max-w-[1920px] mx-auto h-[880px] text-center bg-cover bg-no-repeat bg-top"
      style={{
        backgroundImage: `url("/assets/dvc.png")`,
      }}
    >
      <div className="max-w-screen-xl w-full min-h-screen h-auto mx-auto p-2 justify-center pt-28 ">
        <div
          className="h-[768px] bg-local bg-contain bg-no-repeat"
          /*           style={{
            backgroundImage: `url("/assets/dvc.png")`,
          }} */
        >
          <div className="flex flex-wrap justify-center align-middle">
            <h1 className=" overflow-clip text-ellipsis uppercase md:text-6xl font-black text-white sm:text-3xl">
              Where design meets development and geek culture reigns supreme.
            </h1>
            <p className="max-w-sm m-auto text-center text-white pt-5 invisible md:visible">
              As a Web Developer and Graphic Designer, I bring a unique
              perspective to every project I work on.
            </p>
            <p className="max-w-md m-auto text-center	 text-white pt-5 pl-20 invisible md:visible">
              With my passion for all things geeky, I approach each project with
              creativity and innovation, always striving to bring my client's
              vision to life.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center pt-10">
          <div className="basis-1/3 px-2">
            <h2 className="uppercase">Web Development</h2>
            <p>
              Check out some of the Websites and Web Applications I've built:
            </p>
            <img
              src=""
              alt=""
            />
          </div>
          <div className="basis-1/3 px-2">
            <h2 className="uppercase">Graphic Design</h2>
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
            <h2 className="uppercase">Contact Me</h2>
            <p>
              If you're interested in working with me or just want to say hi,
              feel free to reach out via the contact page or any of the social
              media.
            </p>
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
