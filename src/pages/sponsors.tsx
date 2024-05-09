import React from "react";
import { Layout } from "components";
import { PageTitle } from "components/PageTitle";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import Sponsors from "components/Pages/Sponsors";

const SponsorsPage = () => {
  return (
    <Layout seoTitle="Sponsors">
      <PageTitle title="Sponsorships" />
      <HeroTextOverlay
        title="Message to Our Sponsors"
        description="We appreciate your support and will continue to help our students achieve success in their endeavours through your kind sponsorships"
        img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1230-1024x683.jpg"
      />
      <Sponsors />
    </Layout>
  );
};

export default SponsorsPage;
