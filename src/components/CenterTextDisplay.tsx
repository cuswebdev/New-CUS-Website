import React, { FunctionComponent } from "react";
import { Flex, Stack, Heading, Text } from "@chakra-ui/react";


interface CenterTextDisplayProps {
    title: string;
    content: string;
    pixelFontSize: string;
  }


export const CenterTextDisplay: FunctionComponent<CenterTextDisplayProps>  = ({title, content, pixelFontSize}) => {
  return (
      <Flex justifyContent="center">
        <Stack
          spacing={8}
          justifyContent="flex-start"
          alignItems="center"
          pt={8}
          pb={10}
          pl={10}
          pr={10}
        >
          <Heading>{title}</Heading>
          <Text display="block" textAlign="center" width="80%" fontSize={pixelFontSize}>
            {content}
          </Text>
        </Stack>
      </Flex>
  );
};
