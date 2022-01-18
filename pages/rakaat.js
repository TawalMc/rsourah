import MainContainer from "../layouts/MainContainer";
import MainBackground from "../layouts/MainBackground";
import RakaatBox from "../components/RakaatBox";

import { useEffect, useState } from "react";
import random from "lodash.random";
import { getIntervalle, getChoosedSourah } from "../libs/db";

export default function Rakaat( props ) {
	/* 
		const randomSourah = async ( index ) => {
			let r = random( sourahIntervale[0], sourahIntervale[1], false );
			let s = await getChoosedSourah( r );
	
			setSourahRakaat( ( old ) => {
				let n = old;
				n[index - 1] = s;
				console.log( n );
				return n;
			} );
	
		};
	 */

	return (
		<MainBackground>
			<MainContainer>
				<RakaatBox
					nbRakaat={1}
					randomSourah={1}
				/>
				<RakaatBox
					nbRakaat={2}
					randomSourah={1}
				/>
			</MainContainer>
		</MainBackground>
	);
}
