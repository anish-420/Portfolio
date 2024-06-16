import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div id="about-section" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="font-semibold text-[2vw] font-sans leading-[4.5vw] text-black tracking-tight">
        Aspiring professional with excellent written and verbal-communication
        skills, negotiation abilities, and proficiency in MS Office. Strong
        organizational and coordination skills complemented by a proactive, go
        getter attitude. Eager to contribute to a dynamic work environment,
        equipped with foundational knowledge in HTML, CSS, Python, SQL and a
        problem-solving mindset. Seeking an entry-level position to apply
        skills, learn, and grow in a collaborative and challenging setting.
      </h1>
      <div className="w-full flex gap-20 border-t-[1px] mt-20 pt-10 border-[#535f28]">
        <div className="w-1/2">
          <h1 className="text-7xl text-teal-950">My Skills:</h1>
          <motion.button
            className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white"
            onClick={handleReadMore}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            {showMore ? "Show Less" : "Show Skills"}
            <motion.div
              className="w-2 h-2 bg-zinc-100 rounded-full"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            ></motion.div>
          </motion.button>
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="mt-10 overflow-hidden"
              >
                <ul className="list-disc pl-10 text-2xl text-black">
                  <motion.li
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Python
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Html
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    Css
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    JavaScript
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    React
                  </motion.li>
                  <motion.li
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    SQL
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="w-1/2 h-1/2 rounded-3xl overflow-hidden">
          <motion.img
            src="./Images/Anish_pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
