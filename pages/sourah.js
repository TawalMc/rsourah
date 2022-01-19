import React from "react";
import { Heading, Text } from "@chakra-ui/react";

import MainBackground from "@/layouts/MainBackground";
import MainContainer from "@/layouts/MainContainer";

import NextButton from "@/components/NextButton";

import { Trans } from "@lingui/react";

import SourahAndInterval from "@/components/SourahAndInterval";

export default function Sourah( props ) {


	return (
		<MainBackground>
			<MainContainer>
				<Heading color="white" marginY="10px">
					<Trans id="tr-sourah">Sourah</Trans>
				</Heading>
				<Text color="white" fontSize="xl" opacity={0.8}>
					<Trans id="tr-choice_sourah">
						{"Définissez l'intervalle de choix des sourates."}
					</Trans>
				</Text>
				 <SourahAndInterval/>
				<NextButton href="/rakaat" />
			</MainContainer>
		</MainBackground>
	);
}
