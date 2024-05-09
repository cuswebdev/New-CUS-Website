import React from "react";
import parse from "html-react-parser";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { Link } from "gatsby";
import { ContentSection } from "components";

import { PageTitle } from "components/PageTitle";
import { SocialShare } from "components/SocialShare";

const AnnualEventConferenceTemplate = ({
  pageContext: { date, media, title, description, page, href },
}) => {
  return (
    <Layout isHomePage={false} seoTitle={title}>
      <PageTitle title={title} />
      <Image
        objectFit="cover"
        h={{ base: "auto" }}
        maxHeight="800px"
        w="100%"
        src={media}
      />
      <ContentSection small>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Text fontSize="xl" color="primary" pb={4}>
            {date}
          </Text>
        </Stack>
        {!!description && <Box pb={6}>{parse(page)}</Box>}
        {href && (
          <Link to={href}>
            <Button mb={8}>Learn More</Button>
          </Link>
        )}

        <SocialShare />
      </ContentSection>
    </Layout>
  );
};

export default AnnualEventConferenceTemplate;
