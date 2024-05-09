import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export const formatDate = (
  date: string | Date | null | undefined,
  format: string
) => {
  return dayjs(date).utc().format(format);
};

export const getDate = (date: string | Date | null | undefined) => {
  return dayjs(date).utc().toDate();
};
