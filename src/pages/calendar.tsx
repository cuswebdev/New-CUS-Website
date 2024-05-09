import React from "react";
import { Layout, ContentSection } from "components";

import { PageTitle } from "components/PageTitle";
import { graphql, Link as GatsbyLink } from "gatsby";

import { EventsCalendar } from "components/Pages/Events";
import { Event } from "components/Pages/Home";
import {
  Box,
  Button,
  Center,
  Heading,
  Link,
  SimpleGrid,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import {
  formatEventDate,
  getAllEventsAfterCurrentDate,
  getAllEventsBeforeCurrentDate,
  getFirstKEventsAfterCurrentDate,
} from "utils/eventUtils";

import parse from "html-react-parser";
import { Carousel } from "components/Carousel";
import { Slide } from "components/Carousel/Carousel";
import { EventData } from "types/Event";
import { formatDate } from "utils/formatDate";

const slides: Slide[] = [
  {
    media:
      "https://www.sauder.ubc.ca/sites/default/files/dynamic_styles/scale/750/public/2019-05/about-ubc-sauder-hero.png",
    title: "Our Calendar",
    subtitle: "All events happening at UBC",
    label: "COMMERCE UNDERGRADUATE SOCIETY",
  },
];

const CalendarPage = ({ data }) => {
  const events: EventData[] = data?.allWpEvent.nodes ?? [];

  return (
    <Layout seoTitle="Calendar">
      <PageTitle title="Calendar" />
      {getFirstKEventsAfterCurrentDate(events, 5) && (
        <Carousel
          slides={getFirstKEventsAfterCurrentDate(events, 5).map(
            ({ eventData }) => ({
              media: eventData?.image?.sourceUrl ?? "",
              title: eventData.eventTitle ?? "",
              subtitle: `${formatDate(
                eventData.dateFrom,
                "MMM D, YYYY hh:mm A"
              )} 
            ${
              eventData.dateTo
                ? `to ${formatDate(eventData.dateTo, "MMM D, YYYY hh:mm A")}`
                : ""
            } ${eventData.location ? ` at ${eventData.location}` : ""}`,
              label: eventData.organizationName ?? "",
            })
          )}
        />
      )}
      <ContentSection>
        <Box>
          <Center flexDirection="column">
            <Button href="#calendar" as="a" mb={4}>
              Scroll to Calendar
            </Button>
            <Heading size="xl" mb="8" fontWeight="extrabold" color="black">
              Upcoming Events
            </Heading>
          </Center>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12" mb="5">
            {getAllEventsAfterCurrentDate(events).map((event) => (
              <Event
                eventType={event.eventData.eventType}
                date={formatEventDate(event)}
                media={event.eventData.image?.sourceUrl ?? ""}
                title={event.eventData.eventTitle ?? "Event"}
                description={parse(event.eventData.description ?? "")}
                href={`/events/${event.slug}`}
              />
            ))}
          </SimpleGrid>
        </Box>
        <div id="calendar">
          <EventsCalendar eventData={events} />
        </div>
        {/* <Box pb={24}>
          <Center>
            <Heading size="xl" mb="8" fontWeight="extrabold" color="black">
              Past Events
            </Heading>
          </Center>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12" mb="5">
            {getAllEventsBeforeCurrentDate(events)
              .reverse()
              .map((event) => (
                <Event
                  date={formatEventDate(event)}
                  media={event.eventData.image?.sourceUrl ?? ""}
                  title={event.eventData.eventTitle ?? "Event"}
                  description={parse(event.eventData.description ?? "")}
                  href={event.eventData.url}
                />
              ))}
          </SimpleGrid>
        </Box> */}
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query eventsQuery {
    allWpEvent(sort: { fields: eventData___dateFrom }) {
      nodes {
        id
        slug
        eventData {
          creatorFullName
          url
          organizationName
          fieldGroupName
          eventTitle
          eventType
          email
          description
          dateTo
          dateFrom
          location
          image {
            id
            sourceUrl
          }
        }
      }
    }
  }
`;

export default CalendarPage;
