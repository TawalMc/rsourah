import { HStack, Text, Icon } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { useIntervalleChoosed } from "../libs/sourahIntervaleContext";

export default function SourahChoosedIntervale() {
  const state = useIntervalleChoosed()[0];
  const setIsNew = React.useState(false)[1];
  useEffect(() => {
    let repeatCheck = setInterval(() => {
      setIsNew((old) => !old);
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
