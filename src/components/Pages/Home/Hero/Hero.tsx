import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <Box bg="gray.800" as="section" minH="30vh" position="relative">
      <Box py="32" position="relative" zIndex={1}>
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
          color="white"
        >
          <Box maxW="xl">
            <Heading as="h1" size="3xl" fontWeight="extrabold">
              Check out some cool events
            </Heading>
            <Text fontSize={{ md: "2xl" }} mt="4" maxW="lg">
              These events are super cool
            </Text>
            <Stack direction="row" mt="20" spacing="20" ml="30">
              <IconButton
                colorScheme="gray"
                variant="solid"
                color="black"
                aria-label="Previous Event"
                icon={<FaArrowLeft />}
                size="lg"
                width="50px"
                height="50px"
                maxW="10vw"
              />
              <IconButton
                colorScheme="gray"
                variant="solid"
                color="black"
                aria-label="Next Event"
                size="lg"
                width="50px"
                height="50px"
                maxW="10vw"
                icon={<FaArrowRight />}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="https://grantme.ca/wp-content/uploads/2020/06/T5QFHJAQ75FJRNTZYAQ7T4KCRQ.png"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
