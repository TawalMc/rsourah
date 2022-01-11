import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { initTranslation } from "../libs/loadTranslation";

const theme = extendTheme({
  fonts: {
    heading: "Outfit",
    body: "Outfit",
  },
});

initTranslation(i18n);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const locale = router.locale || router.defaultLocale;

  if (pageProps.translation) {
    i18n.load(locale, pageProps.translation);
    i18n.activate(locale);
  }

  return (
    <I18nProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </I18nProvider>
  );
}

export default MyApp;
