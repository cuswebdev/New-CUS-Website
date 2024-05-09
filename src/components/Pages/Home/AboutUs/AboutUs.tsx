import {
  Box,
  Button,
  Center,
  Heading,
  LightMode,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <Box
      as="section"
      bg="gray.800"
      py="24"
      position="relative"
      bgImage="url(https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1234-1024x683.jpg)"
      bgSize="cover"
      bgPosition="center"
      _after={{
        content: `""`,
        display: "block",
        w: "full",
        h: "full",
        bg: "blackAlpha.700",
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
            About Us
          </Heading>
          <Text fontSize="lg" fontWeight="medium" mt="3" maxWidth="800px">
            The CUS is one of the largest business school organizations in
            Canada. Guided by the pillars of personal, professional, and
            academic success, the CUS supports members through initiatives,
            services and clubs that host networking events, workshops,
            conferences, case competitions and many more. We strive to build an
            inclusive community where students feel empowered to discover their
            own journeys and unique experiences within the CUS and throughout
            their university years at UBC Sauder.
          </Text>
          <Link to="/about-us">
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
              Learn more
            </Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};

export default AboutUs;
