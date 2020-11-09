import '@styles/main.scss'
import Head from 'next/head'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
				/>
			</Head>
			<Component {...pageProps} />
		</Fragment>
	)
}

export default MyApp
