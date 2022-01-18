import { Button, IconButton } from "@chakra-ui/button";
import { Heading, VStack, Text, HStack, Box, Circle } from "@chakra-ui/layout";
import { RiShuffleLine } from "react-icons/ri";
import SourahComponent from "./SourahComponent";

export default function RakaatBox( {
	id,
	name_arabic,
	name_simple,
	name,
	verses_count,
	nbRakaat,
	randomSourah,
} ) {
	return (
		<VStack height="40vh">
			<Heading textAlign="left" color="white" size="xl" marginY="10px">
				Rakaat {`${ nbRakaat === 1 ? "I" : "II" }`}
			</Heading>
			<SourahComponent
				id={id}
				name_arabic={name_arabic}
				name_simple={name_simple}
				name={name}
				withCheckbox={false}
				verses_count={verses_count}
			/>
			<HStack justifyContent="center" paddingY="20px" spacing={5}>
				<Circle
					boxShadow="11px 11px 86px #5a5a5a, -11px -11px 86px #ffffff;"
					size="64px"
				>
					<Text color="white" fontWeight="bold" fontSize="xl" opacity={0.8}>
						{id}
					</Text>
				</Circle>
				<IconButton
					onClick={() => randomSourah( nbRakaat )}
					width="48px"
					height="48px"
					borderRadius="24px"
					aria-label="Shuffle sourah"
					boxShadow="11px 11px 86px #5a5a5a, -11px -11px 86px #ffffff;"
					icon={<RiShuffleLine />}
				/>
			</HStack>
		</VStack>
	);
}
