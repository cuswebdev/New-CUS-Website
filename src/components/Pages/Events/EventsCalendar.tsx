import React, { FunctionComponent, useMemo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

import { EventModal } from "./EventModal";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Stack,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { EventData, EventType, eventTypeColors } from "types/Event";

import "./EventsCalendar.scss";
import { isMobile } from "react-device-detect";
import dayjs from "dayjs";
import { getDate } from "utils/formatDate";

interface EventsCalendarProps {
  eventData: EventData[];
}

export const EventsCalendar: FunctionComponent<EventsCalendarProps> = ({
  eventData,
}) => {
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(
    undefined
  );
  const [eventTypeFilter, setEventTypeFilter] = useState<EventType | "">("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const events = useMemo(
    () =>
      eventData
        .filter(
          (event) =>
            !eventTypeFilter || event.eventData.eventType === eventTypeFilter
        )
        .map((event) => ({
          id: event.id,
          title: event.eventData.eventTitle ?? "Event",
          start: getDate(event.eventData.dateFrom),
          end: event.eventData.dateTo
            ? getDate(event.eventData.dateTo)
            : undefined,
          color: eventTypeColors[event.eventData.eventType],
        })),
    [eventData, eventTypeFilter]
  );

  const selectedEvent: EventData | undefined = eventData.find(
    ({ id }) => id === selectedEventId
  );

  const handleEventClick = (info) => {
    onOpen();
    setSelectedEventId(info.event.id);
  };

  const handleClose = () => {
    setSelectedEventId(undefined);
    onClose();
  };

  return (
    <>
      <Stack direction="row-reverse">
        <FormControl id="email" mb="3">
          <FormLabel>Filter by Event Type</FormLabel>
          <Select
            placeholder="All events"
            value={eventTypeFilter}
            onChange={(e) =>
              setEventTypeFilter(e.target.value as unknown as EventType)
            }
          >
            {Object.keys(EventType).map((option) => (
              <option key={option} value={option}>
                {EventType[option]}
              </option>
            ))}
          </Select>
        </FormControl>
      </Stack>
      <Text color="primary" as="i">
        *Click on the event name for a preview or to add to your calendar!
      </Text>
      <FullCalendar
        plugins={[dayGridPlugin]}
        events={events}
        initialView={isMobile ? "dayGridDay" : "dayGridMonth"}
        eventClick={handleEventClick}
        timeZone="UTC"
      />
      <EventModal
        selectedEvent={selectedEvent}
        handleClose={handleClose}
        isOpen={isOpen}
      />
    </>
  );
};
