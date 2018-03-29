import React, {Component} from "react";
import Project from "../../Components/ProjectItem";
import {isMobile} from 'react-device-detect';

class Projects extends Component{
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
	<Project img="./projects/1.jpg" height={this.state.height} width={  this.state.width }>
		<h2>First project!</h2>
	</Project>
	<Project img="./projects/2.jpg" width={this.state.width}>
		<div><h2>Second project!</h2></div>
		
	</Project>
	<Project img="./projects/3.jpg" width={this.state.width}>
		<h2>Third project!</h2>
	</Project>
	<Project img="./projects/4.jpg" width={this.state.width}>
		<h2>Fourth project!</h2>
	</Project>
</div>)
}

}

export default Projects;