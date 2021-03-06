import { Icon } from "@chakra-ui/react";

export default function ChevronIcon(props) {
  return (
    <Icon fill="currentColor" w="7" h="7" viewBox="0 0 24 24" {...props}>
      <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
    </Icon>
  );
}
