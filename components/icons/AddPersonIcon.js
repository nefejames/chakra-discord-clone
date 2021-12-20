import { Icon } from "@chakra-ui/react";

export default function AddPersonIcon(props) {
  return (
    <Icon aria-hidden="false" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 3h3v2h-3v3h-2V5h-3V3h3V0h2v3Zm-11 9c2.205 0 4-1.795 4-4s-1.795-4-4-4-4 1.795-4 4 1.795 4 4 4Zm0 1c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.289-6-8-6Z"
      />
    </Icon>
  );
}
