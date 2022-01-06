import { HStack, Text, Icon } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { addIntervale, getIntervalle } from "../libs/db";
import { useIntervalleChoosed } from "../libs/sourahIntervaleContext";

export default function SourahChoosedIntervale() {
  const state = useIntervalleChoosed()[0];
  const setIsNew = React.useState(false)[1];
  useEffect(() => {
    // if (state != null)

    let repeatCheck = setInterval(() => {
      setIsNew((old) => !old);
      //
      addIntervale(state.sourahIntervalle);
    }, 700);

    return () => {
      clearInterval(repeatCheck);
    };
  }, []);

  return (
    <HStack marginY="10px" justifyContent="space-around">
      <Text color="white" opacity={0.8}>
        {state.sourahIntervalle[0]}
      </Text>
      <Icon as={RiArrowLeftRightLine} boxSize={5} color="white" opacity={0.8} />
      <Text color="white" opacity={0.8}>
        {state.sourahIntervalle[1]}
      </Text>
    </HStack>
  );
}
