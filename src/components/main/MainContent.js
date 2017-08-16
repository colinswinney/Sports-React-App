import React from 'react';
import '../../css/main/MainContent.css';
import TeamSingle from './TeamSingle';
import PlayerSingle from './PlayerSingle';
import { Route, Switch } from 'react-router-dom';

class MainContent extends React.Component {
	render(props) {
		return (
			<div className="cr-main">
				<Route render={ ({location}) => (
					<Switch key={location.key} location={location}>

						<Route exact path='/' {...props} render={props=> (
							<div>
								<h2>You are Home</h2>
						    </div>
						)}/>

						{this.props.teams.map((team, i) => (
							<Route exact path={`/${team.slug}`} key={i} render={props=> (
								<TeamSingle {...props} {...this.props} teamInfo={team} />
							)}/>
						))}
						{this.props.players.map((player, i) => (
							<Route exact path={`/${player.post_name}-id-${player.ID}`} key={i} render={props=> (
								<div><PlayerSingle {...props} {...this.props} player={player} /></div>
							)}/>
						))}

					</Switch>
				)} />
			</div>
		)
	}
}

export default MainContent;