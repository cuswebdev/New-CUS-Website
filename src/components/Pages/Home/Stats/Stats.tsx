import {
  Box,
  Heading,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Stat } from "./Stat";
import { BsFillPersonFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { RiCalendarEventLine } from "react-icons/ri";
const Stats = () => (
  <Box as="section" maxW="8xl" mx="auto" py={{ base: "5", md: "10" }}>
    <Stack
      spacing="2"
      direction={{ base: "column", md: "row" }}
      divider={<StackDivider />}
      color="black"
      justifyContent="space-between"
    >
      <Stat
        title="CUS Student Leaders"
        value="350"
        passedComponent={BsFillPersonFill}
      />
      <Stat
        title="Clubs &amp; Services"
        value="40"
        passedComponent={FaHandshake}
      />
      <Stat
        title="Operating Budget"
        value="1.2"
        decimals={1}
        start="$"
        end=" million"
        passedComponent={GiReceiveMoney}
      />
      <Stat title="Events" value="150" passedComponent={RiCalendarEventLine} />
    </Stack>
  </Box>
);

export default Stats;
