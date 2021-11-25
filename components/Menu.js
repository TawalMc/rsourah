import Link from "next/link";
import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { RiHome2Line, RiSoundModuleLine } from "react-icons/ri";

export default function Menu(props) {
  return (
    <HStack justifyContent="space-between">
      <Link href="/">
        <IconButton
          variant="outline"
          aria-label="Go to Home"
          icon={<RiHome2Line color="white" />}
          /* fontSize="20px"
        size="lg" */
          isRound
        />
      </Link>
      <Link href="/settings">
        <IconButton
          variant="outline"
          aria-label="Go to Settings"
          icon={<RiSoundModuleLine color="white" />}
          /* fontSize="20px"
        size="lg" */
          isRound
        />
      </Link>
    </HStack>
  );
}
