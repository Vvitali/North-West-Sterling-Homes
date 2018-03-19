import React, { Component } from 'react';
import Parallax from "../../Components/Parallax";

import MapComponent from "../../Components/Map";
class Home extends Component{
	render(){  
		return(

			<div className="BioStyle ">
			<Parallax linkTo="./test/1.jpg">
			<h1>Main screen</h1></Parallax>
			<div className="info"></div>
			<Parallax linkTo="./test/2.jpg">
			<h1>Second main screen</h1></Parallax>
			<div className="info"></div>
			<Parallax linkTo="./test/3.jpg">
			<h1>Third Main screen</h1></Parallax>
			<div className="info">
			<MapComponent width="70%" height="100%"/></div>
			<Parallax linkTo="./test/4.jpg">
			<h1>Fourth Main screen</h1></Parallax>
			<div className="info">Contacts</div>
			</div> 
			)
	};
}
export default Home;