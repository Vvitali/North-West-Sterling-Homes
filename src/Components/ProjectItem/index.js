import React from "react";
import {isMobile} from 'react-device-detect';

const ProjectItem = (props)=>{
	return (
		<div style={{ width: "100%"}}>
		<div className="">
		<img src={props.img} style={{display: "inline", width: isMobile? props.width: (props.width/3)}}/>
		</div>
		
		<div style={{display: "inline" }}>
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