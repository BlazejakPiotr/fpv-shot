export const containerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      type: "just",
    },
  },
};

export const hamburgerExtendingAnimation = {
  hidden: { y: "-30vh" },
  visible: {
    y: 0,
    transition: { duration: 0.9, type: "spring" },
  },
};
