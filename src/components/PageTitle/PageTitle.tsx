import {
  Box,
  Button,
  Center,
  ChakraProps,
  Heading,
  LightMode,
  Text,
} from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

interface PageTitleProps extends ChakraProps {
  img?: string;
  title?: string;
  description?: string;
  big?: boolean;
}

export const PageTitle: FunctionComponent<PageTitleProps> = ({
  img,
  title,
  description,
  big,
  children,
  ...rest
}) => {
  return (
    <Box
      as="section"
      py={big ? "24" : "12"}
      position="relative"
      bgImage={img ? `url(${img})` : ""}
      bgSize="cover"
      bgPosition="center"
      _after={
        img
          ? {
              content: `""`,
              display: "block",
              w: "full",
              h: "full",
              bg: "blackAlpha.500",
              position: "absolute",
              inset: 0,
              zIndex: 0,
            }
          : {}
      }
      bg={!img ? "#4DBBEE" : undefined}
      {...rest}
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        h="full"
        zIndex={1}
        position="relative"
      >
        <Center
          flexDirection="column"
          textAlign="center"
          color={"white"}
          h="full"
        >
          <Heading as="h1" size="2xl" fontWeight="extrabold">
            {title}
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="3" maxWidth="600px">
            {description}
          </Text>
        </Center>
      </Box>
    </Box>
  );
};
