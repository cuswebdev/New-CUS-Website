import {
  Box,
  Center,
  chakra,
  HStack,
  HTMLChakraProps,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

interface SubmenuItemProps extends HTMLChakraProps<"a"> {
  title: string;
  icon?: React.ReactElement;
  children: React.ReactNode;
  href: string;
}

export const SubmenuItem = (props: SubmenuItemProps) => {
  const { title, icon, children, href, ...rest } = props;
  return (
    <chakra.a
      className="group"
      href={href}
      m="-3"
      p="3"
      display="flex"
      alignItems="flex-start"
      transition="all 0.2s"
      rounded="lg"
      color="white"
      _hover={{ bg: "#2a98ca" }}
      {...rest}
    >
      <Center
        aria-hidden
        as="span"
        flexShrink={0}
        w="10"
        h="10"
        fontSize="3xl"
        color={mode("blue.600", "blue.400")}
      >
        {icon}
      </Center>
      <Box marginStart="3" as="dl">
        <HStack as="dt">
          <Text fontWeight="semibold">{title}</Text>
          <Box
            fontSize="xs"
            as={FaChevronRight}
            transition="all 0.2s"
            _groupHover={{ transform: "translateX(2px)" }}
          />
        </HStack>
        <Text as="dd">{children}</Text>
      </Box>
    </chakra.a>
  );
};
