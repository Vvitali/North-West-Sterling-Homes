import React from "react";
import {isMobile} from 'react-device-detect';

const ProjectItem = (props)=>{
	return (
		<div style={{ width: "100%", marginBottom: "10px"}}>
		<img src={props.img} style={
			isMobile?{
				width:props.width
			}:{
				width:(props.width/3.5),
				display: "inline-block"
			}
		}/> 
		<div className="info" style={
			{
				height: isMobile? "250px": "auto",
				display: "inline-block", 
				width: "auto"
			}
		}>
		{
			React.Children.map(props.children, (child, i) => {
				if(child != null){
					return child;
				}else{
					return 
				}
			})
		}
		</div>
		</div>
		)
}

export default ProjectItem;