import { Box, Stack, Text } from "@chakra-ui/react";
import * as Icons from "@components/icons";
import ChannelLink from "./ChannelLink";

export default function ServerCategory({ categoryTitle, categoryChannels }) {
  return (
    <Box>
      {categoryTitle && (
        <Box
          as="button"
          w="full"
          px="1"
          display="flex"
          alignItems="center"
          _hover={{ color: "gray.100" }}
        >
          <Icons.ArrowIcon mr="1" />
          <Text
            fontSize="sm"
            fontWeight="semibold"
            textTransform="uppercase"
            letterSpacing="wide"
          >
            {categoryTitle}
          </Text>
        </Box>
      )}

      {/* when I use stack to try adding spacing between the links, the alignment scatters. Strange behavior. Why? */}
      <Box mt="1">
        {categoryChannels.map((channel, i) => (
          <ChannelLink
            channelName={channel.name}
            channelId={channel.id}
            icon={channel.icon}
            key={i}
          />
        ))}
      </Box>
    </Box>
  );
}
