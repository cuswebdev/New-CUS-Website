import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import { EventsMainPage } from "components/Pages/EventsMainPage";

const EventsPage = () => {
  return (
    <Layout seoTitle="Events">
      <PageTitle title="Get Involved" />
      <ContentSection>
        <EventsMainPage />
      </ContentSection>
    </Layout>
  );
};

export default EventsPage;
