import React, {Component} from "react";
import Project from "../../Components/ProjectItem";
import {isMobile} from 'react-device-detect'; 

class Mason extends Component{
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
			<div className="animated ">
			<Project img="./masonry/1.jpg" height={this.state.height} width={  this.state.width }>
			<h2>First project!</h2>
			<p>Full service, based on custom project!</p>
			</Project>
			<Project img="./masonry/2.jpg" width={this.state.width}>
			<h2>Second project!</h2> 

			</Project>
			<Project img="./masonry/3.jpg" width={this.state.width}>
			<h2>Third project!</h2>
			</Project>
			<Project img="./masonry/4.jpg" width={this.state.width}>
			<h2>Fourth project!</h2>
			</Project>
			<Project img="./masonry/5.jpg" width={this.state.width}>
			<h2>Fifth project!</h2>
			</Project>
			<Project img="./masonry/6.jpg" width={this.state.width}>
			<h2>Sixth project!</h2>
			</Project>
			</div>)
		}

	}

	export default Mason;