import React, {Component} from "react";
import Project from "../../Components/ProjectItem";
import {isMobile} from 'react-device-detect';
import Lightbox from 'react-image-lightbox';
import "./projects.css";

const homeImages = [
'/assets/images/projects/1.jpg',
'/assets/images/projects/2.jpg',
'/assets/images/projects/3.jpg',
'/assets/images/projects/4.jpg',
'/assets/images/projects/5.jpg',
'/assets/images/projects/6.jpg',
'/assets/images/projects/7.jpg',
'/assets/images/projects/8.jpg',
'/assets/images/projects/9.jpg',
'/assets/images/projects/10.jpg',
'/assets/images/projects/11.jpg'
];
const masonryImages = [
'/assets/images/masonry/1.jpg',
'/assets/images/masonry/2.jpg',
'/assets/images/masonry/3.jpg',
'/assets/images/masonry/4.jpg',
'/assets/images/masonry/5.jpg',
'/assets/images/masonry/6.jpg'
] 
const bathroomImages = [
'/assets/images/bathroom/1.jpg',
'/assets/images/bathroom/2.jpg',
'/assets/images/bathroom/3.jpg',
'/assets/images/bathroom/4.jpg',
'/assets/images/bathroom/5.jpg',
'/assets/images/bathroom/6.jpg'
]

const outdoorImages = [
'/assets/images/outdoor/1.jpg',
'/assets/images/outdoor/2.jpg',
'/assets/images/outdoor/3.jpg',
'/assets/images/outdoor/4.jpg'
]

const trimImages = [
'/assets/images/trim/1.jpg',
'/assets/images/trim/2.jpg',
'/assets/images/trim/3.jpg'
]

let images = masonryImages;
class Homes extends Component{
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
			<div className="animated">
			<div>
			<LightboxExample className="gallery-container"></LightboxExample>
			</div>
			</div>)
	}

}

class LightboxExample extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photoIndex: 0,
			isOpen: false,
		};
	}

	clickHandler = () => this.setState({ isOpen: true })

	render() {
		const { photoIndex, isOpen } = this.state;

		return (
			<div className="gallery-container"> 
			
			<div>
			<img src="/assets/images/projects/1.jpg" key="1" onClick={
				()=>{ 
					images = homeImages;
					this.clickHandler();
				}
			}/> 
			<p>Homes</p>
			</div>
			<div>
			<img src="/assets/images/masonry/6.jpg" key="2" onClick={
				()=>{ 
					images = masonryImages;
					this.clickHandler();
				}
			}/> 
			<p>Masonry</p> 
			</div>
			<div>
			<img src="/assets/images/bathroom/1.jpg" key="3" onClick={
				()=>{ 
					images = bathroomImages;
					this.clickHandler();
				}
			}/> 
			<p>Kitchen & Bathroom remodeling</p> 
			</div>
			<div>
			<img src="/assets/images/renovation.jpg" key="4" onClick={this.clickHandler}/> 
			<p>Home renovations & remodeling</p> 
			</div>
			<div>
			<img src="/assets/images/outdoor/1.jpg" key="4" onClick={
				()=>{ 
					images = outdoorImages;
					this.clickHandler();
				}
			}/> 
			<p>Sunroom and outdoor living</p> 
			</div>
			<div>
			<img src="/assets/images/trim/1.jpg" key="4" onClick={
				()=>{ 
					images = trimImages;
					this.clickHandler();
				}
			}/> 	
			<p>Cabinetry, trim & Millwork</p> 
			</div>

			{isOpen && (
				<Lightbox
				mainSrc={images[photoIndex]}
				nextSrc={images[(photoIndex + 1) % images.length]}
				prevSrc={images[(photoIndex + images.length - 1) % images.length]}
				onCloseRequest={() => this.setState({ isOpen: false })}
				onMovePrevRequest={() =>
					this.setState({
						photoIndex: (photoIndex + images.length - 1) % images.length,
					})
				}
				onMoveNextRequest={() =>
					this.setState({
						photoIndex: (photoIndex + 1) % images.length,
					})
				}
				/>
				)}
			</div>
			);
	}
}

export default Homes;