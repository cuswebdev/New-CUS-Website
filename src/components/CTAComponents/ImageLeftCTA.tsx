import {
  Box,
  Button,
  Center,
  Heading,
  Img,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React, { FunctionComponent } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ImageLeftCTAProps {
  image: string;
  title: string;
  text: string;
  button1?: {
    text: string;
    url: string;
  };
  button2?: {
    text: string;
    url: string;
  };
}

export const ImageLeftCTA: FunctionComponent<ImageLeftCTAProps> = ({
  image,
  title,
  text,
  button1,
  button2,
}) => {
  return (
    <Box position="relative" as="section">
      <Box
        display={{ base: "none", lg: "block" }}
        pos="absolute"
        height="80%"
        width="45%"
        top="50%"
        transform="translate(0, -50%)"
        zIndex="2"
        transition="transform 0.2s"
        transformOrigin="top"
        _hover={{
          transform: "scale(1.06) translate(0, -50%) ",
        }}
      >
        <Img height="100%" width="100%" objectFit="cover" src={image} />
      </Box>
      <Box
        background="#4DBBEE"
        pos="absolute"
        width={{ base: "100%", lg: "65%", "2xl": "75%" }}
        height="100%"
        right="0"
      />
      <Stack
        width="100%"
        direction={{ base: "column", lg: "row-reverse" }}
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
      >
        <Box
          width={{ base: "100%", lg: "50%" }}
          py="24"
          px={{ base: "6", md: "8" }}
          zIndex="1"
        >
          <Heading
            size="2xl"
            mt="10"
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="normal"
            color="white"
          >
            {title}
          </Heading>
          <Text fontSize="lg" mt="4" color="white">
            {text}
          </Text>
          <Stack mt="8" spacing={4} direction={{ base: "column", md: "row" }}>
            {button1 && (
              <Link to={button1.url}>
                <Button
                  className="group"
                  size="lg"
                  px="8"
                  variant="outline"
                  iconSpacing="3"
                  href={button1.url}
                  rightIcon={
                    <Box
                      as={FaArrowRight}
                      fontSize="sm"
                      transition="transform 0.2s"
                      _groupHover={{ transform: "translateX(2px)" }}
                    />
                  }
                >
                  {button1.text}
                </Button>
              </Link>
            )}
            {button2 && (
              <Link to={button2.url}>
                <Button
                  className="group"
                  size="lg"
                  px="8"
                  variant="outline"
                  iconSpacing="3"
                  rightIcon={
                    <Box
                      as={FaArrowRight}
                      fontSize="sm"
                      transition="transform 0.2s"
                      _groupHover={{ transform: "translateX(2px)" }}
                    />
                  }
                >
                  {button2.text}
                </Button>
              </Link>
            )}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
