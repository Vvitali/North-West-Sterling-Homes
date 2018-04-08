import React, {Component} from "react";
import Project from "../../Components/ProjectItem";
import {isMobile} from 'react-device-detect';
import "./projects.css";	

class Homes extends Component{
	constructor(props) {
		super(props);
		this.state = { width: 0, height: 0 };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() { 
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render(){
		return(
			<div className="animated">
			<div className="gallery-container">
			<img src="/projects/1.jpg"/>
			<img src="/projects/2.jpg"/>
			<img src="/projects/3.jpg"/>
			<img src="/projects/4.jpg"/>
			<img src="/projects/5.jpg"/>
			<img src="/projects/6.jpg"/>
			</div>

			</div>)
	}

}

export default Homes;