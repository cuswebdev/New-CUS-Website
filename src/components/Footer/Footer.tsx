import {
  Box,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Heading,
  Link,
} from "@chakra-ui/react";
import React from "react";
import CusWhite from "images/cus-white.svg";

import { SocialButton } from "./SocialButton";
import { footerLinks, links, socialLinks } from "./_data";

const Footer = () => (
  <Box as="footer" bg="black" color="white" py="64px">
    <Box maxW="7xl" px="15" pb="10" mx="auto">
      <Stack
        direction={{ base: "column", md: "row" }}
        pb="3"
        justifyContent="space-around"
      >
        <Heading>Check out our Socials!</Heading>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={{ base: "5", md: "10" }}
          mt="3"
          as="ul"
        >
          {socialLinks.map((link, idx) => (
            <SocialButton
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box srOnly>{link.label}</Box>
              {link.icon}
            </SocialButton>
          ))}
        </Stack>
      </Stack>
    </Box>

    <Box maxW="7xl" px="5" mx="auto">
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        pb="5"
        align="flex-start"
        id="top"
      >
        <Box mb={{ base: "5", lg: 0 }}>
          <CusWhite style={{ height: "82px", width: "auto" }} />
          <Text mt="3" width="60%">
            <Link href="https://www.google.ca/maps/place/UBC+Sauder+School+of+Business/@49.2648641,-123.2558351,17z/data=!4m13!1m7!3m6!1s0x548672b5df7bebd9:0xc32688f78dbbbe78!2s2053+Main+Mall,+Vancouver,+BC+V6T+1Z1!3b1!8m2!3d49.2648641!4d-123.2536411!3m4!1s0x548672b5db6faaeb:0x7d0e6eae5fc5e75!8m2!3d49.2648239!4d-123.2537939">
              2053 Main Mall, UBC Campus, Vancouver, BC V6T 1Z2 <br />
            </Link>
            Office: Henry Angus Building, Room 239 Second Floor Student Lounge
          </Text>
          <HStack spacing="4" mt="3" as="ul">
            {socialLinks.map((link, idx) => (
              <SocialButton key={idx} href={link.href}>
                <Box srOnly>{link.label}</Box>
                {link.icon}
              </SocialButton>
            ))}
          </HStack>
        </Box>
        <SimpleGrid
          w="full"
          columns={{ base: 2, lg: 3 }}
          spacing={{ base: "4", md: "4" }}
          fontSize="sm"
        >
          {links.map((group, idx) => (
            <Box key={idx}>
              <Text fontWeight="bold" mb="2">
                {group.title}
              </Text>
              <Stack as="ul" listStyleType="none">
                {group.links.map((link, idx) => (
                  <Box as="li" key={idx}>
                    <Box
                      as="a"
                      href={link.href}
                      _hover={{ textDecor: "underline" }}
                    >
                      {link.label}
                      {link.badge && (
                        <Box as="span" marginStart="2">
                          {link.badge}
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
      <Divider my="10" borderColor="#4DBBEE" />
      <Flex
        direction={{ base: "column-reverse", lg: "row" }}
        align={{ base: "flex-start", lg: "center" }}
        justify="space-between"
        fontSize="sm"
      >
        <Wrap
          id="bottom"
          spacing={{ base: "4", lg: "8" }}
          mt={{ base: "4", lg: "0" }}
        >
          <WrapItem>
            <Box>&copy; Commerce Undergraduate Society</Box>
          </WrapItem>
          {footerLinks.map((link, idx) => (
            <WrapItem key={idx}>
              <Box as="a" href={link.href}>
                {link.label}
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    </Box>
  </Box>
);

export default Footer;
