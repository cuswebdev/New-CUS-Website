import {
  Box,
  Flex,
  Heading,
  Img,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  Button,
  Stack,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { graphql, Link as GatsbyLink, useStaticQuery } from "gatsby";
import {
  formatEventDate,
  getFirstKEventsAfterCurrentDate,
} from "utils/eventUtils";
import { FaArrowRight } from "react-icons/fa";

import parse from "html-react-parser";
import { EventType, eventTypeColors } from "types/Event";
import { isSafari } from "react-device-detect";
import { CarouselCard } from "components/CarouselCard";

interface EventProps {
  date: string;
  title: string;
  eventType: EventType;
  href: string | null;
  media: string;
  description: string | JSX.Element | JSX.Element[] | null;
  noTruncate?: boolean;
}

export const Event = (props: EventProps) => {
  const { title, eventType, href, description, media, date, noTruncate } =
    props;

  return (
    <LinkBox
      as="article"
      shadow={{ sm: "base" }}
      rounded={{ sm: "md" }}
      overflow="hidden"
      transition="all 0.5s"
      _hover={{ shadow: { sm: "2xl" } }}
    >
      <Flex direction="column">
        <Img height="60" objectFit="cover" alt={title} src={media} />
        <Flex direction="column" px={{ sm: "6" }} py="5">
          <Badge
            width="fit-content"
            variant="solid"
            backgroundColor={eventTypeColors[eventType as EventType]}
            mb={3}
          >
            {eventType}
          </Badge>
          <Text
            casing="uppercase"
            letterSpacing="wider"
            fontSize="xs"
            fontWeight="semibold"
            mb="2"
            color="primary"
          >
            {date}
          </Text>
          {title && (
            <Heading as="h3" size="md" mb="2" lineHeight="base">
              <LinkOverlay href={href || "#"}>{title}</LinkOverlay>
            </Heading>
          )}
          <Text noOfLines={noTruncate ? 100 : 2} mb="8">
            {typeof description === "string" || description === null
              ? description
              : description[0]}
          </Text>
          <Flex align="baseline" justify="space-between" fontSize="sm"></Flex>
        </Flex>
      </Flex>
    </LinkBox>
  );
};

export const MainPageEvents = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpEvent(sort: { fields: eventData___dateFrom }) {
        nodes {
          id
          slug
          eventData {
            creatorFullName
            dateFrom
            dateTo
            description
            email
            eventTitle
            eventType
            fieldGroupName
            location
            organizationName
            url
            image {
              id
              sourceUrl
            }
          }
        }
      }
    }
  `);

  const events = getFirstKEventsAfterCurrentDate(data.allWpEvent.nodes, 6);

  return (
    <Box as="section" sx={{ overflow: "hidden" }} py={{ base: "6", sm: "12" }}>
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
      >
        <Stack
          alignItems="baseline"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          mb="8"
        >
          <Heading size="xl" fontWeight="extrabold" color="black">
            Upcoming Events
          </Heading>
          <GatsbyLink to="/calendar">
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
          </GatsbyLink>
        </Stack>
        {events.length === 0 && (
          <Text>No upcoming events! Check back soon for updates.</Text>
        )}
        <CarouselCard>
          {events.map((event, idx) => (
            <Event
              key={idx}
              eventType={event.eventData.eventType}
              date={formatEventDate(event)}
              media={event.eventData.image?.sourceUrl ?? ""}
              title={event.eventData.eventTitle ?? "Event"}
              description={parse(event.eventData.description ?? "")}
              href={`/events/${event.slug}`}
              noTruncate={event.eventData.noTruncate ?? false}
            />
          ))}
        </CarouselCard>
      </Box>
    </Box>
  );
};
