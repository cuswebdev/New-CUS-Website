import { ChakraProps, Link } from "@chakra-ui/react";
import React from "react";
import { FunctionComponent } from "react";

export const Email: FunctionComponent<ChakraProps> = ({
  children,
  ...rest
}) => (
  <Link href={`mailto:${children}`} {...rest}>
    {children}
  </Link>
);
