import {
	Button,
	Heading,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Text,
	VStack,
	HStack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import { Trans } from "@lingui/react";

import { useRouter } from "next/dist/client/router";
import { useCookies } from "react-cookie";

import MainBackground from "../layouts/MainBackground";
import MainContainer from "../layouts/MainContainer";


import SourahChoosedIntervale from "../components/SourahChoosedIntervale";
import SourahBox from "../components/SourahBox";
// import { activate } from "../libs/loadTranslation";

const langs = [
	{
		name: "fr",
	},
	{
		name: "en",
	},
];

export default function Settings( props ) {
	const router = useRouter();
	const [locale, setLocale] = useState( router.locale );
	// const [cookie, setCookie] = useCookies( ["NEXT_LOCALE"] );

	useEffect( () => {
		router.push( router.pathname, router.pathname, { locale } );
		// if ( cookie.NEXT_LOCALE !== locale ) setCookie( "NEXT_LOCALE", locale, { path: "/" } );
	}, [locale]);

	const updateLang = ( data ) => {
		setLocale(data.name);
	};

	const LangMenu = () => {
		return (
			<HStack spacing={5}>
				<Menu>
					<MenuButton as={Button} rightIcon={<RiArrowDownSLine />}>
						<Trans id="tr-language">
							Langue
						</Trans>
					</MenuButton>
					<MenuList>
						{langs.map( ( data, _ ) => (
							<MenuItem _focus key={data.name} onClick={() => updateLang( data )}>
								{data.name}
							</MenuItem>
						) )}
					</MenuList>
				</Menu>
				<Text color="white">{locale}</Text>
			</HStack>
		);
	};

	return (
		<MainBackground>
			<MainContainer>
				<Heading color="white" marginY="10px">
					<Trans id="tr-settings">Paramètres</Trans>
				</Heading>
				<VStack spacing={5} alignItems="start" paddingY="10px">
					<LangMenu />
				</VStack>
				<Text color="white" fontSize="xl" opacity={0.8}>
					<Trans id="tr-choice_sourah">
						{"Définissez l'intervalle de choix des sourates."}
					</Trans>
				</Text>
				<SourahChoosedIntervale />
				<SourahBox />
			</MainContainer>
		</MainBackground>
	);
}
