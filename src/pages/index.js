import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import Calendar from '@components/calendar'
import Meta from '@components/meta'

export default function Home({ dateProps }) {
	const router = useRouter()
	const { date } = dateProps ? dateProps : router.query

	return (
		<div>
			<Meta />

			<main className='home'>
				<header className='home__header'>
					<h3>Responsive Calendar Component</h3>
				</header>

				<main className='container card home__main'>
					<Calendar
						onChange={(date) =>
							Router.push({
								pathname: '/',
								query: { date },
							})
						}
						selectedDate={date}
					/>
				</main>

				<footer className='home__footer'>© Masagus Hariadi Arief 2020 all rights reserved</footer>
			</main>
		</div>
	)
}

Home.getInitialProps = async (query) => {
	const { date } = query
	return { dateProps: date }
}
