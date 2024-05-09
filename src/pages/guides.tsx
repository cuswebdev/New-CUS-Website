import React from "react";
import { Layout, ContentSection } from "components";
import { PageTitle } from "components/PageTitle";
import Guides from "components/Pages/Guides/Guides";

const GetInvolvedPage = () => {
  return (
    <Layout seoTitle="Guides">
      <PageTitle title="Guides" description="" />
      <ContentSection>
        <Guides />
      </ContentSection>
    </Layout>
  );
};

export default GetInvolvedPage;
