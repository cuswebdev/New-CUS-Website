import {
  Box,
  Button,
  Flex,
  FlexProps,
  HStack,
  useDisclosure,
  VisuallyHidden,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import CusWhite from "images/cus-white.svg";
import React from "react";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { Submenu } from "./Submenu";
import { ToggleButton } from "./ToggleButton";
import { links } from "./_data";

const MobileNavContext = (props: FlexProps) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...props}
      >
        <Box flexBasis="6rem" position="absolute">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box href="/" as="a" rel="home" mx="auto" height="100%" py="1">
          <CusWhite style={{ height: "52px", width: "auto" }} />
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? "open" : "closed"}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          )
        )}
      </NavMenu>
    </>
  );
};

const DesktopNavContent = (props: FlexProps) => {
  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-between"
      {...props}
    >
      <Box as="a" href="/" rel="home">
        <CusWhite style={{ height: "60px", width: "auto" }} />
        <VisuallyHidden>Commerce Undergraduate Society</VisuallyHidden>
      </Box>
      <HStack
        as="ul"
        id="nav__primary-menu"
        aria-label="Main Menu"
        listStyleType="none"
      >
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop
                href={link.href}
                _hover={{ color: "white" }}
                _active={{ color: "white" }}
                _activeLink={{
                  color: "white",
                }}
                px="2"
              >
                <Box
                  border="1px solid white"
                  py="7px"
                  px="15px"
                  my="-9px"
                  borderRadius="30px"
                >
                  {link.label}
                </Box>
              </NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};
