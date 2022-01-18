import {
	Box,
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

import { useRouter } from "next/dist/client/router";
import { useCookies } from "react-cookie";

import MainBackground from "../layouts/MainBackground";
import MainContainer from "../layouts/MainContainer";


import SourahChoosedIntervale from "../components/SourahChoosedIntervale";
import SourahBox from "../components/SourahBox";

const langs = [
	{
		name: "fr",
	},
	{
		name: "en",
	},
	/* {
		name: "ar",
	}, */
];

export default function Settings( props ) {
	const router = useRouter();
	const [locale, setLocale] = useState( router.locale );
	const [cookie, setCookie] = useCookies( ["NEXT_LOCALE"] );

	useEffect( () => {
		router.push( router.pathname, router.pathname, { locale } );

		if ( cookie.NEXT_LOCALE !== locale )
			setCookie( "NEXT_LOCALE", locale, { path: "/" } );
	}, [locale] );

	const updateLang = async ( data ) => {
		setLocale( data.name );
	};

	const LangMenu = () => {
		return (
			<HStack spacing={5}>
				<Menu>
					<MenuButton as={Button} rightIcon={<RiArrowDownSLine />}>
						Langue
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
					Paramètres
				</Heading>
				<VStack spacing={5} alignItems="start" paddingY="10px">
					<LangMenu />
				</VStack>
				<Text color="white" fontSize="xl" opacity={0.8}>
					{"Définissez l'intervalle de choix des sourates."}
				</Text>
				<SourahChoosedIntervale />
				<SourahBox />
			</MainContainer>
		</MainBackground>
	);
}
