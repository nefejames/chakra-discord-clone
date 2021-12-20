import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: "#5865F2",
    gray: {
      50: "#ECEDEE",
      100: "#DCDDDE",
      200: "#B9BBBE",
      300: "#8E9297",
      400: "#72767D",
      500: "#5C6067",
      550: "#4F545C",
      600: "#36393F", //#464950
      700: "#2F3136", //#36393F
      800: "#202225", //#2F3136
      900: "#202225",
    },
  },
  components: {
    Link: {
      _focus: {
        boxShadow: "none",
      },
    },
  },
  shadows: {
    sm: "0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05)",
    md: "0 4px 4px rgba(0, 0,0, 0.16)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.24)",
    largeSoft: "rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;",
  },
});

export default theme;
