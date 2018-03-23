import React from "react";
import Slider from 'react-slick';
import "./slider.css";
import Parallax from "../Parallax";
const SliderComponent = (props)=>{
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false
	};
	return (
		<Slider {...settings}>
		<div>
		<Parallax height={props.height} linkTo="./assets/images/masonry.jpg">
		<h1>Masonry</h1>
		</Parallax>
		</div>
		<div>
		<Parallax height={props.height} linkTo="./test/2.jpg">
		<h1>Main screen</h1>
		</Parallax>
		</div>
		<div>
		<Parallax height={props.height} linkTo="./test/3.jpg">
		<h1>Main screen</h1>
		</Parallax>
		</div>
		</Slider>
		)
}
export default SliderComponent;