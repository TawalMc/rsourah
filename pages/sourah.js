import { Heading, HStack, Spinner, Text } from "@chakra-ui/react";
import { Trans } from "@lingui/macro";
import { useCookies } from "react-cookie";

import MainBackground from "../layouts/MainBackground";
import MainContainer from "../layouts/MainContainer";
import loadTranslation from "../libs/loadTranslation";
import NextButton from "../components/NextButton";

export default function Sourah(props) {
  const cookie = useCookies()[0];

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

  return (
    <MainBackground>
      <MainContainer>
        <Heading color="white" marginY="10px">
          <Trans id="tr-sourah">Sourah</Trans>
        </Heading>
        <Text color="white" fontSize="xl" opacity={0.8}>
          <Trans id="tr-choice_sourah">
            Définissez l'intervalle de choix des sourates.
          </Trans>
        </Text>
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
