import { useRouter } from "next/router";
import { Heading, Text, VStack } from "@chakra-ui/react";
import { ChannelsPanel, MessagesPanel } from "@components/panels/index";

export default function Server() {
  let router = useRouter();

  return (
    <>
      <ChannelsPanel title={`Server ${router.query.id}`}>
        <Text color="white" fontWeight="medium">
          Unread Channel
        </Text>
        {[...Array(40)].map((_, i) => (
          <Text key={i} color="gray.300" fontWeight="semibold">
            Channel {i + 1}
          </Text>
        ))}
      </ChannelsPanel>
      <MessagesPanel>
        <Heading
          as="h2"
          fontSize="lg"
          fontWeight="semibold"
          color="white"
          px="3"
          h="12"
          shadow="sm"
          display="flex"
          alignItems="center"
        >
          General
        </Heading>

        <VStack
          spacing="2"
          flex="1"
          p="3"
          overflowY="scroll"
          sx={{ "scrollbar-width": "none" }}
        >
          {[...Array(40)].map((_, i) => (
            <Text key={i}>
              Message {i + 1} Life finds a way. God creates dinosaurs. God
              destroys dinosaurs. God creates Man. Man destroys God. Man creates
              Dinosaurs. Checkmate... Life finds a way. You&apos;re a very
              talented young man, with your own clever thoughts and ideas. Do
              you need a manager?
            </Text>
          ))}
        </VStack>
      </MessagesPanel>
    </>
  );
}
