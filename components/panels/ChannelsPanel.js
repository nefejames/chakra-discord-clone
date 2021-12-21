import { Box, Heading } from "@chakra-ui/react";
import { VerifiedIcon, CheckIcon, ChevronIcon } from "@components/icons";

export default function ChannelsPanel({ title, children }) {
  return (
    <Box bg="gray.700" minW="60" display="flex" flexDir="column">
      <Heading
        px="4"
        as="h2"
        h="12"
        shadow="sm"
        color="white"
        fontSize="lg"
        display="flex"
        cursor="pointer"
        alignItems="center"
        fontWeight="semibold"
        _hover={{ bg: "#33363C" }}
      >
        <Box pos="relative" w="4" h="4" mr="1">
          <VerifiedIcon w="4" h="4" color="gray.550" pos="absolute" />
          <CheckIcon w="4" h="4" pos="absolute" />
        </Box>
        {title}
        <ChevronIcon ml="auto" />
      </Heading>

      <Box
        flex="1"
        pt="3"
        color="gray.300"
        overflowY="scroll"
        fontWeight="semibold"
        sx={{ "scrollbar-width": "none" }}
      >
        {children}
      </Box>
    </Box>
  );
}
