import React from "react";
import {Carousel} from 'react-responsive-carousel';
import "./slider.css";

const Slider = (props)=>{
	return (
		<Carousel showArrows={true} onChange={props.onChange} onClickItem={props.onClickItem} onClickThumb={props.onClickThumb}>
		<div>
		<img src="assets/1.jpeg" />
		<p className="legend">Legend 1</p>
		</div>
		<div>
		<img src="assets/2.jpeg" />
		<p className="legend">Legend 2</p>
		</div>
		<div>
		<img src="assets/3.jpeg" />
		<p className="legend">Legend 3</p>
		</div>
		<div>
		
		</div>
		</Carousel>

		)
}
export default Slider;