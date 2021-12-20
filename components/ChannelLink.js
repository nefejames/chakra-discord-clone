import { Box, Link, Text } from "@chakra-ui/react";
import * as Icons from "@components/icons";
import { useRouter } from "next/router";

export default function ChannelLink({
  channelId,
  icon,
  channelName,
  secondIcon,
}) {
  const Icon = icon ? Icons[icon] : Icons.HashTagIcon;

  const router = useRouter();
  const active = +channelId === +router.query.cid;

  return (
    <Link
      href={`/servers/1/channels/${channelId}`}
      display="flex"
      alignItems="center"
      px="2"
      mx="2"
      py="1"
      borderRadius="base"
      bg={active && "gray.550"}
      _hover={{ bg: "gray.550" }}
      _focus={{ boxShadow: "none" }}
    >
      <Box mr="1.5" color="gray.400">
        <Icon />
      </Box>

      <Text color={active && "white"} _hover={{ color: "gray.100" }} w="full">
        {channelName}
      </Text>

      {secondIcon && (
        <Box ml="auto" color="gray.200">
          {secondIcon}
        </Box>
      )}
    </Link>
  );
}
