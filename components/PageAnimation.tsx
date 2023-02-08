import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

export default function PageAnimation({ children }: PropsWithChildren) {
  return (
    <motion.div
      style={{ height: "100%", flexGrow: 1 }}
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      transition={{
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
