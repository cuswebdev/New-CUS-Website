import {
  Box,
  BoxProps,
  Stack,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import CountUp from "react-countup";

interface StatProps extends BoxProps {
  title: string;
  value: string;
  start?: string;
  end?: string;
  decimals?: number;
  passedComponent: any;
}
export const Stat = (props: StatProps) => {
  const { title, value, passedComponent, start, end, decimals, ...rest } =
    props;
  return (
    <Stack
      direction="column-reverse"
      as="dl"
      textAlign="center"
      justifyContent="center"
      {...rest}
    >
      <Box
        as="dt"
        color={useColorModeValue("gray.600", "whiteAlpha.700")}
        fontWeight="medium"
      >
        {title}
      </Box>
      <Box
        as="dd"
        display="inline-block"
        fontSize="4xl"
        fontWeight="extrabold"
        color={"#4DBBEE"}
      >
        {start}
        <CountUp
          start={0}
          end={Number(value)}
          decimals={decimals ?? 0}
          delay={0}
          duration={2}
        >
          {({ countUpRef }) => <span ref={countUpRef} />}
        </CountUp>
        {end}
      </Box>
      <Box justifyContent="center">
        <Icon as={passedComponent} boxSize="3em" color={"#4DBBEE"} />
      </Box>
    </Stack>
  );
};
