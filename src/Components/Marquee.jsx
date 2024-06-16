import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 overflow-hidden flex whitespace-nowrap pr-20">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="text-[18vw] leading-none font-mono font-bold uppercase -mb-10 pb-10 pr-20 "
        >
          Welcome to my Website
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="text-[18vw] leading-none font-mono font-bold uppercase -mb-10 pb-10 pr-20"
        >
        Welcome to my Website
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="text-[18vw] leading-none font-mono font-bold uppercase -mb-10 pb-10 pr-20"
        >
        Welcome to my Website
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
