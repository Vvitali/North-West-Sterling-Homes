import React from "react";
import {isMobile} from 'react-device-detect';

const ProjectItem = (props)=>{
	return (
		<div style={{ width: "100%"}}>
		<img src={props.img} style={
			isMobile?{
				width:props.width,
				float:"none"
			}:{
				width:(props.width/3),
				float:"left"
			}
		}/> 
		<div className="info" style={
			{
				height: isMobile? "250px": (props.width/3)
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