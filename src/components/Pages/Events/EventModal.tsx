import React, { FunctionComponent } from "react";
import { EventData, EventType, eventTypeColors } from "types/Event";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Box,
  Skeleton,
  Badge,
  Link,
} from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";

import parse from "html-react-parser";
import { googleCalendarEventUrl } from "google-calendar-url";
import { formatDate } from "utils/formatDate";

interface EventModalProps {
  selectedEvent?: EventData;
  isOpen: boolean;
  handleClose: () => void;
}

export const EventModal: FunctionComponent<EventModalProps> = ({
  selectedEvent,
  isOpen,
  handleClose,
}) => {
  const {
    eventTitle,
    image,
    description,
    url,
    eventType,
    dateTo,
    dateFrom,
    location,
  } = selectedEvent?.eventData ?? {};

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="xl"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent top="16px">
        <ModalHeader>{eventTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Badge
            variant="solid"
            backgroundColor={eventTypeColors[eventType as EventType]}
            mb={3}
          >
            {eventType}
          </Badge>
          {image?.sourceUrl && (
            <Image
              src={image.sourceUrl}
              alt={eventTitle ?? ""}
              fallback={<Skeleton height="200px" />}
            />
          )}
          <Box mt="3">{parse(description ?? "")}</Box>
          <Box>
            <Link
              href={googleCalendarEventUrl({
                start: formatDate(dateFrom, "YYYYMMDDTHHmmss"),
                end: dateTo
                  ? formatDate(dateTo, "YYYYMMDDTHHmmss")
                  : formatDate(dateFrom, "YYYYMMDDTHHmmss"),
                title: eventTitle!,
                details: description!,
                location: location!,
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              Add to Calendar
            </Link>
          </Box>
        </ModalBody>

        <ModalFooter>
          {url && (
            <GatsbyLink to={url} target="_blank" rel="noopener noreferrer">
              <Button colorScheme="blue" mr={3}>
                Learn More
              </Button>
            </GatsbyLink>
          )}
          <GatsbyLink to={`/events/${selectedEvent?.slug}`}>
            <Button variant="ghost">View event page</Button>
          </GatsbyLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
