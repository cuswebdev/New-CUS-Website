import { extendTheme } from "@chakra-ui/react";
const theme = {
  colors: {
    primary: "#4DBBEE",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  components: {
    Link: {
      baseStyle: {
        color: "primary",
      },
    },
    Button: {
      baseStyle: {
        rounded: "40px",
        textDecoration: "none",
        _hover: { textDecoration: "none" },
        _active: { textDecoration: "none" },
      },
      variants: {
        outline: {
          bg: "transparent",
          color: "#fff",
          border: "1px solid #fff",
          _hover: { bg: "#fff", color: "#4DBBEE" },
          _active: { bg: "#fff", color: "#4DBBEE" },
        },
        solid: {
          bg: "#4DBBEE",
          color: "#fff",
          border: "1px solid #4DBBEE",
          _hover: { bg: "#fff", color: "#4DBBEE" },
          _active: { bg: "#fff", color: "#4DBBEE" },
        },
        grey: {
          bg: "#9CA4A8",
          color: "#fff",
          border: "1px solid #9CA4A8",
          _hover: {
            bg: "#9CA4A8 !important",
            color: "#fff",
            border: "1px solid #9CA4A8",
          },
        },
      },
    },
  },
};
export default extendTheme(theme);
