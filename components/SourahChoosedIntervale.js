import { HStack, Text, Icon } from "@chakra-ui/react";
import { RiArrowLeftRightLine } from "react-icons/ri";

export default function SourahChoosedIntervale({ sourahIntervale }) {
  return (
    <HStack marginY="10px" justifyContent="space-around">
      <Text color="white" opacity={0.8}>
        1
      </Text>
      <Icon as={RiArrowLeftRightLine} boxSize={5} color="white" opacity={0.8} />
      <Text color="white" opacity={0.8}>
        114
      </Text>
    </HStack>
  );
}
