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
import { HiPlay } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import React, { FunctionComponent, ReactNode } from "react";
import { Link } from "gatsby";

interface ImageLeftCTAProps {
  image: string;
  title?: string;
  text?: ReactNode;
  button1?: {
    text: string;
    url: string;
  };
  button2?: {
    text: string;
    url: string;
  };
  smallTitle?: boolean;
}

export const ImageRightCTA: FunctionComponent<ImageLeftCTAProps> = ({
  image,
  title,
  text,
  button1,
  button2,
  children,
  smallTitle,
}) => {
  return (
    <Box as="section" pt="12" pb="24">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "3rem", lg: "2rem" }}
          mt="8"
          align={{ lg: "center" }}
          justify="space-between"
          alignItems={{ base: "center", lg: "initial" }}
        >
          <Box flex="1" maxW={{ lg: "520px" }}>
            {title && (
              <Heading
                as="h2"
                size="xl"
                mt="8"
                fontWeight="extrabold"
                color="black"
                mb="4"
              >
                {title}
              </Heading>
            )}
            {typeof text === "string" ? (
              <Text
                color={mode("gray.600", "gray.400")}
                fontSize="lg"
                fontWeight="medium"
              >
                {text}
              </Text>
            ) : (
              text
            )}
            {children}
            <Stack direction={{ base: "column", md: "row" }} spacing="4" mt="8">
              {button1 && (
                <Link to={button1.url}>
                  <Button
                    className="group"
                    size="lg"
                    variant="solid"
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
                    {button1.text}
                  </Button>
                </Link>
              )}
              {button2 && (
                <Link to={button2.url}>
                  <Button
                    className="group"
                    size="lg"
                    variant="solid"
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
          <Box
            pos="relative"
            w={{ base: "full", md: "400px", xl: "560px" }}
            h={{ base: "auto" }}
            transition="transform 0.2s"
            transformOrigin="center"
            _hover={{
              transform: "scale(1.06)",
            }}
          >
            <Img
              w="full"
              pos="relative"
              zIndex="1"
              h={{ lg: "100%" }}
              objectFit="cover"
              src={image}
              alt="Screening talent"
            />
            <Box
              pos="absolute"
              w="100%"
              h="100%"
              top={{ base: "3", sm: "4", lg: "8" }}
              left={{ base: "-3", sm: "-6", lg: "-12" }}
              borderRadius="4px"
              borderColor="#4DBBEE"
              borderWidth="6px"
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
