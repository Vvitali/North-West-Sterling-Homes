import React, { Component } from 'react';
import "./effects.css";
import './reset.css';
import './App.css';
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import {isMobile} from "react-device-detect";

const Loading = () => <div><h2>Loading!</h2></div>;

class App extends Component{
	Home = Loadable({
		loader: () => import('./routes/Home'),
		loading: Loading
	});
	Masonry = Loadable({
		loader: () => import('./routes/Masonry'),
		loading: Loading
	});
	Homes = Loadable({
		loader: () => import('./routes/Homes'),
		loading: Loading
	});
	
	render(){
		return(<div>
			
			<div className="container" style={
				isMobile?{
					paddingTop: "88px" 
				}:{
					paddingTop: "62px"
				}
			}>
			<Router basename="/North-West-Sterling-Homes">
			<div>
			<Header/>
			<Switch>
			<Route exact path="/" component={ this.Home}/>			
			<Route path="/msnry" component={ this.Masonry }/>
			<Route path="/homes" component={  this.Homes}/>

			</Switch>
			</div>
			</Router>
			</div> 
			</div>);
	}
}

export default App;