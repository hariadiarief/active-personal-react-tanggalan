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
			whichMonthDisplay: moment(this.props.selectedDate),
			selectedDate: moment(this.props.selectedDate) || moment(),
		}
	}

	determineDateClass(date) {
		const { whichMonthDisplay, today, selectedDate } = this.state
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

	render() {
		const { whichMonthDisplay, today, selectedDate, weeksDisplay } = this.state
		const { onChange = () => null } = this.props

		return (
			<div className='calendar'>
				<div className='calendar-month'>
					<button
						type='button'
						onClick={() => this.setState({ whichMonthDisplay: whichMonthDisplay.subtract(1, 'month') })}>
						<IconArrowLeft />
					</button>
					<div>{whichMonthDisplay.format('MMMM YYYY')}</div>
					<button
						type='button'
						onClick={() => this.setState({ whichMonthDisplay: whichMonthDisplay.add(1, 'month') })}>
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
									className={this.determineDateClass(date)}
									onClick={() =>
										this.setState({ selectedDate: date.clone() }, () => onChange(date.format('YYYY-MM-DD')))
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
