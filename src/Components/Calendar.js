import React, { Component } from 'react'
import moment from 'moment'

export default class Calendar extends Component {
	constructor(props) {
		super(props)
		this.state = {
			weeksDisplay: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fa', 'Sa'],
			today: moment(),
			currentDate: moment(),
			selectionDate: null,
		}
	}

	determineDateClass(date) {
		const { currentDate, today, selectionDate } = this.state
		const { defaultDate = null } = this.props
		if (
			(selectionDate && date.format('YYYY-MM-DD') === selectionDate.format('YYYY-MM-DD')) ||
			defaultDate === date.format('YYYY-MM-DD')
		) {
			return 'calendar-dates--selected'
		}
		if (date.format('YYYY-MM-DD') === today.format('YYYY-MM-DD')) {
			return 'calendar-dates--today'
		}
		if (date.format('YYYY-MM') === currentDate.format('YYYY-MM')) {
			return 'calendar-dates--focus'
		} else {
			return 'calendar-dates--infocus'
		}
	}

	render() {
		const { currentDate, today } = this.state
		const { onChange = () => null } = this.props

		return (
			<div className='calendar'>
				<div className='calendar-dates'>
					{Array.apply(null, Array(35)).map((_, index) => {
						const date = currentDate.clone().startOf('month').startOf('week').add(index, 'day')
						return (
							<div
								key={index}
								className={this.determineDateClass(date)}
								onClick={() =>
									this.setState({ selectionDate: date.clone() }, () => onChange(date.format('YYYY-MM-DD')))
								}>
								{date.format('D')}
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}
