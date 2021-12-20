import { Box, Heading } from "@chakra-ui/react";
import { VerifiedIcon, CheckIcon, ChevronIcon } from "@components/icons";

export default function ChannelsPanel({ title, children }) {
  return (
    <Box bg="gray.700" minW="60" display="flex" flexDir="column">
      <Heading
        as="h2"
        color="white"
        fontSize="lg"
        fontWeight="semibold"
        px="4"
        h="12"
        shadow="sm"
        display="flex"
        alignItems="center"
      >
        <Box pos="relative" w="4" h="4" mr="1">
          <VerifiedIcon w="4" h="4" color="gray.550" pos="absolute" />
          <CheckIcon w="4" h="4" pos="absolute" />
        </Box>
        {title}
        <ChevronIcon ml="auto" />
      </Heading>

      <Box flex="1" p="3" overflowY="scroll" sx={{ "scrollbar-width": "none" }}>
        {children}
      </Box>
    </Box>
  );
}
