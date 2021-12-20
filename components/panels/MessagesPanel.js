import { Box } from "@chakra-ui/react";

export default function MessagesPanel({ children }) {
  return (
    <Box bg="gray.600" display="flex" flexDir="column" flexGrow="1">
      {children}
    </Box>
  );
}
