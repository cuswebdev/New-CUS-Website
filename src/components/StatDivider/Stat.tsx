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
  passedComponent: any;
}
export const Stat = (props: StatProps) => {
  const { title, value, passedComponent, ...rest } = props;
  return (
    <Stack
      direction="column-reverse"
      maxW="12rem"
      mx="auto"
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
      <Box as="dd" fontSize="4xl" fontWeight="extrabold" color={"#4DBBEE"}>
        <CountUp start={0} end={parseInt(value)} delay={0} duration={2}>
          {({ countUpRef }) => (
            <div>
              <span ref={countUpRef} />
            </div>
          )}
        </CountUp>
      </Box>
      <Box justifyContent="center">
        <Icon as={passedComponent} boxSize="3em" color={"#4DBBEE"} />
      </Box>
    </Stack>
  );
};
