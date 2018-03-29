import React, {Component} from "react";
import Project from "../../Components/ProjectItem";

class Projects extends Component{
	render(){
		return(
			<div className="animated">
			<Project img="./projects/1.jpg">
			<h2>First project!</h2>
			</Project>
			<Project img="./projects/2.jpg">
			<h2>Second project!</h2>
			</Project>
			<Project img="./projects/3.jpg">
			<h2>Third project!</h2>
			</Project>
			<Project img="./projects/4.jpg">
			<h2>Fourth project!</h2>
			</Project>
			</div>)
	}
	
}

export default Projects;