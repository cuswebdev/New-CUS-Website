import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";

export const SocialShare = () => (
  <>
    <Helmet>
      <script
        type="text/javascript"
        src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6124560fdbe0bc24"
      ></script>
    </Helmet>
    <HStack py={4} justifyContent="space-between">
      <Heading size="md">Share this!</Heading>
      <Box className="addthis_inline_share_toolbox"></Box>
    </HStack>
  </>
);
