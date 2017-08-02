import React from 'react';
import axios from 'axios';

class TeamSingle extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
            players: []
        };
    }

    componentDidMount(props) {
        var slug = this.props.teamInfo.slug;
        axios.get('http://local.sports.dev/wp-json/wp/v2/players/?filter[teams]=' + slug)
            .then(res => {
                const players = res.data;
                this.setState({ players });
          });
    }

    render(props) {
        return (
              <div>
              	<ul>
                    {this.state.players.map((player, i) => (
                      	<li key={i}>
                            
                            <h2>{player.title.rendered}</h2>

                            <a className="twitter-timeline" data-theme="dark" href={`https://twitter.com/${player.acf_fields.twitter_user_name}`}>Tweets by {player.title.rendered}</a> <script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TeamSingle;