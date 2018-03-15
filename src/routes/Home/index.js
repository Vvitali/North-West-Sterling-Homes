import React, { Component } from 'react';
import Parallax from "../../Components/Parallax";
class Home extends Component{
	render(){  
		return(
			<div className="BioStyle row text-left">

			<h1></h1>
			<Parallax linkTo="./test/1.jpg"></Parallax>
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