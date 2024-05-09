import { Box, HStack, Stack, Text, Button } from "@chakra-ui/react";
import React from "react";
import { CallToActionLink } from "./CallToActionLink";
import { CloseButton } from "./CloseButton";
import { useState } from "react";

const Banner = () => {
  const [banner, setBanner] = useState(true);

  if (!banner) {
    return null;
  }

  return (
    <Box as="section">
      <Box
        bg="linear-gradient(70deg, #4dbbee, #a4dbe8)"
        color="white"
        py="3"
        px={{ base: "3", md: "6", lg: "8" }}
      >
        <HStack spacing="3">
          <Stack
            direction={{ base: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ base: "3", md: "6" }}
            width="full"
          >
            <Text>
              <b>Check out the Commerce Collection </b>
            </Text>
            <a href="https://commcollection.com/" target="_blank" rel="noopener noreferrer">
            <Button
              className="group"
              size="md"
              px="8"
              variant="outline"
              iconSpacing="3"
              href="https://commcollection.com/"
            >
              Shop Now
            </Button>
            </a>
          </Stack>
          <CloseButton
            alignSelf={{ base: "self-start", sm: "initial" }}
            aria-label="Close banner"
            onClick={() => setBanner(false)}
          />
        </HStack>
      </Box>
    </Box>
  );
};

export default Banner;
