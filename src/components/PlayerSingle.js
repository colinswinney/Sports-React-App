import React from 'react';
import axios from 'axios';
import PlayerTwitterFeed from './PlayerTwitterFeed';

class PlayerSingle extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			player: []
		};
	}

	componentDidMount(props) {
		axios.get(this.props.dataURL + '/wp-json/wp/v2/players/' + this.props.playerID)
		.then(res => {
			const player = res.data;
			this.setState({ player: player });
		});
	}

	componentDidUpdate() {
        window.twttr.widgets.load();
    }

	render(props) {
		const playerData = this.state.player;

	    if (Object.keys(playerData).length > 0 && playerData.constructor === Object){ //if the object is not empty
	      return (
	        <div>
	          {playerData.title.rendered}
	          <PlayerTwitterFeed playerInfo={playerData} />
	        </div>
	      );
	    } else {
	      return (
	        <div></div>
	      )
	    }
	}
}

export default PlayerSingle;