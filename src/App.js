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

const Contact = Loadable({
	loader: ()=>import('./routes/Contact'),
	loading: Loading
});

const Projects = Loadable({
	loader: () => import('./routes/Projects'),
	loading: Loading
});

class App extends Component{
	render(){
		return(<div>
			<Header/>
			<Router basename="/North-West-Sterling-Homes">
			<Switch>
			<Route exact path="/" component={ Home}/>
			<Route path="/contact" component={ Contact}/>
			<Route path="/portfolio" component={ Projects}/>
			</Switch>
			</Router>
			</div>);
	}
}

export default App;