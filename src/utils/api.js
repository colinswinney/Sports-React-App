import React from 'react';
import axios from 'axios';

class FetchPlayers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get('http://local.sports.dev/wp-json/wp/v2/players')
      .then(res => {
        const players = res.data;
        this.setState({ players });
      });
  }

  render() {
    return (
      <div>
      	<ul>
	        {console.log(this.state.players)}
	        {this.state.players.map((player, i) => (
	        	<li key={i}>{player.title.rendered}</li>
	        ))}
        </ul>
      </div>
    );
  }
}

export default FetchPlayers;