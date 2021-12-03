import { HStack, VStack, Text, Checkbox, Button } from "@chakra-ui/react";

export default function SourahComponent(props) {
  return (
    <Button width="95%" background="gray.200" height="40px">
      <HStack /* background="red" */ width="100%" height="100%">
        {props.withCheckbox && (
          <Checkbox
            borderColor="blue.600"
            size="lg"
            onChange={props.handleCheckBoxChange}
            isChecked={props.sourahChoosed.includes(props.id)}
          />
        )}
        <VStack
          /* background="green" */
          height="100%"
          width="100%"
          justifyContent="space-around"
        >
          <HStack
            /* background="yellow" */
            width="100%"
            justifyContent="space-between"
          >
            <Text fontSize="sm">{props.id}.</Text>
            <Text fontSize="sm">{props.name_arabic}</Text>
            <Text fontSize="sm">{props.name_simple}</Text>
          </HStack>
          <HStack
            /* background="blue" */ width="100%"
            justifyContent="space-between"
          >
            <Text fontSize="sm">{props.name}</Text>
            <Text fontSize="sm">versets: {props.verses_count}</Text>
          </HStack>
        </VStack>
      </HStack>
    </Button>
  );
}
