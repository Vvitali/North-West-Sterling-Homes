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
					<h2 className="projectInfo">Masonry</h2>
				</Parallax>
			</div>
			<div>
				<Parallax height={this.state.height} width={this.state.width} linkTo="./test/2.jpg">
					<h2>Main screen</h2>
				</Parallax>
			</div>
			<div>
				<Parallax height={this.state.height} width={this.state.width} linkTo="./test/3.jpg">
					<h2>Main screen</h2>
				</Parallax>
			</div>
		</Slider>
	</div>

	<div className="row info text">
		<h1 className="">
			North West Sterling Homes is a whole home building and remodeling company based in Portland, Oregon.<br/>
			We specialize in masonry, kitchen and bathroom remodels, outdoor living, whole house renovations and home additions.<br/>
		We service Portland and the surrounding areas, including Beaverton, Tigard and Gresham!</h1>
	</div>

	<div className="row">
		<Parallax height={isMobile? "350px": this.state.height} linkTo="./test/2.jpg">
			<h2>Second main screen</h2>
		</Parallax>
	</div>

	<div className="row info text">
		<h2>What we do</h2>
		<div className="row">
			<div className="column">
				<h4>• Masonry</h4>
				<h4>• Custom home building</h4>
			</div>
			<div className="column">
				<h4>• Home additions</h4>
				<h4>• Home renovations & remodeling</h4>
				<h4>• Kitchen & Bathroom remodeling</h4>
			</div>
			<div className="column">

				<h4>• Sunroom and outdoor living</h4>
				<h4>• General Contracting</h4>
				<h4>• Cabinetry, trim & Millwork</h4>

			</div>
		</div>

	</div>
	<div className="row">
		<Parallax className="row" height={isMobile? "350px": "750px"} linkTo="./test/3.jpg">
			<h2>Third Main screen</h2>
		</Parallax>
	</div>
	<div className="info row map"><a name="contacts"/>
		<div className="">
			<MapComponent width={isMobile? this.state.width: this.state.width/2.5} height="300px"></MapComponent>
		</div>
		<div>
			<h2>Phone-number (clickable):<a  href="tel:+15037400866">+1(503)-740-08-66</a></h2>

			<h3>Email (clickable):</h3>
			<a href="mailto: nwsterlinghomes@gmail.com">nwsterlinghomes@gmail.com</a> 
		</div>
	</div>
</div> 
)
};
}
export default Home;