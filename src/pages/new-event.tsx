import React from "react";
import { Layout, ContentSection } from "components";
import { Box } from "@chakra-ui/react";
import { PageTitle } from "components/PageTitle";
import { NewEventForm } from "components/Forms";

const EventPage = () => {
  return (
    <Layout seoTitle="New Event">
      <PageTitle
        title="New Event Form"
        description="Use this form to submit a new event to the CUS."
      />
      <ContentSection>
        <Box as="section">
          <NewEventForm />
        </Box>
      </ContentSection>
    </Layout>
  );
};

export default EventPage;
