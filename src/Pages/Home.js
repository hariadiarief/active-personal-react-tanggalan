import React from 'react'
import queryString from 'query-string'

import Calendar from '../Components/Calendar'

const Home = ({ history, location }) => {
	const { date = null } = queryString.parse(location.search)
	return (
		<div className='container home'>
			<h1>Responsive Calendar Component</h1>
			<div></div>
			<div className='card home__card'>
				<Calendar
					onChange={(date) =>
						history.push({
							pathname: `/`,
							search: `?${queryString.stringify({ date })}`,
						})
					}
					selectedDate={date}
				/>
			</div>
		</div>
	)
}

export default Home
