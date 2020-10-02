import React, { useState } from 'react'
import moment from 'moment'

import { ReactComponent as IconArrowLeft } from 'Assets/Icons/keyboard_arrow_left.svg'
import { ReactComponent as IconArrowRight } from 'Assets/Icons/keyboard_arrow_right.svg'

export default function Calendar(props) {
	const weeksDisplay = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fa', 'Sa']
	const today = moment()

	const [selectedDate, setSelectedDate] = useState(moment(props.selectedDate) ?? moment())
	const [whichMonthDisplay, setWhichMonthDisplay] = useState(
		props.selectedDate ? moment(props.selectedDate) : moment()
	)

	const determineDateClass = (date) => {
		if (selectedDate && date.format('YYYY-MM-DD') === selectedDate.format('YYYY-MM-DD')) {
			return 'calendar-dates--selected'
		}
		if (date.format('YYYY-MM-DD') === today.format('YYYY-MM-DD')) {
			return 'calendar-dates--today'
		}
		if (date.format('YYYY-MM') === whichMonthDisplay.format('YYYY-MM')) {
			return 'calendar-dates--focus'
		} else {
			return 'calendar-dates--infocus'
		}
	}

	return (
		<div className='calendar'>
			<div className='calendar-month'>
				<button type='button' onClick={() => setWhichMonthDisplay(whichMonthDisplay.clone().subtract(1, 'month'))}>
					<IconArrowLeft />
				</button>
				<div>{whichMonthDisplay.format('MMMM YYYY')}</div>
				<button type='button' onClick={() => setWhichMonthDisplay(whichMonthDisplay.clone().add(1, 'month'))}>
					<IconArrowRight />
				</button>
			</div>

			<div className='calendar-weeks'>
				{weeksDisplay.map((week) => (
					<div>{week}</div>
				))}
			</div>

			<div className='calendar-dates'>
				{Array.apply(null, Array(35)).map((_, index) => {
					const date = whichMonthDisplay.clone().startOf('month').startOf('week').add(index, 'day')
					return (
						<button type='button' key={index}>
							<span
								className={determineDateClass(date)}
								onClick={() => {
									setSelectedDate(date.clone())
									props.onChange(date.format('YYYY-MM-DD'))
								}}>
								{date.format('D')}
							</span>
						</button>
					)
				})}
			</div>
		</div>
	)
}
