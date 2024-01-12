const DEFAULT_VALUES = {
  initialScale: 0.75,
};

const variants = {
  hidden: { opacity: 0 },
  fadeIn: { opacity: 1 },
  scaleHidden: { opacity: 0, scale: DEFAULT_VALUES.initialScale },
  scaleIn: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "backInOut",
      duration: 0.45,
    },
  },
};

export default variants;
