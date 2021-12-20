import { Icon } from "@chakra-ui/react";

export default function VerifiedIcon(props) {
  return (
    <Icon
      aria-label="Verified"
      aria-hidden="false"
      viewBox="0 0 16 15.2"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
      />
    </Icon>
  );
}
