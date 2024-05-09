import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { ExpandableCardGrid } from "components/ExpandableCardGrid";
import { CusAccordion, CusAccordionItem } from "components/CusAccordion";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import dayjs from "dayjs";
import { PageMenuBar } from "components/PageMenuBar";
import { HowWeRunPageMenu } from "components/PageMenuBar/_data";
import { formatDate } from "utils/formatDate";

interface MeetingMinute {
  date: string;
  type: string;
  file: {
    mediaItemUrl: string;
  };
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const createAccordionItems = (
  meetingMinutes: MeetingMinute[]
): CusAccordionItem[] => {
  const items: Record<string, Record<string, MeetingMinute[]>> = {}; // intermediate data structure to store the items
  const accordionItems: CusAccordionItem[] = [];

  meetingMinutes.forEach(({ date, type, file }) => {
    const year = `${new Date(date).getFullYear()}`;
    const month = new Date(date).toLocaleString("default", { month: "long" });

    let yearItem = items[year];

    if (!yearItem) {
      items[year] = {};
      yearItem = items[year];
    }

    let monthItem = yearItem[month];

    if (!monthItem) {
      yearItem[month] = [];
      monthItem = yearItem[month];
    }

    monthItem.push({ date, type, file });
  });

  Object.entries(items)
    .sort(([a], [b]) => Number(b) - Number(a)) // sort by year descending
    .forEach(([year, monthItems]) => {
      accordionItems.push({
        title: year,
        innerItems: Object.entries(monthItems)
          .sort(([a], [b]) => months.indexOf(b) - months.indexOf(a)) // sort by months descending
          .map(([month, entries]) => ({
            title: month,
            content: (
              <Box>
                {entries
                  .sort(
                    ({ date: dateA }, { date: dateB }) =>
                      new Date(dateB).getTime() - new Date(dateA).getTime()
                  ) // sort by date descending
                  .map(({ date, file, type }) => (
                    <Link
                      display="block"
                      href={file.mediaItemUrl}
                      color="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      my={1}
                    >
                      {type} - {formatDate(date, "MMM D, YYYY")}
                    </Link>
                  ))}
              </Box>
            ),
          })),
      });
    });

  return accordionItems;
};

const MeetingMinutesPage = ({ data }) => {
  const meetingMinutes: MeetingMinute[] = (
    data?.allWpMeetingMinutes?.nodes ?? []
  ).map((item) => item.meetingMinutes);
  return (
    <Layout seoTitle="Meeting Minutes">
      <PageTitle title="How We Run" />
      <PageMenuBar items={HowWeRunPageMenu} />
      <ContentSection small>
        <Heading mb={4}>Meeting and Minutes</Heading>
        <Text mb={4}>
          All the CUS meetings are open to students with membership status,
          unless otherwise deemed as “in-camera”. Students are encouraged to
          attend the meetings, and will be granted speaking rights.
          Presentations and/or proposed motions from parties other than the
          members of the Board of Directors should be requested to be considered
          for inclusion on the agenda at least seven (7) days in advance of a
          meeting by contacting the Chair – materials received past this point
          will be considered for the subsequent meeting’s agenda at the Chair’s
          discretion.
        </Text>
        <CusAccordion items={createAccordionItems(meetingMinutes)} />
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpMeetingMinutes(sort: { fields: meetingMinutes___date }) {
      nodes {
        meetingMinutes {
          date
          type
          file {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export default MeetingMinutesPage;
