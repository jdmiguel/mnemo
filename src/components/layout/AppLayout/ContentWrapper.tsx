"use client";

import { motion } from "framer-motion";
import variants from "@/lib/animations";

export type ContentWrapperProps = {
  children: string | JSX.Element | JSX.Element[];
};

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <motion.div variants={variants} initial="hidden" animate="fadeIn">
      {children}
    </motion.div>
  );
}
