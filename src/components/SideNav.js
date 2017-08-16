import React from 'react';
import '../css/SideNav.css';
import { NavLink } from 'react-router-dom';

class SideNav extends React.Component {
	render(props) {
		return (
			<aside className="cr-sidenav">
				<nav className="nav">
				<ul>
					<div className="title">
				      Main Menu
				    </div>
					<li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
					<div className="title">
				      Teams
				    </div>
					{this.props.teams.map((team, i) => (
			        	<li key={i}><NavLink activeClassName="active" exact to={`/${team.slug}`}>{team.name}</NavLink></li>
			        ))}
				</ul>
			</nav>
			</aside>    
		)
	}
}

export default SideNav;