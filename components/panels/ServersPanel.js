import { Divider, Image, VStack, Icon } from "@chakra-ui/react";
import ServerIconLink from "@components/ServerIconLink";
import { DiscordIcon } from "@components/icons";
import { useRouter } from "next/router";

//import OldServerIcon from "@components/OldServerIcon";
//import DiscordIcon from "@components/icons/DiscordIcon";

const servers = [
  { id: "1", img: "bot.png" },
  { id: "2", img: "chakra.png" },
  { id: "3", img: "academind.png" },
  { id: "4", img: "next.png" },
  { id: "5", img: "hackmamba.png" },
  { id: "6", img: "magic.png" },
  { id: "7", img: "framer.png" },
  { id: "8", img: "svelte.png" },
];

export default function ServersPanel() {
  const router = useRouter();

  return (
    <VStack
      bg="gray.800"
      p="3"
      as="div"
      minW="72px"
      spacing="2"
      overflowY="scroll"
      sx={{ "scrollbar-width": "none" }}
    >
      <ServerIconLink href="/">
        <DiscordIcon w="7" h="7" />
      </ServerIconLink>

      <Divider w="8" borderColor="white" opacity="0.6" rounded="3xl" />

      {servers.map((server, i) => (
        <ServerIconLink
          href={`/servers/${server.id}/channels/1`}
          active={+router.query.sid === +server.id}
          key={i}
        >
          <Image
            src={`/images/servers/${server.img}`}
            alt="a discord server's logo"
          />
        </ServerIconLink>
      ))}

      {/* {[...Array(40)].map((_, i) => (
        <OldServerIcon key={i} label={i} />
      ))} */}
    </VStack>
  );
}
