import React from 'react';

class PlayerTwitterFeed extends React.Component {
    render(props) {
        return (
            <a className="twitter-timeline" data-chrome="noheader" href={`https://twitter.com/${this.props.playerInfo.acf_fields.twitter_user_name}`}>Tweets from {this.props.playerInfo.slug}</a>
        )
    }
}

export default PlayerTwitterFeed;