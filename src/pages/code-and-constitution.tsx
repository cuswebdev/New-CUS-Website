import React from "react";
import { Layout, ContentSection, EmbededPdf } from "components";
import { PageTitle } from "components/PageTitle";
import { Heading, Text } from "@chakra-ui/react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { CusAccordion } from "components/CusAccordion";
import { Email } from "components/Email";
import { PageMenuBar } from "components/PageMenuBar";
import { HowWeRunPageMenu } from "components/PageMenuBar/_data";

const CodeConstitutionPage = ({ data }) => {
  return (
    <Layout seoTitle="Code and Constitution Page">
      <PageTitle title="How We Run" />
      <PageMenuBar items={HowWeRunPageMenu} />
      <ContentSection small>
        <Heading mb={4}>Constitution</Heading>
        <Text>
          The Constitution is a document approved by the General Membership of
          the CUS. It dictates how the CUS is organized, how decisions are made
          on behalf of the student body, and details the responsibilities of
          elected officials.
        </Text>
        <CusAccordion
          items={[
            {
              title: "CUS Constitution (Last revised February 1st, 2018)",
              content: (
                <EmbededPdf url="https://admin.cus.ca/wp-content/uploads/2021/08/CUS-Constitution-Rev.02_01_18.pdf" />
              ),
            },
          ]}
        />
        <Text as="i" fontSize="sm">
          *Changes to the Constitution may be enacted only be a referenda of the
          general membership of the CUS, initiated either by a petition of its
          members of a motion of its Board of Directors, or by a motion of the
          Student Council of the Alma Mater Society (AMS), the parent
          organization of the CUS. The Code of Procedure may be amended by the
          Board of Directors provided notice is given to the general membership
          and may be suspended at any time by the Board. If you have any
          questions, please contact the Policy and Code Committee Chair of the Board at{" "}
          <Email>thomas.dunsmore@cus.ca</Email>
        </Text>
        <Heading mt={8} mb={4}>
          Code of Procedure
        </Heading>
        <Text>
          The code of procedure is a document approved by the Board of Directors
          of the CUS. It contains a consolidated set of policy documents
          pertaining to various components of the operations of the CUS,
          including elections and referenda, hiring, reimbursement, and
          governance procedures not specified in the Constitution.
        </Text>
        <CusAccordion
          items={[
            {
              title: "CUS Code of Procedure (Last revised Sept 16th, 2022)",
              content: (
                <EmbededPdf url="https://admin.cus.ca/wp-content/uploads/2022/10/CUS-CoP-09-16-22.pdf" />
              ),
            },
          ]}
        />
        <Text as="i" fontSize="sm">
          *Changes to the Constitution may be enacted only be a referenda of the
          general membership of the CUS, initiated either by a petition of its
          members of a motion of its Board of Directors, or by a motion of the
          Student Council of the Alma Mater Society (AMS), the parent
          organization of the CUS. The Code of Procedure may be amended by the
          Board of Directors provided notice is given to the general membership
          and may be suspended at any time by the Board. If you have any
          questions, please contact the Chairperson of the Board at{" "}
          <Email>thomas.dunsmore@cus.ca</Email>
        </Text>
      </ContentSection>
    </Layout>
  );
};

export default CodeConstitutionPage;
