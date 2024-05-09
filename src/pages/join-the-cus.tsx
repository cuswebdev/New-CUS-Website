import React from "react";
import { Layout } from "components";
import { PageTitle } from "components/PageTitle";
import { HeroTextOverlay } from "components/HeroTextOverlay";
import { JoinTheCus } from "components/Pages/JoinTheCus";
import { Box } from "@chakra-ui/react";

const JoinTheCusPage = () => {
  return (
    <Layout seoTitle='Join the CUS'>
      <PageTitle title="Join The CUS" />
      <JoinTheCus />
    </Layout>
  );
};

export default JoinTheCusPage;
