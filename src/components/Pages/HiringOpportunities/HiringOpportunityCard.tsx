import { Badge, Box, Button, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import { FunctionComponent } from "react";
import { HiringOpportunity, hiringTypeColors } from "types/HiringOpportunity";
import { formatHiringOpportunityEndDate } from "utils/hiringUtils";

import parse from "html-react-parser";
import { Link } from "gatsby";

export interface HiringOpportunityCardProps {
  hiringOpportunity: HiringOpportunity;
}

export const HiringOpportunityCard: FunctionComponent<HiringOpportunityCardProps> =
  ({ hiringOpportunity }) => {
    const { position, organization, description, type, image } =
      hiringOpportunity.hiringData;

    return (
      <Box boxShadow="md" borderWidth="1px" borderRadius="lg">
        <Box width="100%">
          <Img
            width="100%"
            height="60"
            objectFit="cover"
            src={image?.sourceUrl}
          />
        </Box>
        <Box p="4">
          <Box d="flex" alignItems="baseline">
            <Badge background="primary" color="white" mr="2">
              DUE: {formatHiringOpportunityEndDate(hiringOpportunity)}
            </Badge>
            <Badge background={hiringTypeColors[type]} color="white">
              {type}
            </Badge>
          </Box>
          <Box>
            <Heading mt="2" as="h3" size="md" color="blue.900">
              {position} - {organization}
            </Heading>
          </Box>
          <Box d="flex" justifyContent="flex-end">
            <Link
              to={`/hirings/${hiringOpportunity.slug}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button colorScheme="blue">View Details</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    );
  };
