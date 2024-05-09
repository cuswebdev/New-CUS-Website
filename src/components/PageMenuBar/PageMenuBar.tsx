import { Box, Button } from "@chakra-ui/react";
import { Link } from "gatsby";
import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { MouseEventHandler } from "react";

import "./PageMenuBar.scss";


interface PageMenuBarItem {
  text: string;
  href?: string;
  funcParams?: string;
}

interface PageMenuBarProps {
  items: PageMenuBarItem[];
  func?: Dispatch<SetStateAction<string>>;
}



export const PageMenuBar: FunctionComponent<PageMenuBarProps> = ({ items, func }) => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Box
      bg="#e5e5e5"
      display="flex"
      justifyContent="center"
      className="page-menu-bar"
    >
      <Box
        maxW={{ base: "xl", md: "7xl" }}
        width="100%"
        display="flex"
        justifyContent="flex-start"
        flexWrap="wrap"
      >
        {
        items.map((item) => {
          if (!item.href) {
            return (
              <Button
              variant={"solid"}
              disabled={false}
              size="sm"
              onClick={ () => {
                if (func) {
                  func(item.funcParams as string)
                }
              } }
              fontSize="xs"
              m="2"
            >
              {item.text}
            </Button>
            )
          }
          return (
          <Link to={item.href as string}>
            <Button
              variant={url.includes(item.href as string) ? "grey" : "solid"}
              disabled={url.includes(item.href as string)}
              size="sm"
              fontSize="xs"
              m="2"
            >
              {item.text}
            </Button>
          </Link>)
        })}
      </Box>
    </Box>
  );
};
