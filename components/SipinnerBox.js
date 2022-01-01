import { HStack, Spinner } from "@chakra-ui/react";

const SpinnerBox = () => {
  return (
    <HStack width="100%" justifyContent="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.200"
        size="lg"
      />
    </HStack>
  );
};

export default SpinnerBox;
