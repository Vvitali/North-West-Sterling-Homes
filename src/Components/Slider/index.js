import React from "react";
import Slider from 'react-slick';
import "./slider.css";
import Parallax from "../Parallax";
const SliderComponent = (props)=>{
	var settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false
	};
	return (
		<Slider {...settings}>
		{
			React.Children.map(props.children, (child, i) => {
				if(child != null){
					return child;
				}else{
					return 
				}
			}) 
		}
		
		</Slider>
		)
	}
	export default SliderComponent;