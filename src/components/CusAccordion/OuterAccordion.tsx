import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { FunctionComponent, ReactNode } from "react";

interface OuterAccordionProps {
  title: string;
  content?: ReactNode;
}

export const OuterAccordion: FunctionComponent<OuterAccordionProps> = ({
  title,
  content,
  children,
}) => {
  return (
    <Accordion
      allowMultiple
      background="primary"
      borderRadius="lg"
      color="white"
      mt={1}
      boxShadow="base"
    >
      <AccordionItem border="none">
        <AccordionButton _focus={{ boxShadow: "none" }}>
          <Box flex="1" textAlign="left" fontWeight="bold">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {content}
          {!!React.Children.count(children) && <Box mt={3}>{children}</Box>}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
