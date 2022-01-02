import MainContainer from "../layouts/MainContainer";
import MainBackground from "../layouts/MainBackground";
import RakaatBox from "../components/RakaatBox";
import loadTranslation from "../libs/loadTranslation";
import NextButton from "../components/NextButton";
import { useIntervalleChoosed } from "../libs/sourahIntervaleContext";

export default function Rakaat(props) {
  const state = useIntervalleChoosed()[0];
  return (
    <MainBackground>
      <MainContainer>
        <RakaatBox nbRakaat={1} />
        <RakaatBox nbRakaat={2} />
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
