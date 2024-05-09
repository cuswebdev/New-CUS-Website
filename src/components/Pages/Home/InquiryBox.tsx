import { Box, Heading } from "@chakra-ui/react";
import { InquiryForm } from "components/Forms";
import React, { FunctionComponent } from "react";

export const InquiryBox: FunctionComponent = () => {
  return (
    <Box as="section" py="10">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Heading
          size="xl"
          mb="8"
          fontWeight="extrabold"
          justifyContent="center"
          color="black"
        >
          We’re here to help!
        </Heading>
        <InquiryForm />
      </Box>
    </Box>
  );
};
