"use client";

import { motion } from "framer-motion";
import variants from "@/lib/animations";
import Menu from "@/components/feature/Menu";
import TopBar from "@/components/feature/TopBar";

export type AppLayoutProps = {
  section: string;
  children: string | JSX.Element | JSX.Element[];
};

export default function AppLayout({ section, children }: AppLayoutProps) {
  return (
    <div className="flex h-screen">
      <Menu />
      <div className="flex flex-1 flex-col">
        <TopBar section={section} />
        <motion.div variants={variants} initial="hidden" animate="fadeIn">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
