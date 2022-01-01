import { HStack, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import {
  ACTION,
  INITIAL_STATE,
  SourahIntervaleContext,
  SourahIntervaleReducer,
} from "../libs/sourahIntervaleContext";

export default function SourahChoosedIntervale() {
  const [state, dispatch] = React.useReducer(
    SourahIntervaleReducer,
    INITIAL_STATE
  );

  console.log(state);
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
