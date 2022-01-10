import MainContainer from "../layouts/MainContainer";
import MainBackground from "../layouts/MainBackground";
import RakaatBox from "../components/RakaatBox";
import loadTranslation from "../libs/loadTranslation";
import NextButton from "../components/NextButton";
import { useIntervalleChoosed } from "../libs/sourahIntervaleContext";
import { useEffect, useState } from "react";
import random from "lodash.random";
import { getIntervalle, getChoosedSourah } from "../libs/db";

export default function Rakaat(props) {
  const [sourahIntervale, setSourahIntervale] = useState([]);
  const [sourahRakaat, setSourahRakaat] = useState([]);
  const [isNew, setIsNew] = useState(false);

  const randomSourah = async (index) => {
    let r = random(sourahIntervale[0], sourahIntervale[1], false);
    let s = await getChoosedSourah(r);

    setSourahRakaat((old) => {
      let n = old;
      n[index - 1] = s;
      console.log(n);
      return n;
    });
    setIsNew((old) => !old);
  };

  // console.log(sourahRakaat);

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
        <RakaatBox
          {...sourahRakaat[0]}
          nbRakaat={1}
          randomSourah={randomSourah}
        />
        <RakaatBox
          {...sourahRakaat[1]}
          nbRakaat={2}
          randomSourah={randomSourah}
        />
        {/* <NextButton href="settings" /> */}
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
