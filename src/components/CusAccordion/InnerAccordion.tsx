import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { FunctionComponent, ReactNode } from "react";

interface InnerAccordionProps {
  title: string;
  content?: ReactNode;
}

export const InnerAccordion: FunctionComponent<InnerAccordionProps> = ({
  title,
  content,
}) => {
  return (
    <Accordion
      allowMultiple
      background="white"
      borderRadius="lg"
      color="black"
      mt={1}
    >
      <AccordionItem border="none">
        <AccordionButton _focus={{ boxShadow: "none" }}>
          <Box flex="1" textAlign="left" fontWeight="bold">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>{content}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
