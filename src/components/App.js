import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {
	BrowserRouter as Router,
  	Route
} from 'react-router-dom';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
		  teams: [],
		  players: []
		};
	}

	componentDidMount() {
		axios.get(this.props.dataURL + '/wp-json/wp/v2/teams/?per_page=40')
		.then(res => {
			const teams = res.data;
			this.setState({ teams });
		});
		axios.get(this.props.dataURL + '/wp-json/players-cpt/v1/get-all-players')
		.then(res => {
			const players = res.data;
			this.setState({ players });
		});
	}

	render(props) {
		return (
			<Router>
				<Route render={ () => (
					<div className="app">
						<Header teams={this.state.teams} />

						<Main teams={this.state.teams} players={this.state.players} {...this.props} />

						<Footer />
					</div>
				)} />
			</Router>
		);
	}
}

export default App;