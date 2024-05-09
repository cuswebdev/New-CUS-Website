import React from "react";
import parse from "html-react-parser";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Event } from "components/Pages/Home";
import { Layout } from "../components/Layout";
import { graphql, Link } from "gatsby";
import { ContentSection } from "components";

import { PageTitle } from "components/PageTitle";
import { SocialShare } from "components/SocialShare";
import dayjs from "dayjs";
import { FaBookmark } from "react-icons/fa";
import {
  formatEventDate,
  getFirstKEventsAfterCurrentDate,
} from "utils/eventUtils";
import { googleCalendarEventUrl } from "google-calendar-url";
import { formatDate } from "utils/formatDate";

const EventTemplate = ({
  data: {
    wpEvent: {
      title,
      eventData: {
        dateFrom,
        dateTo,
        description,
        eventTitle,
        fieldGroupName,
        image,
        location,
        organizationName,
        url,
      },
    },
    allWpEvent,
  },
}) => {
  const events = allWpEvent.nodes ?? [];
  const sourceUrl = image?.sourceUrl;

  return (
    <Layout isHomePage={false} seoTitle={title}>
      <PageTitle title={title} />
      <Image
        objectFit="cover"
        h={{ base: "auto" }}
        maxHeight="800px"
        w="100%"
        src={sourceUrl}
      />
      <ContentSection small>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <HStack mb={4}>
            <Box
              borderRadius="50%"
              p={4}
              fontSize="lg"
              background="#E2F1ED"
              width="fit-content"
            >
              <FaBookmark color="#4DBBEE" />
            </Box>
            <Text>
              <b>Hosted By: {organizationName}</b>
            </Text>
          </HStack>
          <Text fontSize="xl" color="primary" pb={4}>
            {formatDate(dateFrom, "MMM D, YYYY hh:mm A")}{" "}
            {dateTo && `to ${formatDate(dateTo, "MMM D, YYYY hh:mm A")}`}
          </Text>
        </Stack>
        {location && (
          <Text pb={4} color="primary">
            <b>Location:</b> {location}
          </Text>
        )}
        {!!description && <Box pb={6}>{parse(description)}</Box>}
        {url && (
          <Link to={url}>
            <Button mb={8}>Learn More</Button>
          </Link>
        )}
        <Link
          to={googleCalendarEventUrl({
            start: formatDate(dateFrom, "YYYYMMDDTHHmmss"),
            end: dateTo
              ? formatDate(dateTo, "YYYYMMDDTHHmmss")
              : formatDate(dateFrom, "YYYYMMDDTHHmmss"),
            title: title,
            details: description,
            location: location,
          })}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button ml={2} mb={8}>
            Add to Calendar
          </Button>
        </Link>
        <SocialShare />
      </ContentSection>
      <ContentSection>
        <Box>
          <Center>
            <Heading size="xl" mb="8" fontWeight="extrabold" color="black">
              Upcoming Events
            </Heading>
          </Center>
          {getFirstKEventsAfterCurrentDate(events, 3).length === 0 && (
            <Text>No upcoming events! Check back soon for updates.</Text>
          )}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="12" mb="5">
            {getFirstKEventsAfterCurrentDate(events, 3).map((event) => (
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
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    wpEvent(id: { eq: $id }) {
      id
      title
      eventData {
        dateFrom
        dateTo
        description
        eventTitle
        fieldGroupName
        image {
          sourceUrl
        }
        location
        organizationName
        url
      }
    }
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

export default EventTemplate;
