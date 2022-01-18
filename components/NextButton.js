import Link from 'next/dist/client/link'
import { Button } from '@chakra-ui/react'

export default function NextButton( { href } ) {
	return (
		<Link href={href}>
			<Button
				size='lg'
				bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
			>
				Suivant
			</Button>
		</Link>
	);
}

