import { useRouter } from "next/router";
import {
  Box,
  Heading,
  Text,
  Stack,
  VStack,
  HStack,
  Input,
} from "@chakra-ui/react";
import { ChannelsPanel, MessagesPanel } from "@components/panels/index";
import ServerCategory from "@components/ServerCategory";
import channelsData from "@data/channelsData";
import * as Icons from "@components/icons";
import userMessages from "@data/userMessages";
import UserMessage from "@components/UserMessage";

export default function Server() {
  const router = useRouter();
  //const server = channelsData[`${router.query.sid}`];

  // const channel = server.categories
  //   .map((c) => c.channels)
  //   .flat()
  //   .find((channel) => +channel.id === +router.query.cid);

  //console.log(server.categories.map((channel) => console.log(channel)));
  //console.log(server.categories);

  const iconStyles = {
    w: "6",
    h: "6",
    color: "gray.200",
    cursor: "pointer",
  };
  return (
    <>
      <ChannelsPanel title={`Server ${router.query.cid}`}>
        <Stack spacing="5">
          {channelsData.one.categories.map((category, i) => (
            <ServerCategory
              key={i}
              categoryTitle={category.name}
              categoryChannels={category.channels}
            />
          ))}
        </Stack>
      </ChannelsPanel>

      <MessagesPanel>
        <Box px="4" shadow="sm" display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <Icons.HashTagIcon />
            <Heading
              as="h2"
              fontSize="md"
              fontWeight="semibold"
              color="white"
              px="3"
              h="12"
              display="flex"
              alignItems="center"
            >
              <Text>General</Text>
            </Heading>
          </Box>

          <HStack spacing="4" display="flex" alignItems="center" ml="auto">
            <Icons.HashTagWithSpeechBubbleIcon
              w="6"
              h="6"
              color="gray.200"
              cursor="pointer"
              _hover={{ color: "gray.100" }}
            />
            <Icons.BellIcon {...iconStyles} _hover={{ color: "gray.100" }} />
            <Icons.PinIcon {...iconStyles} _hover={{ color: "gray.100" }} />
            <Icons.PeopleIcon {...iconStyles} _hover={{ color: "gray.100" }} />

            <Box pos="relative">
              <Input
                w="36"
                h="6"
                px="2"
                bg="gray.900"
                fontSize="sm"
                border="none"
                placeholder="Search"
                fontWeight="semibold"
                _placeholder={{ color: "gray.300" }}
              />

              <Box
                mt="1"
                mr="2"
                top="0"
                right="0"
                bottom="0"
                pos="absolute"
                display="flex"
                color="gray.400"
                alignItems="center"
              >
                <Icons.SpyGlassIcon w="4" h="4" />
              </Box>
            </Box>

            <Icons.InboxIcon {...iconStyles} _hover={{ color: "gray.100" }} />
            <Icons.QuestionCircleIcon
              {...iconStyles}
              _hover={{ color: "gray.100" }}
            />
          </HStack>
        </Box>

        <VStack
          spacing="3"
          flex="1"
          overflowY="scroll"
          sx={{ "scrollbar-width": "none" }}
        >
          {userMessages.map((message, i) => (
            <UserMessage message={message} key={i} />
          ))}
        </VStack>
      </MessagesPanel>
    </>
  );
}
