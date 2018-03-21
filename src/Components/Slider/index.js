import React from "react";
import Slider from 'react-slick';
import "./slider.css";
import Parallax from "../Parallax"; 
import {isMobile} from 'react-device-detect';
const SliderComponent = (props)=>{
var settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000
};
return (
<Slider {...settings}>
	<div>
		<Parallax height={isMobile? "350px": "750px"} linkTo="./test/1.jpg">
			<h1>Main screen</h1>
		</Parallax>
	</div>
	<div>
		<Parallax height={isMobile? "350px": "750px"} linkTo="./test/2.jpg">
			<h1>Main screen</h1>
		</Parallax>
	</div>
	<div>
		<Parallax height={isMobile? "350px": "750px"} linkTo="./test/3.jpg">
			<h1>Main screen</h1>
		</Parallax>
	</div>
</Slider>
)
}
export default SliderComponent;