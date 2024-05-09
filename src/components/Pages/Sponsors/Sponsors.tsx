import React from "react";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { Email } from "components/Email";
import { ContentSection } from "components/ContentSection";
import { Stats } from "../Home";
const Sponsors = () => {
  return (
    <ContentSection small>
      <Flex justifyContent="center">
        <Stack spacing={8} justifyContent="flex-start" py={10}>
          <Heading>Let's Collaborate</Heading>
          <Text>
            CUS’ mission is to enhance the value of UBC Sauder School of
            Business experience by cultivating personal, professional, and
            academic success of students.
            <br />
            <br />
            Our sponsors make it possible for students to be a part of such an
            enriching community. If you are interested in making an impact on
            UBC Sauder School of Business undergraduate students’ journey,
            please contact: <br /> <br />
            Rachel Kim, Vice-President External Affairs
            <br />
            Email: <Email>vpexternal@cus.ca</Email>
          </Text>
        </Stack>
      </Flex>
      <Stats />
    </ContentSection>
  );
};

export default Sponsors;
