import React, { useEffect } from "react";
import { Heading, HStack, Spinner, Text } from "@chakra-ui/react";
import { Trans } from "@lingui/macro";
import { useCookies } from "react-cookie";

import MainBackground from "../layouts/MainBackground";
import MainContainer from "../layouts/MainContainer";
import loadTranslation from "../libs/loadTranslation";
import NextButton from "../components/NextButton";
import SourahChoosedIntervale from "../components/SourahChoosedIntervale";
import SourahBox from "../components/SourahBox";
import { useIntervalleChoosed } from "../libs/sourahIntervaleContext";

export default function Sourah(props) {
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
        <SourahChoosedIntervale />
        <SourahBox />
        <NextButton href="/rakaat" />
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
