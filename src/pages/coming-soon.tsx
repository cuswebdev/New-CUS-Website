import React, { useEffect } from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";
import { ImageLeftCTA, ImageRightCTA } from "components/CTAComponents";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroTextOverlay } from "components/HeroTextOverlay";

const YearbookAndProspectusPage = () => {
  return (
    <Layout seoTitle="Coming Soon">
      <ContentSection
        small
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minHeight="80vh"
      >
        <Heading color="primary" pb={8}>
          Coming Soon...
        </Heading>
        <Text fontSize="lg">
          For any inquiries, please contact vpmarketing@cus.ca
        </Text>
      </ContentSection>
    </Layout>
  );
};

export default YearbookAndProspectusPage;
