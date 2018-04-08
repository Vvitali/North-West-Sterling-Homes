import React, {Component} from "react";
import Project from "../../Components/ProjectItem";
import {isMobile} from 'react-device-detect';
import Lightbox from 'react-image-lightbox';
import "./projects.css";

const homeImages = [
'/projects/1.jpg',
'/projects/2.jpg',
'/projects/3.jpg',
'/projects/4.jpg',
'/projects/5.jpg',
'/projects/6.jpg',
];
const masonryImages = [
'/masonry/1.jpg',
'/masonry/2.jpg',
'/masonry/3.jpg',
'/masonry/4.jpg',
'/masonry/5.jpg',
'/masonry/6.jpg',
] 

const images = masonryImages;
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
			<div >
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
			<img src="/projects/1.jpg" key="1" onClick={this.clickHandler}/> 
			<p>Homes</p>
			</div>
			<div>
			<img src="/masonry/6.jpg" key="2" onClick={this.clickHandler}/> 
			<p>Masonry</p> 
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