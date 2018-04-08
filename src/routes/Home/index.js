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
sliderHeight=0;
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
{
	this.sliderHeight = isMobile? this.state.height/2.15 : this.state.height 
}
return(

<div className="BioStyle animated">
	<div className="row">

		<Slider height={ this.sliderHeight } width={this.state.width}>
			<div>
				<Parallax height={ this.sliderHeight} width={this.state.width} linkTo="./assets/images/masonry.jpg">
					<h2 className="projectInfo">Masonry</h2>
				</Parallax>
			</div>
			<div>
				<Parallax height={ this.sliderHeight} width={this.state.width} linkTo="./test/2.jpg">
					<h2>Main screen</h2>
				</Parallax>
			</div>
			<div>
				<Parallax height={ this.sliderHeight} width={this.state.width} linkTo="./test/3.jpg">
					<h2>Main screen</h2>
				</Parallax>
			</div>
		</Slider>
	</div>

	<div className="row info text">
		<h1 className="">
			North West Sterling Homes is a whole home building and remodeling company with more than 25 years of experience based in Portland, Oregon.<br/>
			We specialize in masonry, kitchen and bathroom remodels, outdoor living, whole house renovations and home additions.<br/>
		We service Portland and the surrounding areas, including Beaverton, Tigard and Gresham!</h1>
	</div>

	<div className="row">
		<Parallax height={isMobile? "350px": this.state.height} linkTo="./test/2.jpg">
			<h2>Second main screen</h2>
		</Parallax>
	</div>

	<div className="row info text">
		
		<h3>What we do</h3>
		<div className="row">
			<div className="column">
				<h4>✔ General Contracting</h4>
				<h4>✔ Custom home building</h4>
				<h4>✔ Home additions</h4>
			</div>
			<div className="column">
				<h4>✔ Masonry</h4>
				<h4>✔ Home renovations & remodeling</h4>
				<h4>✔ Kitchen & Bathroom remodeling</h4>
			</div>
			<div className="column">

				<h4>✔ Sunroom and outdoor living</h4>

				<h4>✔ Cabinetry, trim & Millwork</h4>

			</div>
		</div>
		<a className="btn" href="#">Examples!</a>

	</div>
	<div className="row  ">
		<Parallax className="row" height={isMobile? "350px": "750px"} linkTo="./test/3.jpg">
			<h2>Third Main screen</h2>
		</Parallax>
	</div>
	<div className="info row map"><a name="contacts"/>
		
		<MapComponent width={isMobile? this.state.width: this.state.width/2.5} height={isMobile? "350px": "500px"}></MapComponent>

		<div className="contactData col">
			<h3>Company information</h3>
			<h4>Phone (clickable): 503-740-08-66</h4>
			<h4>Email: nwsterlinghomes@gmail.com</h4>
			<div style={{display:"inline-block"}}>
				<a className="btn" href="tel:+15037400866">Call us!</a>
				<a className="btn" href="mailto: nwsterlinghomes@gmail.com">Email us!</a>
			</div>
			<h4>1421 Orchard Lake Drive - Suite E<br/>
			Charlotte, NC 28270</h4>
		</div>
	</div>
</div> 
)
};
}
export default Home;