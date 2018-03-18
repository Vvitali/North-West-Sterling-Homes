import React, { Component } from 'react';
import Parallax from "../../Components/Parallax";
class Home extends Component{
	render(){  
		return(

			<div className="BioStyle ">
			<Parallax linkTo="./test/1.jpg">
			<h1>Main screen</h1></Parallax>
			<div className="info"></div>
			<Parallax linkTo="./test/2.jpg"></Parallax>
			<div className="info"></div>
			<Parallax linkTo="./test/3.jpg"></Parallax>
			<div className="info"></div>
			<Parallax linkTo="./test/4.jpg"></Parallax>
			<div className="info">Contacts</div>
			</div> 
			)
	};
}
export default Home;