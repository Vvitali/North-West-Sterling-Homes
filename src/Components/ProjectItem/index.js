import React from "react";
import {isMobile} from 'react-device-detect';

const ProjectItem = (props)=>{
	return (
		<div style={{ width: "100%"}}>
		<img src={props.img} style={{width: isMobile? props.width: (props.width/3)}}/>
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
		)
}

export default ProjectItem;