import NextLink from "next/link";
import { Box, Text } from "@chakra-ui/react";

export default function ServerIcon({ label }) {
  return (
    <NextLink href="/servers/1">
      <a>
        <Box
          w="12"
          minH="12"
          bg="white"
          rounded="full"
          color="black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text>{label + 1}</Text>
        </Box>
      </a>
    </NextLink>
  );
}
