import { HiringOpportunity } from "types/HiringOpportunity";

import dayjs from "dayjs";
import { formatDate } from "./formatDate";

export const formatHiringOpportunityEndDate = (
  hiringOpportunity: HiringOpportunity
) => {
  return formatDate(hiringOpportunity.hiringData.endDate, "MMM D");
};
