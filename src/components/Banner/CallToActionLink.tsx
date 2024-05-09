import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

export const CallToActionLink = (props: BoxProps) => (
  <Box
    as="a"
    href="#"
    py="1"
    px="4"
    bg="#4dbbee"
    color="white"
    fontWeight="semibold"
    rounded="base"
    whiteSpace="nowrap"
    {...props}
  />
);
