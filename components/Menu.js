import Link from "next/link";
import { Box, HStack, IconButton, Text } from "@chakra-ui/react";
import { RiHome2Line, RiSoundModuleLine, RiShuffleLine } from "react-icons/ri";

export default function Menu(props) {
  return (
    <HStack justifyContent="space-between">
      <Link href="/" passHref>
        <IconButton
          variant="outline"
          aria-label="Go to Home"
          icon={<RiHome2Line color="white" />}
          isRound
        />
      </Link>
      <Link href="/rakaat" passHref>
        <IconButton
          variant="outline"
          aria-label="Go to Rakaat"
          icon={<RiShuffleLine color="white" />}
          isRound
        />
      </Link>
      <Link href="/settings" passHref>
        <IconButton
          variant="outline"
          aria-label="Go to Settings"
          icon={<RiSoundModuleLine color="white" />}
          isRound
        />
      </Link>
    </HStack>
  );
}
