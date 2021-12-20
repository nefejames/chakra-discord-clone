import { Text } from "@chakra-ui/react";

import { ChannelsPanel, MessagesPanel } from "@components/panels/index";

export default function Home() {
  return (
    <>
      <ChannelsPanel title="Dashboard">
        <Text color="white" fontWeight="medium">
          Friends
        </Text>
      </ChannelsPanel>
      <MessagesPanel />
    </>
  );
}
