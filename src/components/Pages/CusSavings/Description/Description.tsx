import {
  Box,
  Flex,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Email } from "components/Email";
import React from "react";
import { MdGroup, MdPermPhoneMsg } from "react-icons/md";

const Description = () => {
  return (
    <Box as="section">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        py="12"
      >
        <Flex
          align="center"
          justify="center"
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Box flex="1" maxW="440px">
            <Heading
              size="2xl"
              fontWeight="extrabold"
              color={useColorModeValue("blue.600", "blue.300")}
            >
              CUSavings
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "inherit")}
              mt="10"
            >
              CUSavings is Sauder’s very own student benefits program, initiated
              by the CUS External portfolio to support our students and local
              businesses. CUSavings aims to provide value to our students by
              alleviating their financial stress. With COVID-19, we realized a
              need for support and wanted to help students save money through
              various benefits. We also want to support to our community and our
              local businesses that have been impacted by COVID-19.
            </Text>

            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "inherit")}
              mt="10"
            >
              Which businesses do you think we should partner with? Let us know
              by filling out this survey.
            </Text>

            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "inherit")}
              mt="10"
            >
              If you have any questions, please reach out to{" "}
              <Email>cusavings@cus.ca</Email>.
            </Text>
          </Box>

          <Box
            aria-hidden
            className="spacer"
            flexShrink={0}
            boxSize={{ base: "10", xl: "20" }}
          />

          <Box flex="1" maxW="560px" h={{ base: "400px", md: "460px" }}>
            <Img
              transform="scale(1.0)"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.10)",
              }}
              alt="Call center"
              w="full"
              h="full"
              objectFit="cover"
              objectPosition="right"
              src="https://cus.ca/wp-content/uploads/2020/10/CUSavings-Logo-FINAL.png"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Description;
