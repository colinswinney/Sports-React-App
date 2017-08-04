import React from 'react';

class TeamTwitterFeed extends React.Component {
    render(props) {
        return (
            <a className="twitter-timeline" data-chrome="noheader" href={`https://twitter.com/ColinJSwinney/lists/${this.props.teamInfo.slug}`}>Tweets from {this.props.teamInfo.slug}</a>
        )
    }
}

export default TeamTwitterFeed;