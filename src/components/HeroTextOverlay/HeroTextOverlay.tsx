import { Box, Text, Heading } from "@chakra-ui/react";
import { ContentSection } from "components/ContentSection";
import React, { FunctionComponent, ReactNode } from "react";

interface HeroTextOverlayProps {
  img?: string;
  title: string;
  description: ReactNode;
}

export const HeroTextOverlay: FunctionComponent<HeroTextOverlayProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <>
      <Box
        as="section"
        position="relative"
        bgImage={img && `url(${img})`}
        bgSize="cover"
        bgPosition="center"
        h={{ base: "350px", lg: "400px" }}
        _after={{
          content: `""`,
          display: "block",
          w: "full",
          h: "full",
          bg: "blackAlpha.500",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        position="relative"
        height="100%"
      >
        <Box
          maxW={{ base: "none", md: "2xl" }}
          zIndex={1}
          borderRadius="lg"
          padding={{ base: 8 }}
          width="100%"
          background="primary"
          transform="translateY(-50%)"
          color="white"
        >
          <Heading size="md" mb={2}>
            {title}
          </Heading>
          <Text whiteSpace="pre-wrap">{description}</Text>
        </Box>
      </Box>
    </>
  );
};
