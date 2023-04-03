import Navbar from "@/components/Navbar";

const webdev = () => {
  return (
    <>
      <Navbar />
      <div className="w-full h-screen text-center bg-white">
        <div className="max-w-screen-xl w-full h-screen mx-auto p-2 flex justify-center items-center bg-black ">
          <div>
            <p className="uppercase text-sm tracking-widest">
              Welcome to Web Dev page
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default webdev;
