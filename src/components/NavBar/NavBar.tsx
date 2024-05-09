import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { NavContent } from "./NavContent";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollPosition != window.scrollY) {
        setScrollPosition(window.scrollY);
      }
    });
  }, []);

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="100"
      shadow={scrollPosition ? "md" : undefined}
      transition="all 0.3s ease"
    >
      <Box as="header" bg="#4DBBEE" width="100%">
        <Box
          as="nav"
          aria-label="Main navigation"
          maxW="7xl"
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <NavContent.Mobile display={{ base: "flex", lg: "none" }} />
          <NavContent.Desktop display={{ base: "none", lg: "flex" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
