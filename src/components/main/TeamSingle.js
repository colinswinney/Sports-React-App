import React from 'react';
import '../../css/main/TeamSingle.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import TeamTwitterFeed from './TeamTwitterFeed';

class TeamSingle extends React.Component {
  
    constructor(props) {
        super(props);

        this.state = {
            players: []
        };
    }

    componentDidMount(props) {
        axios.get(this.props.dataURL + '/wp-json/wp/v2/players/?filter[posts_per_page]=50&filter[teams]=' + this.props.teamInfo.slug)
            .then(res => {
                const players = res.data;
                this.setState({ players: players });
        });
    }

    componentDidUpdate() {
        window.twttr.widgets.load();
    }

    render(props) {
        return (
            <div>
                <h2>{this.props.teamInfo.name}</h2>
                <TeamTwitterFeed {...this.props} />
                <ul>
                    <li>Go to Player</li>
                    {this.state.players.map((player, i) => (
                        <li key={i}><NavLink activeClassName="active" exact to={`/${player.slug}-id-${player.id}`}>{player.title.rendered}</NavLink></li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TeamSingle;