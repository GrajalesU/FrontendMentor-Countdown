import { AnimatePresence, motion } from "framer-motion";
import { memo } from "react";
import NumberDate from "./NumberDate";

const DateElement = memo(({ type, number }) => {
  return (
    <div className="mx-3 flex flex-col gap-4 justify-between">
      <NumberDate number={number} />
      <small className="text-center font-bold text-sky-700 md:text-xl">
        {type}
      </small>
    </div>
  );
});

export default DateElement;
