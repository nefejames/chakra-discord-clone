import { Box } from "@chakra-ui/react";
import { ServersPanel } from "@components/panels";

export default function Layout({ children }) {
  return (
    <Box as="main" display="flex" color="gray.100" minH="100vh">
      <ServersPanel />

      {children}
    </Box>
  );
}
