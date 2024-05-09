import React from "react";
import { ContentSection, Layout } from "components";
import { PageTitle } from "components/PageTitle";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import CusBroadcast from "components/Pages/CusBroadcast";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";

const CusBroadcastPage = () => {
  return (
    <Layout seoTitle="CUS Broadcast">
      <PageTitle title="CUS Broadcast" />
      <HeroTextOverlay
        title="Building an Engaged Community"
        description="We want to share important information with you during your undergraduate years within the Sauder community. Through the broadcast, we hope to provide greater transparency for who we are and what we stand for as an Undergraduate Society and the inner workings of the CUS."
        img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1158-1024x683.jpg"
      />
      <ContentSection mt={-10}>
        <Stack
          alignItems="baseline"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          mb="8"
        >
          <Heading size="xl" fontWeight="extrabold" color="black">
            Latest News
          </Heading>
          <Link to="https://medium.com/@cusubc">
            <Button
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
              View All
            </Button>
          </Link>
        </Stack>
        <CusBroadcast />
      </ContentSection>
    </Layout>
  );
};

export default CusBroadcastPage;
