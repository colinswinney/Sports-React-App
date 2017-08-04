import React from 'react';
import '../css/Header.css';
import TeamNav from './TeamNav';

class Header extends React.Component {
	render(props) {
		return (
			<header>
				<TeamNav teams={this.props.teams} />
			</header>
		)
	}
}

export default Header;