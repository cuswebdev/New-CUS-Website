import React, { useState } from "react";
import { Layout, ContentSection } from "components";
import { PageMenuBar } from "components/PageMenuBar";
import { CUSavings } from "components/PageMenuBar/_data";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import { PageTitle } from "components/PageTitle";
import { graphql } from "gatsby";
import { ExpandableCardGrid } from "components/ExpandableCardGrid";
import parse from "html-react-parser";
import { Box } from "@chakra-ui/react";

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
    <Layout seoTitle="CUSavings">
      <PageTitle
        title="CUSavings"
        description="CUSavings’ main mission is to provide mutual benefits to students and local businesses by alleviating financial stress on students through exclusive discounts, and brand recognition and loyalty for businesses."
      />
      <PageMenuBar items={CUSavings} func={setFilters} />
      <HeroTextOverlay
        img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1172-scaled.jpg"
        title="Being a Sauder student comes with many benefits, and CUSavings is one of them!"
        description={`CUSavings Discount Program is a Sauder-student exclusive discount benefit, and can be used at any business location that the CUS has partnered with. By identifying themselves as a member of the Sauder community, students will be able to receive various benefits that the businesses have promised to deliver.`}
      />
      <ContentSection mt={-12} pt={0}>
        <ExpandableCardGrid
          imageContain
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
    allWpDiscount(filter: { discount: { type: { eq: "CUSaving" } } }) {
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
