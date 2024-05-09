import {
  Box,
  chakra,
  HTMLChakraProps,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import React from "react";

interface NavLinkProps extends HTMLChakraProps<"a"> {
  active?: boolean;
}

const DesktopNavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const { active, href, children, ...rest } = props;
    if (href) {
      return (
        <Link to={href ?? ""}>
          <chakra.a
            ref={ref}
            display="inline-block"
            px="4"
            py="6"
            fontWeight="semibold"
            aria-current={active ? "page" : undefined}
            color="white"
            transition="all 0.2s"
            _hover={{ color: "#103f55" }}
            _active={{ color: "blue.600" }}
            _activeLink={{
              color: "blue.600",
              fontWeight: "bold",
            }}
            {...rest}
          >
            {children}
          </chakra.a>
        </Link>
      );
    } else {
      return (
        <chakra.a
          ref={ref}
          display="inline-block"
          px="4"
          py="6"
          fontWeight="semibold"
          aria-current={active ? "page" : undefined}
          color="white"
          transition="all 0.2s"
          _hover={{ color: "#103f55" }}
          _active={{ color: "blue.600" }}
          _activeLink={{
            color: "blue.600",
            fontWeight: "bold",
          }}
          {...rest}
        >
          {children}
        </chakra.a>
      );
    }
  }
);
DesktopNavLink.displayName = "DesktopNavLink";

export const MobileNavLink = (props: NavLinkProps) => {
  const { active, href, ...rest } = props;
  return (
    <Link to={href ?? ""}>
      <chakra.a
        aria-current={active ? "page" : undefined}
        w="full"
        display="flex"
        alignItems="center"
        height="14"
        fontWeight="semibold"
        color="white"
        {...rest}
      />
    </Link>
  );
};

export const NavLink = {
  Mobile: MobileNavLink,
  Desktop: DesktopNavLink,
};
