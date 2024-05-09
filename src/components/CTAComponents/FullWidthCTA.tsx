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

interface FullWidthCTAProps {
  image?: string;
  title: string;
  text: string;
  button1?: {
    text: string;
    url: string;
  };
  large?: boolean;
}

export const FullWidthCTA: FunctionComponent<FullWidthCTAProps> = ({
  image,
  title,
  text,
  button1,
  large,
}) => {
  return (
    <Box
      as="section"
      bg={image ? "gray.800" : "primary"}
      py={large ? "24" : "12"}
      position="relative"
      bgImage={image ? `url(${image})` : undefined}
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: "block",
        w: "full",
        h: "full",
        bg: image ? "blackAlpha.700" : "none",
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
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
          color="white"
          h="full"
        >
          <Heading size="2xl" fontWeight="extrabold">
            {title}
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="3" maxWidth="600px">
            {text}
          </Text>
          {button1 && (
            <Link to={button1.url}>
              <Button
                className="group"
                mt="8"
                size="lg"
                variant="outline"
                iconSpacing="3"
                rightIcon={
                  <Box
                    as={FaArrowRight}
                    fontSize="sm"
                    transition="transform 0.2s"
                    _groupHover={{ transform: "translateX(5px)" }}
                  />
                }
              >
                {button1.text}
              </Button>
            </Link>
          )}
        </Center>
      </Box>
    </Box>
  );
};
