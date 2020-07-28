import React from 'react'
import Calendar from './Components/Calendar'

function App() {
	return (
		<div className='continer'>
			<div className='card'>
				<Calendar onChange={(date) => alert(date)} />
			</div>
		</div>
	)
}

export default App
