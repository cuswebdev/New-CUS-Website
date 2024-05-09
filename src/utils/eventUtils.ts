import { EventData } from "types/Event";
import dayjs from "dayjs";
import { formatDate } from "./formatDate";

export const getAllEventsAfterCurrentDate = (events: EventData[]) => {
  return events.filter(
    (event) => new Date(event.eventData.dateFrom!) >= new Date()
  );
};

export const getAllEventsBeforeCurrentDate = (events: EventData[]) => {
  return events.filter(
    (event) => new Date(event.eventData.dateFrom!) < new Date()
  );
};

export const getFirstKEventsAfterCurrentDate = (
  events: EventData[],
  k: number
) => {
  return getAllEventsAfterCurrentDate(events).slice(0, k);
};

export const formatEventDate = (event: EventData) => {
  const dateFrom = formatDate(event.eventData.dateFrom!, "MMM D, h:mm a");
  const dateTo = event.eventData.dateTo
    ? ` - ${formatDate(event.eventData.dateTo, "MMM D, h:mm a")}`
    : "";

  return dateFrom + dateTo;
};
