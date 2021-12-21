import { Avatar, Box, Text } from "@chakra-ui/react";

export default function UserMessage({ message }) {
  return (
    <Box
      mt="4"
      pl="4"
      pr="16"
      py="1"
      display="flex"
      lineHeight="6"
      _hover={{ bg: "#32353B" }}
    >
      <Avatar
        w="10"
        h="10"
        mr="4"
        mt="0.5"
        name={message.name}
        src={message.imgUrl}
      />
      <Box>
        <Text display="flex" alignItems="baseline">
          <Text as="span" fontWeight="md" color="white" mr="2">
            {message.name}
          </Text>
          <Text as="span" color="gray.400">
            {message.date}
          </Text>
        </Text>
        <Text>{message.text}</Text>
      </Box>
    </Box>
  );
}
