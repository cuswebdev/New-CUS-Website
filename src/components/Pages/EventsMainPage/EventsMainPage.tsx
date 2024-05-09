import React from "react";
import { ImageLeftCTA } from "components/CTAComponents/ImageLeftCTA";
import { ImageRightCTA } from "components/CTAComponents/ImageRightCTA";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  Button,
  Box,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const EventsMainPage = () => {
  const content = "Cool events here";
  return (
    <>
      <Flex justifyContent="center">
        <Stack
          spacing={8}
          justifyContent="flex-start"
          alignItems="center"
          pt={8}
          pb={10}
          pl={10}
          pr={10}
        >
          <Heading>Calendar</Heading>
          <Text display="block" textAlign="center" width="90%" fontSize="18px">
            {content}
          </Text>
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
              Our Events
            </Button>
        </Stack>
      </Flex>
      <ImageLeftCTA
        title="Student life"
        text={content}
        image="https://experiencelife.lifetime.life/wp-content/uploads/2021/02/How-We-Run-1280x720.jpg"
        button1={{
          url: "#",
          text: "learn more",
        }}
      />
      <ImageRightCTA
        title="Student life"
        text={content}
        image="https://experiencelife.lifetime.life/wp-content/uploads/2021/02/How-We-Run-1280x720.jpg"
        button1={{
          url: "#",
          text: "learn more",
        }}
      />

    </>
  );
};

export default EventsMainPage;
