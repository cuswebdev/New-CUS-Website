import React, { FunctionComponent } from "react";
import { Box, ChakraProps } from "@chakra-ui/react";

interface Props extends ChakraProps {
  small?: boolean;
}

export const ContentSection: FunctionComponent<Props> = ({
  children,
  small,
  ...chakraProps
}) => (
  <Box
    maxW={{ base: "xl", md: small ? "5xl" : "7xl" }}
    mx="auto"
    px={{ base: "6", md: "8" }}
    py={{ base: "12" }}
    position="relative"
    height="100%"
    {...chakraProps}
  >
    {children}
  </Box>
);
