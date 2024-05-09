import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import {
  Flex,
  Stack,
  Heading,
  Button,
  Box,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { ImageRightCTA, ImageLeftCTA } from "components/CTAComponents";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "gatsby";
import { PortalBox } from "components/PortalBox";

const GetInvolvedPage = () => {
  return (
    <Layout seoTitle="Get Involved">
      <PageTitle
        title="Get Involved"
        description="There are so many different ways for you to get involved with the Sauder community, whether you enjoy finances, marketing, design, event planning, and etc,, there is an opportunity for you to get involved. What are you waiting for? Let’s bring out the leader in you! :)"
      />
      <ContentSection>
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
            <Heading>Hiring Opportunities</Heading>
            <Text
              display="block"
              textAlign="center"
              width="90%"
              fontSize="18px"
            >
              Check out the latest hiring opportunities from the CUS and our
              clubs and services.
            </Text>
            <Link to="/hiring-opportunities">
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
                Check it out
              </Button>
            </Link>
          </Stack>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <PortalBox
            img="https://admin.cus.ca/wp-content/uploads/2021/08/coo-768x432.jpeg"
            url="/join-the-cus"
            description="Why join the CUS? Here are the reasons why our team joined."
            title="Join the CUS"
          />
          <PortalBox
            img="https://admin.cus.ca/wp-content/uploads/2021/08/Back-To-School-768x512.jpg"
            url="/get-to-know"
            description="Want to get to know more about our clubs and services. Here is your chance to explore the clubs and services that resonate with you."
            title="Get To Know"
          />
        </SimpleGrid>
      </ContentSection>
    </Layout>
  );
};

export default GetInvolvedPage;
