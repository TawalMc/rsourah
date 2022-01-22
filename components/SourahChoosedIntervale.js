import { HStack, Text, Icon } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { RiArrowLeftRightLine } from "react-icons/ri"

export default function SourahChoosedIntervale({ intervalChoosed }) {
  return (
    <HStack marginY="10px" justifyContent="space-around">
      <Text color="white" opacity={0.8}>
        {intervalChoosed[0]}
      </Text>
      <Icon as={RiArrowLeftRightLine} boxSize={5} color="white" opacity={0.8} />
      <Text color="white" opacity={0.8}>
        {intervalChoosed[1]}
      </Text>
    </HStack>
  )
}
