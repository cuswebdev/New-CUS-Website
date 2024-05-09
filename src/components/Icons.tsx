import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { FunctionComponent, ReactNode, useState } from "react";
import { IconType } from "react-icons";

interface IconItem {
  icon: IconType;
  title: string;
  text: string;
}

interface IconsProps {
  items: IconItem[];
}

export const Icons: FunctionComponent<IconsProps> = ({ items }) => {
  const iconSize = useBreakpointValue({ base: 25, md: 50 });

  return (
    <Stack
      width="100%"
      justifyContent="space-evenly"
      direction={{ base: "column", md: "row" }}
      my={12}
    >
      {items.map((item, i) => (
        <Center
          display="flex"
          flexDirection="column"
          key={i}
          p={4}
          alignItems="center"
        >
          <Box
            borderRadius="50%"
            p={{ base: 3, md: 5 }}
            fontSize="lg"
            background="#E2F1ED"
          >
            <item.icon size={iconSize} color="#4DBBEE" />
          </Box>
          <Heading mt={4} size="md">
            {item.title}
          </Heading>
          <Text textAlign="center" mt={4}>
            {item.text}
          </Text>
        </Center>
      ))}
    </Stack>
  );
};
