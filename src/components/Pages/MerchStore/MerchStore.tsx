import React from "react";
import {
  Flex,
  Stack,
  Heading,
  Text,
  Box,
  Button,
  Link,
} from "@chakra-ui/react";
import { ContentSection } from "components/ContentSection";

const MerchStore = () => {
  return (
    <>
      <Flex justifyContent="center" pb={4}>
        <ContentSection>
          <Box textAlign="center">
            <Heading size="2xl" mb={4}>
              Comm Collection out now!
            </Heading>
            <a href="https://commcollection.com/" target="_blank">
              <Button size="lg">Check it out here</Button>
            </a>
          </Box>
        </ContentSection>
      </Flex>
    </>
  );
};

export default MerchStore;
