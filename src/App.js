import React, { Component } from 'react';
import "./effects.css";
import './reset.css';
import './App.css';
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading!</div>;
const Home = Loadable({
	loader: () => import('./routes/Home'),
	loading: Loading
});
class App extends Component{
	render(){
		return(<div>
			<Header/>
			<Router basename="/Personal-web-site">
			<Switch>
			<Route exact path="/" component={this.Home}/>
			<Route path="/contact" component={this.Contact}/>
			<Route path="/portfolio" component={this.Portfolio}/>
			</Switch>
			</Router>
			</div>);
	}
}

export default App;