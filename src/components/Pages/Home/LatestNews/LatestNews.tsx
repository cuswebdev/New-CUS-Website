import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import CusBroadcast from "components/Pages/CusBroadcast";
import { Link } from "gatsby";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface BlogProps {
  category?: string;
  title: string;
  href: string;
  media: string;
  description: string;
}

export const Blog = (props: BlogProps) => {
  const { title, href, description, media, category } = props;
  return (
    <LinkBox
      width="100%"
      as="article"
      shadow={{ sm: "base" }}
      rounded={{ sm: "md" }}
      overflow="hidden"
      transition="all 0.5s"
      _hover={{ shadow: { sm: "2xl" } }}
    >
      <Flex direction="column">
        <Img height="60" objectFit="cover" alt={title} src={media} />
        <Flex direction="column" px={{ sm: "6" }} py="5">
          {category && (
            <Text
              casing="uppercase"
              letterSpacing="wider"
              fontSize="xs"
              fontWeight="semibold"
              mb="2"
            >
              {category}
            </Text>
          )}
          <Heading as="h3" size="sm" mb="2" lineHeight="base">
            <LinkOverlay href={href}>{title}</LinkOverlay>
          </Heading>
          <Text noOfLines={2} mb="8">
            {description}
          </Text>
          <Flex align="baseline" justify="space-between" fontSize="sm"></Flex>
        </Flex>
      </Flex>
    </LinkBox>
  );
};

const LatestNews = () => {
  return (
    <Box as="section" py={{ base: "12", sm: "16" }} overflow="hidden">
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        textAlign="center"
      >
        <Stack
          alignItems="baseline"
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
          mb="8"
        >
          <Heading size="xl" fontWeight="extrabold" color="black">
            Latest News
          </Heading>
          <Link to="https://medium.com/@cusubc">
            <Button
              variant="solid"
              iconSpacing="3"
              rightIcon={
                <Box
                  as={FaArrowRight}
                  fontSize="sm"
                  transition="transform 0.2s"
                  _groupHover={{ transform: "translateX(2px)" }}
                />
              }
            >
              View All
            </Button>
          </Link>
        </Stack>
        <Text mb="5">
          Here's what's new about the Commerce Undergraduate Society
        </Text>
        <CusBroadcast />
      </Box>
    </Box>
  );
};

export default LatestNews;
