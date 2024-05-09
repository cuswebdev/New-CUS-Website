import React, { FunctionComponent } from "react";
import {
  ChakraProvider,
  Flex,
  Stack,
  Heading,
  Text,
  Icon,
  Box,
  useColorModeValue as mode,
  Button,
  Center,
} from "@chakra-ui/react";

import { FaGraduationCap, FaPuzzlePiece } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";
import { Link } from "gatsby";

interface FeatureComponentProps {
  title: string;
  text: string;
  icon1?: {
    text: string;
    icon: any;
  };
  icon2?: {
    text: string;
    icon: any;
  };
  icon3?: {
    text: string;
    icon: any;
  };
  button?: {
    text: string;
    url: string;
  };
}

export const FeatureComponent: FunctionComponent<FeatureComponentProps> = ({
  title,
  text,
  icon1,
  icon2,
  icon3,
  button,
}) => {
  return (
    <Flex justifyContent="center">
      <Stack
        spacing={8}
        justifyContent="flex-start"
        alignItems="center"
        pt={16}
        pb={16}
        pl={10}
        pr={10}
        backgroundColor="#4DBBEE"
        width="100%"
      >
        <Heading textAlign="center" color="white">
          {title}
        </Heading>
        {text && (
          <Text
            display="block"
            textAlign="center"
            color="white"
            fontSize="20px"
            maxWidth="800px"
          >
            {text}
          </Text>
        )}
        <Stack
          spacing={{ base: 30, md: 100 }}
          justifyContent="space-around"
          direction={{ base: "column", md: "row" }}
        >
          {icon1 && (
            <Box>
              <Box fontSize="5xl" color="white">
                <Center>{icon1.icon}</Center>
              </Box>
              <Text
                mt="3"
                as="h3"
                color="white"
                fontSize="xl"
                fontWeight="extrabold"
                textAlign="center"
              >
                {icon1.text}
              </Text>
            </Box>
          )}
          {icon2 && (
            <Box>
              <Box fontSize="5xl" color="white">
                <Center>{icon2.icon}</Center>
              </Box>
              <Text
                mt="3"
                as="h3"
                color="white"
                fontSize="xl"
                fontWeight="extrabold"
                textAlign="center"
              >
                {icon2.text}
              </Text>
            </Box>
          )}
          {icon3 && (
            <Box>
              <Box fontSize="5xl" color="white">
                <Center>{icon3.icon}</Center>
              </Box>
              <Text
                mt="3"
                as="h3"
                color="white"
                fontSize="xl"
                fontWeight="extrabold"
                textAlign="center"
              >
                {icon3.text}
              </Text>
            </Box>
          )}
        </Stack>
        {button && (
          <Link to={button.url}>
            <Button
              variant="outline"
              size="lg"
              opacity={0.97}
              boxShadow={10}
              colorScheme="blackAlpha"
              color="white"
            >
              {button.text}
            </Button>
          </Link>
        )}
      </Stack>
    </Flex>
  );
};
