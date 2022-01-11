import { Heading, HStack, Text } from "@chakra-ui/react";
import { Trans } from "@lingui/macro";

import MainBackground from "../layouts/MainBackground";
import MainContainer from "../layouts/MainContainer";

import loadTranslation from "../libs/loadTranslation";
import NextButton from "../components/NextButton";
import {
  getIntervalleChoosed,
  useIntervalleChoosed,
} from "../libs/sourahIntervaleContext";
import { useEffect, useState } from "react";

export default function Home(props) {
  const [state, actions] = useIntervalleChoosed();
  const [isDB, setIsDB] = useState(false);

  console.log(state);

  const fetchIntervale = async () => {
    let arr = await getIntervalleChoosed();
    if (arr !== null) {
      setIsDB(true);
      actions.load();
    }
  };

  useEffect(() => {
    fetchIntervale();
  }, []);

  return (
    <MainBackground>
      <MainContainer>
        <Heading color="white" size="xl" marginY="10px">
          <Trans id="tr-greetings_muslim">
            {"PAIX ET BÉNÉDICTIONS D'ALLAH SUR VOUS."}
          </Trans>
        </Heading>
        <Text color="white" fontSize="xl" opacity={0.8}>
          <Trans id="tr-app_goal">
            Parfois il est difficile de choisir la sourate à lire lors de la
            prière, laissez alors notre application vous choisir ces 2 sourates
          </Trans>
        </Text>
        <HStack marginTop="30px">
          <NextButton href={!isDB ? "/sourah" : "/rakaat"} />
        </HStack>
      </MainContainer>
    </MainBackground>
  );
}

export const getStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx?.locale,
    process.env.NODE_ENV === "production"
  );

  return {
    props: {
      translation,
    },
  };
};
