import { Box, Text } from "@chakra-ui/react";
import {
  ArrowIcon,
  HashTagIcon,
  BookIcon,
  SpeakerPhoneIcon,
} from "@components/icons";
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
