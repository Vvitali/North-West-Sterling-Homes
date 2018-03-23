import React from 'react'; 
import GoogleMapReact from 'google-map-react';

class MapComponent extends React.Component{
	static defaultProps = {
		zoom: 10,
		center: { 
			lat: 45.5, 
			lng: -122.7
		}
	}
	componentStyle={ 
		width: this.props.width, 
		height: this.props.height,
		marging: "none",
		position: "relative",
		float: "left"
	};

	render(){
		return (
			<GoogleMapReact style={this.componentStyle}  defaultCenter={ this.props.center } defaultZoom={ this.props.zoom } bootstrapURLKeys={{
				key: "AIzaSyDyePBmEMRe0sGjQBRvDq8TYEcXkDfp_0I"
			}}>

			</GoogleMapReact>
			);
	}

}
export default MapComponent;