import React from "react";
import parse from "html-react-parser";
import { Box, Text, HStack, Image, Stack, Button } from "@chakra-ui/react";

import { Layout } from "../components/Layout";
import { graphql, Link } from "gatsby";
import { ContentSection } from "components";

import { PageTitle } from "components/PageTitle";
import { FaBookmark } from "react-icons/fa";
import { SocialShare } from "components/SocialShare";
import dayjs from "dayjs";
import { formatDate } from "utils/formatDate";

const HiringTemplate = ({
  data: {
    wpHiring: {
      slug,
      id,
      title,
      hiringData: {
        description,
        endDate,
        url,
        startDate,
        position,
        organization,
        type,
        image,
        pdf,
      },
    },
  },
}) => {
  const imageUrl = image?.sourceUrl;
  const pdfUrl = pdf?.mediaItemUrl;
  return (
    <Layout isHomePage={false} seoTitle={title}>
      <PageTitle title={title} />
      <Image
        objectFit="cover"
        h={{ base: "450px", lg: "500px" }}
        w="100%"
        src={imageUrl}
      />
      <ContentSection small>
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <HStack mb={4}>
            <Box
              borderRadius="50%"
              p={4}
              fontSize="lg"
              background="#E2F1ED"
              width="fit-content"
            >
              <FaBookmark color="#4DBBEE" />
            </Box>
            <Text>
              <b>{organization}</b>
            </Text>
          </HStack>
          <Text fontSize="xl" color="primary" pb={4}>
            Deadline: {formatDate(endDate, "MMM D, YYYY")}
          </Text>
        </Stack>
        {!!description && <Box pb={6}>{parse(description)}</Box>}
        {url && (
          <Link to={url}>
            <Button mb={8}>Learn More</Button>
          </Link>
        )}
        {pdfUrl && (
          <Box height="100vh" mt="2">
            <iframe
              src={pdfUrl}
              frameBorder="0"
              scrolling="no"
              width="100%"
              height="100%"
            >
              <p>It appears your web browser doesn't support iframes.</p>
            </iframe>
          </Box>
        )}
        <SocialShare />
      </ContentSection>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    wpHiring(id: { eq: $id }) {
      slug
      id
      title
      hiringData {
        description
        endDate
        url
        type
        startDate
        position
        organization
        image {
          sourceUrl
        }
        pdf {
          mediaItemUrl
        }
      }
    }
  }
`;

export default HiringTemplate;
