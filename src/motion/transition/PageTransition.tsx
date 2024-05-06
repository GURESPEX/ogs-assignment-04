import { ReactNode } from "react";
import { motion } from "framer-motion";

export const PageTransition = (page: ReactNode) => {
  return (
    <>
      {page}
      <motion.div
        className="fixed z-50 top-0 left-0 w-full h-full bg-black"
        style={{ pointerEvents: "none" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="fixed z-50 top-0 left-0 w-full h-full bg-black"
        style={{ pointerEvents: "none" }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    </>
  );
};
