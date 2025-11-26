import React from "react";
import { motion } from "motion/react";
const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-slate-200 rounded-sm text-black text-2xl w-30 h-12 flex justify-center items-center">
      Logo
    </motion.div>
  );
};

export default Logo;
