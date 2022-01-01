import { VStack } from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/dist/client/router";

import useQuran from "../libs/fetcherAPI";
import SpinnerBox from "./SipinnerBox";
import SourahComponent from "./SourahComponent";

export default function SourahBox({}) {
  const cookie = useCookies()[0];
  const router = useRouter();
  const lang = cookie.NEXT_LOCALE || router.locale;
  const { quranAllChapters, isLoading } = useQuran(lang);

  const handleCheckBoxChange = () => {};

  if (isLoading) return <SpinnerBox />;

  return (
    <VStack
      overflow="hidden auto"
      /* background="red" */
      paddingY="10px"
      marginY="10px"
      height="55vh"
      width="100%"
      borderTop="1px solid white"
    >
      {quranAllChapters.map((chapter, _) => (
        <SourahComponent {...chapter} withCheckbox key={chapter.name} />
      ))}
    </VStack>
  );
}
