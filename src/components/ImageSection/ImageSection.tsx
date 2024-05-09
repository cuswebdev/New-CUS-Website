import { Box, Center, ChakraProps, Heading } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";

interface ImageSectionProps extends ChakraProps {
  img?: string;
  title?: string;
  text?: string;
}

export const ImageSection: FunctionComponent<ImageSectionProps> = ({
  img,
  title,
  text,
  ...chakraProps
}) => (
  <Box
    as="section"
    position="relative"
    bgImage={img && `url(${img})`}
    bgAttachment="fixed"
    bgSize="cover"
    bgPosition="center"
    py={title || text ? 24 : 48}
    _after={
      !chakraProps?.bg
        ? {
            content: `""`,
            display: "block",
            w: "full",
            h: "full",
            bg: "blackAlpha.500",
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }
        : {}
    }
    textAlign="center"
    {...chakraProps}
  >
    <Center zIndex={2} position="relative">
      {title && (
        <Heading color="white" maxWidth="600px">
          {title}
        </Heading>
      )}
      {text && (
        <Heading size="md" color="white" maxWidth="600px">
          {text}
        </Heading>
      )}
    </Center>
  </Box>
);
