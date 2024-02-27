import { MotionProps } from "framer-motion";

export const ANIMATION: Record<string, MotionProps> = {
  accordion: {
    initial: { opacity: 0, scaleY: 0, y: -20 },
    animate: { opacity: 1, scaleY: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: {
      ease: "anticipate",
      duration: 0.25,
    },
  },
  speechBubble: {
    initial: { opacity: 0, scaleX: 0.5, scaleY: 0.5, originX: 1 },
    animate: { opacity: 1, scaleX: 1, scaleY: 1, y: 0 },
    exit: { opacity: 0, scaleX: 0.75, scaleY: 0.75, originX: 1 },
    transition: {
      ease: "anticipate",
      duration: 0.25,
    },
  },
};
