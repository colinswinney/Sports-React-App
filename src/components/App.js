import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import TeamNav from './TeamNav';
import TeamSingle from './TeamSingle';
import {
	BrowserRouter as Router,
  	Route,
  	Switch
} from 'react-router-dom';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
		  teams: []
		};
	}

	componentDidMount() {
		axios.get('http://local.sports.dev/wp-json/wp/v2/teams/?per_page=40')
		  .then(res => {
		    const teams = res.data;
		    this.setState({ teams });
		  });
	}

	render(props) {
		return (
			<Router>
				<Route render={ () => (
					<div className="app">
						<Switch>
							
							<Route path="/" exact render={ () => (
								<div>
									<TeamNav teams={this.state.teams} />
									<h2>You are Home</h2>
								</div>
							)} />
							{this.state.teams.map((team, i) => (
								<Route path={`/${team.slug}`} exact key={i} render={() => (
									<div>
									
										<TeamNav teams={this.state.teams} />
										<p>{team.name}</p>
										<TeamSingle teamInfo={team} />
									</div>
								)} />
							))}

						</Switch>
					</div>
				)} />
			</Router>
		);
	}
}

export default App;