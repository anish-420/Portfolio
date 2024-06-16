import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div id="featured-section" className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-300 pb-20">
        <h1 className="text-7xl font-mono tracking-tighter">
          Resume & Certificates
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[70vh]"
          >
            <h1 className="absolute left-full tracking-tighter leading-none text-8xl translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[#C2671E] font-semibold font-sans">
              <h1 className="absolute flex right-full overflow-hidden tracking-tighter leading-none text-8xl translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[#C2671E] font-semibold font-sans">
                {"RESUME".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </h1>
            <div className="w-full h-full rounded-xl scale overflow-hidden">
              <a href="./Images/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-full bg-cover"
                  src="https://mi-uploads-live.s3.amazonaws.com/wp-content/uploads/2012/05/22071619/iStock-459953575.jpg"
                  alt="Resume"
                />
              </a>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden right-full tracking-tighter leading-none text-8xl translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] text-[#C2671E] font-semibold font-sans">
              {"CERTIFICATE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden scale">
              <a href="./Images/Certificate.pdf" target="_blank" rel="noopener noreferrer">
                <img
                  className="w-full h-full bg-cover"
                  src="https://i.pinimg.com/736x/52/61/98/526198892b4ba9e2ca0bf648c2724f42.jpg"
                  alt="Certificate"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
