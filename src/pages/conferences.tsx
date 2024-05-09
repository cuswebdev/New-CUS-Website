import React from "react";
import { Layout, ContentSection } from "components";

import { Event } from "components/Pages/Home";
import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import { formatEventDate } from "utils/eventUtils";

import parse from "html-react-parser";
import { Carousel } from "components/Carousel";
import { FullWidthCTA } from "components/CTAComponents";
import { Slide } from "components/Carousel/Carousel";
import { conferences } from "data/conferences";
import { toKebabCase } from "utils/kebab";

const slides: Slide[] = [
  {
    media:
      "https://www.sauder.ubc.ca/sites/default/files/dynamic_styles/scale/750/public/2019-05/about-ubc-sauder-hero.png",
    title: "Our Conferences",
    subtitle: "All conferences happening at UBC",
    label: "COMMERCE UNDERGRADUATE SOCIETY",
    button1: {
      text: "Conferences",
      url: "/conferences",
    },
    button2: {
      text: "Annual Events",
      url: "/annual-events",
    },
  },
];

const AnnualConferencesPage = () => {
  return (
    <Layout seoTitle="Annual Conferences">
      <Carousel slides={slides} />
      <ContentSection>
        <Box>
          <Center>
            <Heading size="xl" mb="8" fontWeight="extrabold" color="black">
              Annual Conferences
            </Heading>
          </Center>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="12" mb="5">
            {conferences.map(
              ({ eventType, date, media, title, description, page }) => (
                <Event
                  eventType={eventType}
                  date={date}
                  media={media ?? ""}
                  title={title ?? "Event"}
                  description={description ?? parse(page ?? "")}
                  href={`/conferences/${toKebabCase(title)}`}
                  noTruncate
                />
              )
            )}
          </SimpleGrid>
        </Box>
      </ContentSection>
      <FullWidthCTA
        title="Calendar"
        text="View all events happening at or around CUS"
        button1={{ text: "View Calendar", url: "/calendar" }}
      />
    </Layout>
  );
};

export default AnnualConferencesPage;
