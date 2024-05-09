import React from "react";
import { Layout } from "components";
import { PageTitle } from "components/PageTitle";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import MerchStore from "components/Pages/MerchStore";

const MerchStorePage = () => {
  return (
    <Layout seoTitle="Merch Store">
      <PageTitle title="Merch Store" />
      <HeroTextOverlay
        title="Representing Sauder"
        description="Stay tuned for our Merch Store launch! For any general inquiries, email vpmarketing@cus.ca with [MerchStoreInquiry-StudentName]."
        img="https://admin.cus.ca/wp-content/uploads/2021/08/IMG_1230-1024x683.jpg"
      />
      <MerchStore />
    </Layout>
  );
};

export default MerchStorePage;
