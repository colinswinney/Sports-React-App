import React from 'react';
import '../css/Main.css';
import TeamSingle from './TeamSingle';
import PlayerSingle from './PlayerSingle';
import { Route, Switch } from 'react-router-dom';

class Main extends React.Component {
	render(props) {
		return (
			<main>
				<Route render={ ({location}) => (
					<Switch key={location.key} location={location}>

						<Route exact path='/' {...props} render={props=> (
							<h2>You are Home</h2>
						)}/>

						{this.props.teams.map((team, i) => (
							<Route exact path={`/${team.slug}`} key={i} render={props=> (
								<TeamSingle {...props} {...this.props} teamInfo={team} />
							)}/>
						))}
						{this.props.players.map((player, i) => (
							<Route exact path={`/${player.slug}-id-${player.id}`} key={i} render={props=> (
								<PlayerSingle {...props} {...this.props} playerID={player.id} />
							)}/>
						))}

					</Switch>
				)} />
			</main>
		)
	}
}

export default Main;