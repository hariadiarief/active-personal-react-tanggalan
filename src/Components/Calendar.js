import React, { Component } from 'react'
import moment from 'moment'

import { ReactComponent as IconArrowLeft } from '../Assets/Icons/keyboard_arrow_left.svg'
import { ReactComponent as IconArrowRight } from '../Assets/Icons/keyboard_arrow_right.svg'

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
			// if (date.format('YYYY-MM-DD') === today.format('YYYY-MM-DD')) {
			// 	return 'calendar-dates--today-selected'
			// }
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
		const { currentDate, today, selectionDate } = this.state
		const { onChange = () => null } = this.props

		return (
			<div className='calendar'>
				<div className='calendar-month'>
					<button type='button' onClick={() => this.setState({ currentDate: currentDate.subtract(1, 'month') })}>
						<IconArrowLeft />
					</button>
					<div>{currentDate.format('MMMM YYYY')}</div>
					<button type='button' onClick={() => this.setState({ currentDate: currentDate.add(1, 'month') })}>
						<IconArrowRight />
					</button>
				</div>

				<div className='calendar-dates'>
					{Array.apply(null, Array(35)).map((_, index) => {
						const date = currentDate.clone().startOf('month').startOf('week').add(index, 'day')
						return (
							<button type='button' key={index}>
								<span
									className={this.determineDateClass(date)}
									onClick={() =>
										this.setState({ selectionDate: date.clone() }, () => onChange(date.format('YYYY-MM-DD')))
									}>
									{date.format('D')}
								</span>
							</button>
						)
					})}
				</div>
			</div>
		)
	}
}
