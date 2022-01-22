import MainContainer from "@/layouts/MainContainer"
import MainBackground from "@/layouts/MainBackground"
import RakaatBox from "@/components/RakaatBox"

import { useEffect, useState } from "react"
import random from "lodash.random"
import { useIntervalleChoosed } from "@/libs/sourahIntervaleContext"

import { db } from "@/libs/db"
import { useLiveQuery } from "dexie-react-hooks"

export default function Rakaat(props) {
  const [state, actions] = useIntervalleChoosed()
  const sourahAPI = useLiveQuery(() => db.sourahAPI.get(0))
  const [sourahRakaat, setSourahRakaat] = useState([])
  const [isNew, setIsNew] = useState(false)

  useEffect(() => {
    if (sourahAPI !== undefined)
      setSourahRakaat(() => {
        const s1 = sourahAPI.data[state.sourahIntervalle[0] - 1]
        const s2 = sourahAPI.data[state.sourahIntervalle[1] - 1]
        return [s1, s2]
      })
  }, [sourahAPI])

  // console.log(sourahRakaat)

  const randomSourah = (index) => {
    let r = random(state.sourahIntervalle[0], state.sourahIntervalle[1], false)
    let s = sourahAPI.data[r - 1]

    setSourahRakaat((old) => {
      let n = old
      n[index - 1] = s
      // console.log( n );
      return n
    })

    setIsNew((old) => !old)
  }

  return (
    <MainBackground>
      <MainContainer>
        <RakaatBox
          nbRakaat={1}
          randomSourah={randomSourah}
          {...sourahRakaat[0]}
        />
        <RakaatBox
          nbRakaat={2}
          randomSourah={randomSourah}
          {...sourahRakaat[1]}
        />
      </MainContainer>
    </MainBackground>
  )
}
