import React, { Component } from 'react';
import "./effects.css";
import './reset.css';
import './App.css';
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div><h2>Loading!</h2></div>;

class App extends Component{
	Home = Loadable({
		loader: () => import('./routes/Home'),
		loading: Loading
	});
	Homes = Loadable({
		loader: () => import('./routes/Homes'),
		loading: Loading
	});
	render(){
		return(<div>
			<Header/>
			<div className="container">
			<Router basename="/North-West-Sterling-Homes">
			<Switch>
			<Route exact path="/" component={ this.Home}/>
			<Route path="/homes" component={  this.Homes}/>
			</Switch>
			</Router>
			</div> 
			</div>);
	}
}

export default App;