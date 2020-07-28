import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home'

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' component={Home} />
				</Switch>
			</Router>
		)
	}
}
