import React, { Component } from 'react';
import Parallax from "../../Components/Parallax";
import {isMobile} from 'react-device-detect';
import MapComponent from "../../Components/Map";
import Slider from "../../Components/Slider";
import "./styles.css"

class Home extends Component{
render(){  
return(

<div className="BioStyle animated">
	<div className="row">
		<Slider></Slider>
	</div>
	<div className="row info">

	</div>
	<div className="row">
		<Parallax height={isMobile? "350px": "750px"} linkTo="./test/2.jpg">
			<h1>Second main screen</h1>
		</Parallax>
	</div>

	<div className="row info">

	</div>
	<div className="row">
		<Parallax className="row" height={isMobile? "350px": "750px"} linkTo="./test/3.jpg">
			<h1>Third Main screen</h1>
		</Parallax>
	</div>
	<div className="row info">
		<div className="col-xs-12 col-sm-12 col-md-4 map" >
			<MapComponent width="100%" height="100%">

			</MapComponent>
		</div>

		<div className="col-xs-12 col-sm-12 col-md-4 contacts">
			<h1>Phone-number (clickable):</h1>
			<p>
				<a className="btn pulse" href="tel:+15037400866">+1(503)-740-08-66</a>
			</p>
			<h1>Email (clickable):</h1>
			<a className="btn pulse" href="mailto: nwsterlinghomes@gmail.com">nwsterlinghomes@gmail.com</a>
		</div>
	</div>
	<div className="row">
		<div className="col-xs-12">
			<Parallax height={isMobile? "350px": "750px"}  linkTo="./test/4.jpg">
				<h1>Fourth Main screen</h1>
			</Parallax>
		</div>

	</div>
	<div className="row info">Contacts
	</div>
</div> 
)
};
}
export default Home;