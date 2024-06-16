import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div id="home-section" data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-800 pt-1">
      <div className="textstructure mt-40 px-20">
        <div className="masker ">
          <h1 className=" text-[7.5vw] font-mono leading-[7vw] tracking-tighter font-semibold">
            Hey there!
          </h1>
        </div>
        <div className="masker flex justify-normal items-center ">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6vw" }}
            transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
            className="mr-[1vw] w-[8vw] rounded-md h-[7vw] bg-zinc-400  flex justify-normal items-center relative "
          >
          <img src="https://www.anishpharma.com/wp-content/uploads/2020/08/logo-anish-pharma.png" alt="" />
          </motion.div>
          <h1 className=" text-[7.5vw] font-mono leading-[6vw] tracking-tighter font-semibold">
            I'm Anish
          </h1>
        </div>
        <div className="masker ">
          <h1 className=" text-[7.5vw] font-mono leading-[7vw] tracking-tighter font-semibold">
            I'm a Developer
          </h1>
        </div>
        <div className="border-t[1px] border-zinc-300 mt-10 flex justify-between items-center py-5 px-25">
          {[
            "Dreams without goals are just dreams",
            "Don't burn yourself to keep others warm",
          ].map((item, index) => (
            <p className="text-md font-light text-[#CDEA68] tracking-tighter leading-none">
              {item}
            </p>
          ))}
        </div>
        <div className="start flex items-center justify-center gap-5">
          <button onClick={reloadPage} className="px-5 py-2 border-[2px] border-zinc-300 font-light text-md text-[#CDEA68] uppercase rounded-full">
            start the project
          </button>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] text-[#CDEA68] border-zinc-300">
            <button onClick={reloadPage} className="rotate[45deg]">
              <FaArrowUpLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
