import React from "react";
import { Layout, ContentSection } from "components";
import { Box } from "@chakra-ui/react";
import { PageTitle } from "components/PageTitle";
import { NewHiringForm } from "components/Forms";

const EventPage = () => {
  return (
    <Layout seoTitle='New Hiring Opportunities'>
      <PageTitle
        title="New Hiring Opportunity"
        description="Hello! If you would like Marketing to create a website post for a Service/Portfolio, please fill out this form. If you have any questions message vpmarketing@cus.ca"
      />
      <ContentSection>
        <Box as="section">
          <NewHiringForm />
        </Box>
      </ContentSection>
    </Layout>
  );
};

export default EventPage;
