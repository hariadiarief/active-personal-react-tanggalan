import React from 'react'
import Calendar from './Components/Calendar'

function App() {
	return (
		<div className='container home'>
			<h1>Responsive Calendar Component</h1>
			<div></div>
			<div className='card home__card'>
				<Calendar onChange={(date) => alert(date)} />
			</div>
		</div>
	)
}

export default App
