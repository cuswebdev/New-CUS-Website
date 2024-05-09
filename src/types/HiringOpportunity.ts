export interface HiringOpportunity {
  id: string;
  slug: string;
  hiringData: {
    description: string | null;
    type: HiringType;
    endDate: string | null;
    image: null | {
      id: string;
      sourceUrl: string;
    };
    organization: string | null;
    position: string;
    startDate: string;
    url: string | null;
  };
}

export enum HiringType {
  CUS = "CUS",
  Services = "Services",
  Other = "Clubs/Other",
}

export const hiringTypeColors: Record<HiringType, string> = {
  [HiringType.CUS]: "#01BCE4",
  [HiringType.Services]: "gray",
  [HiringType.Other]: "gray",
};
