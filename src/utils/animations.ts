import { MotionProps } from "framer-motion";

export const ANIMATION: Record<string, MotionProps> = {
  accordion: {
    initial: { opacity: 0, scaleY: 0.5, y: -20 },
    animate: { opacity: 1, scaleY: 1, y: 0 },
    exit: { opacity: 0, scaleY: 0.5, y: 10 },
    transition: {
      ease: "anticipate",
      duration: 0.35,
    },
  },
  scaleInFromTopRight: {
    initial: { opacity: 0, scaleX: 0.5, scaleY: 0.5, originX: 1 },
    animate: { opacity: 1, scaleX: 1, scaleY: 1, y: 0 },
    exit: { opacity: 0, scaleX: 0.75, scaleY: 0.75, originX: 1 },
    transition: {
      ease: "anticipate",
      duration: 0.35,
    },
  },
  scaleXInFromLeft: {
    initial: { opacity: 0, scaleX: 0, x: -10 },
    animate: { opacity: 1, scaleX: 1, x: 0 },
    exit: { opacity: 0, scaleX: 0, x: -10 },
    transition: {
      ease: "anticipate",
      duration: 0.35,
    },
  },
};
