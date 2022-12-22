import React from "react";
import { motion } from "framer-motion";
import "../css/animation.css";
const NumberDate = ({ number = 10 }) => {
  const twoDigitNumber = number.toString().padStart(2, "0");
  const twoDigitNextNumber = (number+1).toString().padStart(2, "0");

  return (
    <div className="w-14 md:w-24 h-14 md:h-24 relative">
      <motion.div
        key={twoDigitNextNumber}
        initial={{
          zIndex: 100,
        }}
        animate={{
          rotateX: ["0deg", "180deg"],
          skew: ["0deg", "-20deg", "0deg"],
          background: ["#0c4a6e", "#075985"],
          zIndex: 1,
        }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="reduceZ origin-bottom absolute bg-sky-900 w-full h-1/2 rounded-md overflow-hidden"
      >
        <div className="absolute font-bold text-stone-100 text-2xl  md:text-3xl top-[calc(50%-0.2rem)] left-[calc(50%-0.9rem)] md:top-[calc(50%+0.3rem)]">
          {twoDigitNextNumber}
        </div>
      </motion.div>
      <div className="origin-bottom absolute bg-sky-800 w-full h-1/2 rounded-md bottom-0 overflow-hidden">
        <div className="absolute font-bold text-stone-100 text-2xl  md:text-3xl top-[calc(-50%-0.2rem)] left-[calc(50%-0.9rem)] md:top-[calc(-50%+0.3rem)]">
          {twoDigitNextNumber}
        </div>
      </div>

      <div className="origin-bottom absolute bg-sky-900 w-full h-1/2 rounded-md overflow-hidden">
        <div className="absolute font-bold text-stone-100 text-2xl  md:text-3xl top-[calc(50%-0.2rem)] left-[calc(50%-0.9rem)] md:top-[calc(50%+0.3rem)]">
          {twoDigitNumber}
        </div>
      </div>
      <motion.div
        key={twoDigitNumber}
        initial={{
          zIndex: 1,
        }}
        animate={{
          rotateX: ["180deg", "0deg"],
          skew: ["0deg", "20deg", "0deg"],
          zIndex: 100,
        }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        className="addZ origin-top absolute bg-sky-800 w-full h-1/2 rounded-md bottom-0 overflow-hidden"
      >
        <div className="absolute font-bold text-stone-100 text-2xl  md:text-3xl top-[calc(-50%-0.2rem)] left-[calc(50%-0.9rem)] md:top-[calc(-50%+0.3rem)]">
          {twoDigitNumber}
        </div>
      </motion.div>
    </div>
  );
};

export default NumberDate;

{
  /* <motion.div
        animate={{
          rotateX: ["0", "-180deg"],
          zIndex: [40, 30],
        }}
        className="origin-bottom absolute bg-sky-900 w-full h-1/2 z-30 rounded-md overflow-hidden"
      >
        <div className="absolute font-bold text-stone-100 text-2xl  md:text-3xl top-[calc(50%-0.2rem)] left-[calc(50%-0.9rem)]">
          {number + 1}
        </div>
      </motion.div>
      <motion.div
        animate={{
          zIndex: [40, 30],
        }}
        className="origin-bottom absolute bg-sky-800 w-full h-1/2 z-30 rounded-md bottom-0 overflow-hidden"
      >
        <div className="absolute font-bold text-stone-100 text-2xl  md:text-3xl top-[calc(-50%-0.2rem)] left-[calc(50%-0.9rem)]">
          {number + 1}
        </div>
      </motion.div>
      <motion.div
        animate={{
          zIndex: [20, 40],
        }}
        className="origin-bottom absolute shadow-lg shadow-black bg-sky-900 w-full h-1/2 -z-0 rounded-md overflow-hidden"
      >
        <div className="absolute font-bold text-stone-100 text-2xl  md:text-3xl top-[calc(50%-0.2rem)] left-[calc(50%-0.9rem)]">
          {number}
        </div>
      </motion.div>
      <motion.div
        animate={{
          zIndex: [20, 40],
        }}
        className="absolute shadow-lg shadow-black bg-sky-800 w-full h-1/2 z-20 rounded-md bottom-0 overflow-hidden"
      >
        <div className="absolute font-bold text-stone-100 text-2xl  md:text-3xl top-[calc(-50%-0.2rem)] left-[calc(50%-0.9rem)]">
          {number}
        </div>
      </motion.div> */
}

{
  /* <motion.div
        animate={{
          rotateX: ["0", "-180deg"],
          opacity: [1, 0],
        }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        key={number}
        className="absolute origin-bottom bg-black w-full h-1/2 z-40 rounded-md overflow-hidden"
      >
        <div className="absolute font-bold text-stone-100 text-2xl  md:text-3xl top-[calc(50%-0.2rem)] left-[calc(50%-0.9rem)]">
          {number}
        </div>
      </motion.div> */
}
