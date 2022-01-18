import { Heading, HStack, Text } from "@chakra-ui/react";

import MainBackground from "../layouts/MainBackground";
import MainContainer from "../layouts/MainContainer";

import NextButton from "../components/NextButton";

export default function Home( props ) {
	return (
		<MainBackground>
			<MainContainer>
				<Heading color="white" size="xl" marginY="10px">
					{"PAIX ET BÉNÉDICTIONS D'ALLAH SUR VOUS."}
				</Heading>
				<Text color="white" fontSize="xl" opacity={0.8}>
					Parfois il est difficile de choisir la sourate à lire lors de la
					prière, laissez alors notre application vous choisir ces 2 sourates
				</Text>
				<HStack marginTop="30px">
					<NextButton href={"/sourah"} />
				</HStack>
			</MainContainer>
		</MainBackground>
	);
}
