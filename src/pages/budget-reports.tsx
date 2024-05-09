import React from "react";
import { Layout, ContentSection, EmbededPdf } from "components";
import { PageTitle } from "components/PageTitle";
import { CusAccordion, CusAccordionItem } from "components/CusAccordion";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import dayjs from "dayjs";
import { PageMenuBar } from "components/PageMenuBar";
import { HowWeRunPageMenu } from "components/PageMenuBar/_data";
import { formatDate } from "utils/formatDate";
import { Email } from "components/Email";

interface BudgetReport {
  date: string;
  fiscalYear: number;
  quarter: string;
  file: {
    mediaItemUrl: string;
  };
}

const createAccordionItems = (
  budgetReports: BudgetReport[]
): CusAccordionItem[] => {
  const items: Record<string, Record<string, BudgetReport[]>> = {}; // intermediate data structure to store the items
  const accordionItems: CusAccordionItem[] = [];

  budgetReports.forEach((budgetReport) => {
    const { date, quarter, fiscalYear } = budgetReport;

    let yearItem = items[fiscalYear];

    if (!yearItem) {
      items[fiscalYear] = {};
      yearItem = items[fiscalYear];
    }

    let quarterItem = yearItem[quarter];

    if (!quarterItem) {
      yearItem[quarter] = [];
      quarterItem = yearItem[quarter];
    }

    quarterItem.push(budgetReport);
  });

  Object.entries(items)
    .sort(([a], [b]) => Number(b) - Number(a)) // sort by year descending
    .forEach(([year, monthItems]) => {
      accordionItems.push({
        title: year,
        innerItems: Object.entries(monthItems)
          .sort(([a], [b]) => b.localeCompare(a)) // sort by quarter descending
          .map(([month, entries]) => ({
            title: month,
            content: (
              <Box>
                {entries
                  .sort(
                    ({ date: dateA }, { date: dateB }) =>
                      new Date(dateB).getTime() - new Date(dateA).getTime()
                  ) // sort by date descending
                  .map(({ date, file }) => (
                    <Link
                      display="block"
                      href={file.mediaItemUrl}
                      color="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      my={1}
                    >
                      Budget Report - {formatDate(date, "MMM D, YYYY")}
                    </Link>
                  ))}
              </Box>
            ),
          })),
      });
    });

  return accordionItems;
};
const BudgetReportsPage = ({ data }) => {
  const meetingMinutes: BudgetReport[] = (
    data?.allWpBudgetReport?.nodes ?? []
  ).map((item) => item.budgetReport);
  return (
    <Layout seoTitle="Budget Reports">
      <PageTitle title="How We Run" />
      <PageMenuBar items={HowWeRunPageMenu} />
      <ContentSection small>
        <Text mb={4}>
          The CUS Finance and Audit Commission are a team of dedicated
          individuals who work with the Service Council in order to manage,
          analyze, and report information regarding the financial status of the
          CUS. The Finance and Audit Commission oversees the budgeting process,
          reimbursement system, and the creation of the CUS mid-year and annual
          reports. The team is composed of the VP Finance, Associate VP
          Finances, Financial Analyst Lead, Audit Lead, Financial Analysts, and
          Audit Associates.
        </Text>
        <Heading mb={4}>Budget Reports</Heading>
        <Text mb={4}>
          The UBC Commerce Undergraduate Society provides Sauder undergraduate
          students with social and professional growth opportunities through
          more than 30 Service Lines, which constitutes the Service Council.
          Entirely run by students, each Service Line reaches out to fellow
          students by hosting conferences, workshops, competitions, or social
          events. These programs are made possible by the CUS Service Council,
          Executives, and the Board of Directors. In these annual reports, you
          will find financial information outlining the achievements and
          challenges for the Service Council.
        </Text>
        <CusAccordion items={createAccordionItems(meetingMinutes)} />
        <Heading my={4}>Student Fees</Heading>
        <CusAccordion
          items={[
            {
              title: "$500 Building Renewal Fee",
              content: (
                <EmbededPdf url="https://admin.cus.ca/wp-content/uploads/2021/08/Annual-500-Building-Renewal-Fee.pdf" />
              ),
            },
            {
              title: "Co-op Refunds",
              content: (
                <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
                  Sauder students completing a work term as part of the co-op
                  program are eligible for a $100 refund for each term (Fall or
                  Winter only, Summer terms not included). Our Finance Team is
                  currently looking to automating this process and will provide
                  updates to this page. If you would like to send in
                  reimbursement requests for Co-op terms (prior to Jan 2021),
                  please contact <Email>finance.general@cus.ca</Email> along
                  with your name, phone number, screenshot of proof (SSC or
                  other mediums) or if you have any questions.
                </Box>
              ),
            },
          ]}
        />
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpBudgetReport {
      nodes {
        budgetReport {
          date
          fiscalYear
          quarter
          file {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export default BudgetReportsPage;
