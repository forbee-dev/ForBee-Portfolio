import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen text-center bg-white">
        <div className="max-w-screen-xl w-full h-screen mx-auto p-2 flex justify-center items-center bg-black ">
          <div>
            <p className="uppercase text-sm tracking-widest">
              Welcome to About page
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
