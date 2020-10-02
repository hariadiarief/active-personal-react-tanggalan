import React from 'react'
import queryString from 'query-string'

import Calendar from 'Components/Calendar'

export default function Home({ history, location }) {
	const { date = null } = queryString.parse(location.search)
	return (
		<section className='home'>
			<header className='home__header'>
				<h3>Responsive Calendar Component</h3>
			</header>

			<main className='container card home__main'>
				<Calendar
					onChange={(date) =>
						history.push({
							pathname: `/`,
							search: `?${queryString.stringify({ date })}`,
						})
					}
					selectedDate={date}
				/>
			</main>

			<footer className='home__footer'>© Masagus Hariadi Arief 2020 all rights reserved</footer>
		</section>
	)
}
