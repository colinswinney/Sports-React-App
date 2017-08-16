import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import Loading from './Loading';
import ScrollToTop from './ScrollToTop';
import SideNav from './SideNav';
import MainHeader from './main/MainHeader';
import MainContent from './main/MainContent';
import MainFooter from './main/MainFooter';
import {
	BrowserRouter as Router,
  	Route,
  	Link
} from 'react-router-dom';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
		  teams: [],
		  players: [],
		  menuState: "isClosed",
		  allData: []
		};
		this.menuStateHandler = this.menuStateHandler.bind(this);
	}

	menuStateHandler() {
		var menuState = this.state.menuState;
		
	    if (menuState === "isClosed" ) {
	        // Add the class to open menu
	        this.setState({ menuState: "isOpen" });
			var m = document.getElementById("main-wrapper");
			m.className += "isOpen";
			document.getElementById("menu-button").innerHTML = "Close <i class='fa fa-times-circle-o'></i>";
	    }
	    else {
	        // Remove the class to open menu
	        this.setState({ menuState: "isClosed" });
	        document.getElementById("main-wrapper").className = document.getElementById("main-wrapper").className.replace(new RegExp('(?:^|\\s)isOpen(?:\\s|$)'), ' ');
	        document.getElementById("menu-button").innerHTML = "Menu <i class='fa fa-chevron-circle-left'></i>";
	    }
	}

	componentDidMount() {
		axios.get(this.props.dataURL + "/wp-json/baseballtweets/v1/get-everything")
		.then(res => {
			const allData = res.data;
			this.setState({ allData });
		});
	}
	render() {

		const allData = this.state.allData;

		// if state.teamData has mounted
	    if (Object.keys(allData).length > 0 ) {
			return (

				<Router>

					<ScrollToTop menuStateHandler={this.menuStateHandler} currentMenuState={this.state.menuState}>

						<Route render={ (props) => (

							<div className="cr-app">

									<div className="banner">
										<div className="brand">
											<Link to="/">Brand Name Here</Link>
										</div>
										
										<form className="search-form">
										  <input className="search-term" placeholder="Enter your search term ..." />
										  <input className="search-button" type="submit" />
										</form>
										
										<div id="menu-button" className="menu-button " onClick={this.menuStateHandler}>Menu <i className="fa fa-chevron-circle-left"></i></div>
									</div>
									<SideNav teams={allData.cr_teams} />

									<main className="wrapper " id="main-wrapper">
										<MainHeader teams={allData.cr_teams} />
										<MainContent teams={allData.cr_teams} players={allData.cr_players} {...this.props} />
										<MainFooter />
									</main>

							</div>

						)} />

					</ScrollToTop>
				
				</Router>
			);
	    }
	    // if state.teamData is still empty
	    else {
	      	return (
	        	<div className="loading">
	        		<Loading />
	        	</div>
	      	)
	    }
	}
}

export default App;