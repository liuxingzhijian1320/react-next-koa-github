
import { Button } from 'antd'
import Link from 'next/link'
import Router from 'next/router'

export default ({ children }) => (
	<>
		<header>
			<Link href="/a?id=111">
				<Button>Page AAA</Button>
			</Link>
				<Button onClick={ () => Router.push('/b') }>Page BBB</Button>
		</header>

		{ children }

	</>
)