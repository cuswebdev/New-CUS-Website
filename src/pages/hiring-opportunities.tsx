import React, { useState } from "react";
import { Layout, ContentSection } from "components";

import { PageTitle } from "components/PageTitle";
import { graphql } from "gatsby";

import { HiringOpportunity, HiringType } from "types/HiringOpportunity";
import { HiringOpportunityCard } from "components/Pages/HiringOpportunities";
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";

const HiringOpportunitiesPage = ({ data }) => {
  const [typeFilter, setTypeFilter] = useState<HiringType | "">("");

  const hiringOpportunities: HiringOpportunity[] =
    data?.allWpHiring.nodes ?? [];

  return (
    <Layout seoTitle="Hiring Opportunities">
      <PageTitle
        title="Hiring Opportunities"
        description="Get involved with the UBC Sauder Community!"
      />
      <ContentSection>
        <FormControl id="filter" mb="3">
          <FormLabel>Filter by Hiring Type</FormLabel>
          <Select
            placeholder="All Hiring Opportunities"
            value={typeFilter}
            onChange={(e) =>
              setTypeFilter(e.target.value as unknown as HiringType)
            }
          >
            {Object.keys(HiringType).map((option) => (
              <option key={option} value={option}>
                {HiringType[option]}
              </option>
            ))}
          </Select>
        </FormControl>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6" mb="2">
          {hiringOpportunities
            .filter(
              (hiringOpportunity) =>
                hiringOpportunity.hiringData.type === typeFilter || !typeFilter
            )
            .map((hiringOpportunity, idx) => (
              <HiringOpportunityCard
                key={idx}
                hiringOpportunity={hiringOpportunity}
              />
            ))}
        </SimpleGrid>
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query hiringOpportunitiesQuery {
    allWpHiring(sort: { fields: hiringData___startDate }) {
      nodes {
        id
        slug
        hiringData {
          description
          endDate
          type
          fieldGroupName
          image {
            id
            sourceUrl
          }
          organization
          position
          startDate
          url
        }
      }
    }
  }
`;

export default HiringOpportunitiesPage;
