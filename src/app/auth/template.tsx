"use client";

import { motion } from "framer-motion";
import variants from "@/lib/animations";

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={variants} initial="scaleHidden" animate="scaleIn">
      {children}
    </motion.div>
  );
}
