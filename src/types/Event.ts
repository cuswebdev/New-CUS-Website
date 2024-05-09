export interface EventData {
  id: string;
  eventData: {
    creatorFullName: string | null;
    eventType: EventType;
    dateFrom: string | null;
    dateTo: string | null;
    description: string | null;
    email: string | null;
    eventTitle: string | null;
    noTruncate: boolean
    image: {
      id: string;
      sourceUrl: string;
    } | null;
    location: string | null;
    organizationName: string | null;
    url: string | null;
  };
  slug: string;
}

export enum EventType {
  Workshops = "Workshops",
  Conferences = "Conferences",
  Seminars = "Seminars",
  CaseCompetitions = "Case Competitions",
  IndustryConnections = "Industry Connections",
  StudentLifeEvents = "Student Life Events",
  Other = "Other",
}

export const eventTypeColors: Record<EventType, string> = {
  [EventType.Workshops]: "red",
  [EventType.Conferences]: "orange",
  [EventType.Seminars]: "purple",
  [EventType.CaseCompetitions]: "green",
  [EventType.IndustryConnections]: "teal",
  [EventType.StudentLifeEvents]: "blue",
  [EventType.Other]: "gray",
};
