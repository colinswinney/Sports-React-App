import React from 'react';
import '../css/TeamNav.css';
import { NavLink } from 'react-router-dom';

class TeamNav extends React.Component {

	render(props) {
		return (
			<nav className="team-nav">
				<ul>
					<li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
					{this.props.teams.map((team, i) => (
			        	<li key={i}><NavLink activeClassName="active" exact to={`/${team.slug}`}>{team.name}</NavLink></li>
			        ))}
				</ul>
			</nav>
		)
	}
}

export default TeamNav;