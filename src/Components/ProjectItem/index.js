import React from "react";

const ProjectItem = (props)=>{
	return (
		<div style={{ height: props.height, width: "100%" }}>
		<img src={props.img} style={{height: props.height/3}}/>
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