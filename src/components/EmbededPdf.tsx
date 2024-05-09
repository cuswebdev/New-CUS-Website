import { AspectRatio } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { isMobile } from "react-device-detect";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "gatsby";

export const EmbededPdf: FunctionComponent<{ url: string }> = ({ url }) => (
  // Ratio of a regular page is 1.2941
  <AspectRatio ratio={1 / 1.2941} maxHeight="100vh">
    {isMobile ? (
      <Box py={4} px={{ base: 4, md: 8 }} color="black" bg="white">
        <Link to={url}>
          <Button>Open PDF</Button>
        </Link>
      </Box>
    ) : (
      <object type="application/pdf" data={url} width="100%" height="100%">
        <p>It appears your web browser doesn't support iframes.</p>
      </object>
    )}
  </AspectRatio>
);
