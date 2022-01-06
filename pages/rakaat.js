import MainContainer from "../layouts/MainContainer";
import MainBackground from "../layouts/MainBackground";
import RakaatBox from "../components/RakaatBox";
import loadTranslation from "../libs/loadTranslation";
import NextButton from "../components/NextButton";
import { useIntervalleChoosed } from "../libs/sourahIntervaleContext";
import { useEffect, useState } from "react";
import { getIntervalle, getChoosedSourah } from "../libs/db";

export default function Rakaat(props) {
  const [souraIntervale, setSourahIntervale] = useState([]);
  const [sourahRakaat, setSourahRakaat] = useState([]);

  useEffect(async () => {
    let stored = await getIntervalle();
    let sourahList = stored.data;
    setSourahIntervale(sourahList);

    let state = [
      await getChoosedSourah(sourahList[0]),
      await getChoosedSourah(sourahList[1]),
    ];

    setSourahRakaat(state);
  }, []);

  return (
    <MainBackground>
      <MainContainer>
        <RakaatBox {...sourahRakaat[0]} nbRakaat={1} />
        <RakaatBox {...sourahRakaat[1]} nbRakaat={2} />
        <NextButton href="settings" />
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
