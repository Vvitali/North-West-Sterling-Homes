import React, { Component } from 'react';
import Parallax from "../../Components/Parallax";

import MapComponent from "../../Components/Map";
import "./styles.css"
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
					<MapComponent width="70%" height="100%"/>
					<div className="contacts">

						<h1>Phone-number (clickable):</h1>
						<p ><a className="btn pulse" href="tel:+15037400866">+1(503)-740-08-66</a></p>

						<h1>Email (clickable):</h1>
						<a className="btn pulse" href="mailto: nwsterlinghomes@gmail.com">nwsterlinghomes@gmail.com</a>
					</div>
				</div>
				<Parallax linkTo="./test/4.jpg">
					<h1>Fourth Main screen</h1></Parallax>
					<div className="info">Contacts</div>
				</div> 
				)
			};
		}
		export default Home;