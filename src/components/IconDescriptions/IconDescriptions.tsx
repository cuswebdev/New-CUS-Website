import {
  Box,
  Center,
  Heading,
  HStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { FunctionComponent, ReactNode, useState } from "react";
import { IconType } from "react-icons";

interface IconDescriptionItem {
  icon: IconType;
  title: string;
  description: ReactNode;
}

interface IconDescriptionsProps {
  items: IconDescriptionItem[];
}

export const IconDescriptions: FunctionComponent<IconDescriptionsProps> = ({
  items,
}) => {
  const iconSize = useBreakpointValue({ base: 25, md: 50 });
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const activeItem = items[activeItemIndex];
  const activeStyles = {
    boxShadow: { base: "md", md: "2xl" },
    borderColor: "primary",
  };

  return (
    <>
      <Stack
        width="100%"
        justifyContent="space-evenly"
        direction={{ base: "column", md: "row" }}
        my={12}
      >
        {items.map((item, i) => (
          <Center
            onClick={() => setActiveItemIndex(i)}
            key={i}
            display="flex"
            flexDirection={{ base: "row", md: "column" }}
            px={{ base: 4, md: 16, lg: 24 }}
            py={{ base: 4, md: 8 }}
            _hover={{ cursor: "pointer" }}
            alignItems="center"
            borderRadius="lg"
            transition="0.3s"
            background="white"
            border="1px solid white"
            {...(activeItemIndex === i ? activeStyles : {})}
          >
            <Box
              borderRadius="50%"
              p={{ base: 3, md: 5 }}
              fontSize="lg"
              background="#E2F1ED"
            >
              <item.icon size={iconSize} color="#4DBBEE" />
            </Box>
            <Heading
              textAlign="center"
              mt={{ base: 0, md: 4 }}
              pl={{ base: 4, md: 0 }}
              size="md"
            >
              {item.title}
            </Heading>
          </Center>
        ))}
      </Stack>
      {activeItem && (
        <Box
          borderRadius="lg"
          p={8}
          width="100%"
          background="primary"
          pt={4}
          mb={12}
          boxShadow="base"
          color="white"
        >
          <Heading size="md" mb={2}>
            {activeItem.title}
          </Heading>
          {activeItem.description}
        </Box>
      )}
    </>
  );
};
