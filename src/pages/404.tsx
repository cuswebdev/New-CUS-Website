import React from "react";
import { Layout, ContentSection } from "components";
import { Button, Heading, Link } from "@chakra-ui/react";

const PageNotFound = () => {
  return (
    <Layout seoTitle="404 Error">
      <ContentSection small pt={10}>
        <Heading pb={4}>Page Not Found</Heading>
        <Button>
          <Link color="inherit" href="/">
            Go Home
          </Link>
        </Button>
      </ContentSection>
    </Layout>
  );
};

export default PageNotFound;
