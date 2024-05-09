import dayjs from "dayjs";

export const convertToVancouverTime = (values: Record<string, any>) => {
  const newValues = {};

  // convert any date values in values to Vancouver time
  Object.keys(values).forEach((key) => {
    if (
      ["date_from", "date_to", "start_date", "end_date"].includes(key) &&
      values[key]
    ) {
      newValues[key] = dayjs(values[key]).subtract(7, "h").toISOString();
    } else {
      newValues[key] = values[key];
    }
  });

  return newValues;
};
