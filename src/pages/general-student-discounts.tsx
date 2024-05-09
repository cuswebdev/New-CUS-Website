import React from "react";
import { Layout, ContentSection } from "components";
import { Description } from "components/Pages/CusSavings";
import { Table } from "components/Pages/CusSavings";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import { PageTitle } from "components/PageTitle";
import { graphql } from "gatsby";
import { ExpandableCardGrid } from "components/ExpandableCardGrid";
import parse from "html-react-parser";
import { Box } from "@chakra-ui/react";
import { PageMenuBar } from "components/PageMenuBar";
import { GeneralSavings } from "components/PageMenuBar/_data";
import { useState } from "react";

export interface Discount {
  company: string;
  companyDescription: string;
  image?: {
    sourceUrl: string;
  };
  offerDescription: string;
  category: string;
}

const CusSavingsPage = ({ data }) => {
  const discounts: Discount[] = data.allWpDiscount.nodes.map(
    (node) => node.discount
  );

  const [filter, setFilters] = useState("all");

  let discountsToRender: Discount[] = discounts.filter((discount) => {
    return discount.category === filter || filter === "all";
  });

  return (
    <Layout seoTitle="Student Discounts">
      <PageTitle title="General Student Discounts" />
      <PageMenuBar items={GeneralSavings} func={setFilters} />

      <HeroTextOverlay
        img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1116-scaled.jpg"
        title="General Student Discounts"
        description={`It’s time to save! As a student, you are eligible to receive many exciting discounts from various organizations and businesses. The CUS Corporate Relations team has compiled this list of places that may interest you.`}
      />
      <ContentSection mt={-12} pt={0}>
        <ExpandableCardGrid
          items={discountsToRender.map((discount) => ({
            title: discount.company,
            description: discount.companyDescription,
            image: discount.image && discount.image.sourceUrl,
            data: discount.offerDescription,
          }))}
          renderMore={(offerDescription) => (
            <Box
              className="discount"
              py={4}
              px={{ base: 4, md: 8 }}
              color="black"
              bg="white"
            >
              {parse(offerDescription as string)}
            </Box>
          )}
        />
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpDiscount(
      filter: { discount: { type: { eq: "General Student Discount" } } }
    ) {
      nodes {
        discount {
          company
          companyDescription
          image {
            sourceUrl
          }
          offerDescription
          category
        }
      }
    }
  }
`;

export default CusSavingsPage;
