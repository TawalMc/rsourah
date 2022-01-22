import { VStack } from "@chakra-ui/react"

import SourahComponent from "@/components/SourahComponent"

export default function SourahBox(props) {
  return (
    <VStack
      overflow="hidden auto"
      paddingY="10px"
      marginY="10px"
      height="55vh"
      width="100%"
      borderTop="1px solid white"
    >
      {props.quranAllChapters.map((chapter, _) => (
        <SourahComponent
          {...chapter}
          withCheckbox
          key={chapter.id}
          state={props.state}
          actions={props.actions}
        />
      ))}
    </VStack>
  )
}
