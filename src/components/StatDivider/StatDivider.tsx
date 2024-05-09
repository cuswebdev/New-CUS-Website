import { Box, Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import { Stat } from "./Stat";
import { FunctionComponent } from "react";

interface StatDividerProps {
  statList: Array<any>;
}

const StatDivider: FunctionComponent<StatDividerProps> = ({ statList }) => (
  <Box as="section" maxW="8xl" mx="auto" py={{ base: "5", md: "10" }}>
    <Stack
      spacing="2"
      direction={{ base: "column", md: "row" }}
      divider={<StackDivider />}
      color="black"
    >
      {statList.map((stat, index) => (
        <Stat
          key={index}
          title={stat.title}
          value={stat.value}
          passedComponent={stat.passedComponent}
        />
      ))}
    </Stack>
  </Box>
);

export default StatDivider;
