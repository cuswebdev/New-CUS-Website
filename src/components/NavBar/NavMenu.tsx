import { useColorModeValue } from "@chakra-ui/react";
import { Variants } from "framer-motion";
import React from "react";
import { MotionBox, MotionBoxProps } from "./MotionBox";

export const NavMenu = React.forwardRef<HTMLDivElement, MotionBoxProps>(
  (props, ref) => (
    <MotionBox
      ref={ref}
      initial="init"
      variants={variants}
      outline="0"
      opacity="0"
      bg="#4DBBEE"
      w="full"
      shadow="lg"
      px="4"
      pos="absolute"
      insetX="0"
      pt="6"
      pb="12"
      {...props}
    />
  )
);

NavMenu.displayName = "NavMenu";

const variants: Variants = {
  init: {
    opacity: 0,
    y: -4,
    display: "none",
    transition: { duration: 0 },
  },
  open: {
    opacity: 1,
    y: 0,
    display: "block",
    transition: { duration: 0.15 },
  },
  closed: {
    opacity: 0,
    y: -4,
    transition: { duration: 0.1 },
    transitionEnd: {
      display: "none",
    },
  },
};
