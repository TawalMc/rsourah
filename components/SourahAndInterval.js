import SpinnerBox from "@/components/SipinnerBox"

import SourahChoosedIntervale from "@/components/SourahChoosedIntervale"
import SourahBox from "@/components/SourahBox"

import { useRouter } from "next/dist/client/router"
import useQuran from "@/libs/fetcherAPI"
import { addSourahAPI } from "@/libs/db"
import { useIntervalleChoosed } from "@/libs/sourahIntervaleContext"
import { useEffect, useState } from "react"

export default function SourahAndInterval() {
  const [isNew, setIsNew] = useState(false)
  const [state, actions] = useIntervalleChoosed()
  const lang = useRouter().locale ?? "fr"
  const { quranAllChapters, isLoading } = useQuran(lang)

  useEffect(() => {
    if (!isLoading) {
      console.log("bonsoir")
      addSourahAPI(quranAllChapters)
    }
  }, [isLoading])

  const setUpdate = (id) => {
    console.log(id)
    actions.update(id)

    setIsNew((old) => !old)
  }

  return (
    <>
      {isLoading ? (
        <SpinnerBox />
      ) : (
        <SourahChoosedIntervale intervalChoosed={state.sourahIntervalle} />
      )}
      {isLoading ? (
        <SpinnerBox />
      ) : (
        <SourahBox
          quranAllChapters={quranAllChapters}
          state={state.sourahIntervalle}
          actions={setUpdate}
        />
      )}
    </>
  )
}
