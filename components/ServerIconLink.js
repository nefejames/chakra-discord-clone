import NextLink from "next/link";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function ServerIconLink({ children, href, active }) {
  const router = useRouter();
  const activePath = router.asPath === href;
  const activeServer = active || activePath;

  return (
    <Box position="relative">
      <Box
        w="12"
        h="12"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        bg={activeServer ? "brand" : "gray.600"}
        borderRadius={activeServer ? "15px" : "3xl"}
        color={activeServer ? "white" : "gray.100"}
        _hover={{
          bg: "brand",
          color: "white",
          borderRadius: "15px",
          transition:
            "background-color .5s ease-out, color .15s ease-out,border-radius .3s ease-in;",
          ".white-hover-box": "opacity: 1",
        }}
        sx={{
          ":hover.white-hover-box": {
            opacity: 1,
          },
        }}
      >
        <NextLink href={href}>
          <a>{children}</a>
        </NextLink>
      </Box>
    </Box>
  );
}
