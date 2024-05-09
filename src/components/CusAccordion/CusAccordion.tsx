import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import React, { FunctionComponent, ReactNode } from "react";
import { InnerAccordion } from "./InnerAccordion";
import { OuterAccordion } from "./OuterAccordion";

export interface CusAccordionItem {
  title: string;
  content?: ReactNode;
  innerItems?: CusAccordionInnerItem[];
}

export interface CusAccordionInnerItem {
  title: string;
  content: ReactNode;
}

export interface CusAccordionProps {
  items: CusAccordionItem[];
}

export const CusAccordion: FunctionComponent<CusAccordionProps> = ({
  items,
}) => {
  return (
    <Box py={4}>
      {items.map((item) => (
        <OuterAccordion title={item.title} content={item.content}>
          {(item.innerItems ?? []).map((innerItem) => (
            <InnerAccordion
              title={innerItem.title}
              content={innerItem.content}
            />
          ))}
        </OuterAccordion>
      ))}
    </Box>
  );
};
