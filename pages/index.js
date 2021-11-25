import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import MainBackground from "../layouts/MainBackground";
import MainContainer from "../layouts/MainContainer";

export default function Home() {
  return (
    <MainBackground>
      <MainContainer>
        <Heading color="white" size="xl" marginY="10px">
          PAIX ET BENEDICTIONS D'ALLAH SUR VOUS.
        </Heading>
        <Text color="white" fontSize="xl" opacity={0.8}>
          Parfois il est difficile de choisir la sourate à lire lors de la
          prière, laissez alors notre application vous choisir ces 02 sourates.
        </Text>
        <HStack marginTop="30px">
          <Button
            size="lg"
            bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
          >
            Suivant
          </Button>
        </HStack>
      </MainContainer>
    </MainBackground>
  );
}
