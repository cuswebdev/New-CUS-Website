import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { Heading } from "@chakra-ui/react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { PageMenuBar } from "components/PageMenuBar";
import { MeetTheTeamPageMenu } from "components/PageMenuBar/_data";

const OrganizationalStructurePage = ({ data }) => {
  console.log(data);
  return (
    <Layout seoTitle='Meet The Team'>
      <PageTitle title="Meet the Team" />
      <PageMenuBar items={MeetTheTeamPageMenu} />
      <ContentSection>
        <Heading mb={6}>Organizational Structure</Heading>
        <Img fluid={data.structure.childImageSharp.fluid} />
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query {
    structure: file(relativePath: { eq: "org-structure.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default OrganizationalStructurePage;
