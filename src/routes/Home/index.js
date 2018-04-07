import React, { Component } from 'react';
import Parallax from "../../Components/Parallax";
import {isMobile} from 'react-device-detect';
import MapComponent from "../../Components/Map";
import Slider from "../../Components/Slider";
import "./styles.css"

class Home extends Component{
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
		this.setState({ width: window.innerWidth, height: window.innerHeight-60 });
	}

	render(){  
		return(

			<div className="BioStyle animated">
			<div className="row">
			<Slider height={this.state.height} width={this.state.width}>
			<div>
			<Parallax height={this.state.height} width={this.state.width} linkTo="./assets/images/masonry.jpg">
			<h1 className="projectInfo">Masonry</h1>
			</Parallax>
			</div>
			<div>
			<Parallax height={this.state.height} width={this.state.width} linkTo="./test/2.jpg">
			<h1>Main screen</h1>
			</Parallax>
			</div>
			<div>
			<Parallax height={this.state.height} width={this.state.width} linkTo="./test/3.jpg">
			<h1>Main screen</h1>
			</Parallax>
			</div>


			</Slider>
			</div>
			<div className="row info">
			<h2>North West Sterling Homes</h2>
			<p className="projectInfo">More than 20 years of experience, excelent quality, proved specialists, over than 100 residential houses built </p>
			</div>
			<div className="row">
			<Parallax height={isMobile? "350px": this.state.height} linkTo="./test/2.jpg">
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
			<div className="info"><a name="contacts"/>
			<MapComponent className="map" width={isMobile? this.state.width: this.state.width/2.5} height="100%"></MapComponent>
			<div className="contacts">
			<h2>Phone-number (clickable):<a className="btn pulse" href="tel:+15037400866">+1(503)-740-08-66</a></h2>
			<h2>Email (clickable):<a className="btn pulse" href="mailto: nwsterlinghomes@gmail.com">nwsterlinghomes@gmail.com</a></h2>
			</div>
			</div>
			</div> 
			)
	};
}
export default Home;