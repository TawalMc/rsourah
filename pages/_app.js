import { useEffect } from "react"
import { useRouter } from "next/dist/client/router"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

import { I18nProvider } from "@lingui/react"
import { i18n } from "@lingui/core"

import { activate } from "@/libs/loadTranslation"

const theme = extendTheme({
  fonts: {
    heading: "Outfit",
    body: "Outfit"
  }
})

function MyApp({ Component, pageProps }) {
  const locale = useRouter().locale

  useEffect(() => {
    activate(locale)
  }, [locale])

  return (
    <I18nProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </I18nProvider>
  )
}

export default MyApp
