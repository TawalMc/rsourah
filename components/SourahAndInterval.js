import SpinnerBox from "@/components/SipinnerBox";

import SourahChoosedIntervale from "@/components/SourahChoosedIntervale";
import SourahBox from "@/components/SourahBox";

import { useRouter } from "next/dist/client/router";
import useQuran from "@/libs/fetcherAPI";
import { useLiveQuery } from "dexie-react-hooks";
import { addSourahAPI, db } from "@/libs/db";
import { useIntervalleChoosed } from "@/libs/sourahIntervaleContext";
import { useEffect } from "react";


export default function SourahAndInterval() {
	const [state, actions] = useIntervalleChoosed();
	const lang = useRouter().locale ?? "fr"
	const {quranAllChapters, isLoading} = useQuran(lang) 
	const intervalChoosed = useLiveQuery(()=> db.intervalle.get(0))?.data ?? [1, 114]

	useEffect(() => {
	if (!isLoading) addSourahAPI(quranAllChapters);
	}, [lang])
	
	// console.log(intervalChoosed)

	return (
		<>
			{intervalChoosed === undefined ? <SpinnerBox /> : <SourahChoosedIntervale intervalChoosed={intervalChoosed} />}
			{isLoading || intervalChoosed === undefined  ? <SpinnerBox /> : <SourahBox  quranAllChapters={quranAllChapters} state={intervalChoosed} actions={actions} />}
		</>
	)
}