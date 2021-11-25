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
import { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import MainBackground from "../layouts/MainBackground";
import MainContainer from "../layouts/MainContainer";

/** TODO: Add translation features */

export default function Settings(props) {
  const langs = [
    {
      name: "fr",
    },
    {
      name: "en",
    },
    {
      name: "ar",
    },
  ];

  const [langChoosed, setLangChoosed] = useState(langs[0]);

  const LangMenu = () => {
    return (
      <HStack spacing={5}>
        <Menu>
          <MenuButton as={Button} rightIcon={<RiArrowDownSLine />}>
            Langue
          </MenuButton>
          <MenuList>
            {langs.map((data, _) => (
              <MenuItem onClick={() => setLangChoosed(data)}>
                {data.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Text color="white">{langChoosed.name}</Text>
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
          <Text color="white">Choix des sourates</Text>
        </VStack>
      </MainContainer>
    </MainBackground>
  );
}
