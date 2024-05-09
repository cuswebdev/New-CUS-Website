import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { CusAccordion, CusAccordionItem } from "components/CusAccordion";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";

import parse from "html-react-parser";
import { PageMenuBar } from "components/PageMenuBar";
import { HowWeRunPageMenu } from "components/PageMenuBar/_data";

interface CusCommittee {
  title: string;
  description: string;
}

const CUSCommitteesPage = ({ data }) => {
  const cusCommittees: CusCommittee[] = (
    data?.allWpCusCommittee?.nodes ?? []
  ).map((item) => ({
    title: item.title,
    description: item.cusCommittee.description,
  }));

  return (
    <Layout seoTitle="CUS Committees">
      <PageTitle title="How We Run" />
      <PageMenuBar items={HowWeRunPageMenu} />
      <ContentSection small>
        <Heading mb={4}>CUS Committees</Heading>
        <Text mb={4}>
          The CUS is a vast organization. To ensure that we are addressing all
          fields of student life, the Society has established committees to
          oversee and govern different aspects of the CUS, ranging from academic
          affairs to relations with faculty and the university. The committees
          vary in their functions, and most notably, members of the general
          public can hold seats within these committees and participate in the
          CUS’s planning and operations. Committees play a crucial role in
          helping the CUS support all commerce students during their university
          career.
        </Text>
        <CusAccordion
          items={cusCommittees.map((cusCommittee) => {
            return {
              title: cusCommittee.title,
              content: (
                <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
                  {parse(cusCommittee.description)}
                </Box>
              ),
            };
          })}
        />
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpCusCommittee {
      nodes {
        cusCommittee {
          description
        }
        title
      }
    }
  }
`;

export default CUSCommitteesPage;
