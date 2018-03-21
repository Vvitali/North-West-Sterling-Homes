import React from 'react'; 
import GoogleMapReact from 'google-map-react';
import MapObject from "./object.js"
const places = [
{
	name: "Portland, OR",
	position: { lat: 45.570655, lng: -122.799300 },
	title: "I lived here for 2 years",
	pic: "http://greatruns.com/wp-content/uploads/2016/11/Mt-Hood-and-Portland-waterfront-Agape-Voyage-700x447.jpeg"
}
];

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
		let renderedPlaces = [];
		for(let place of places){
			renderedPlaces.push(<MapObject key={place.name} name={place.name} lat={ place.position.lat } lng={place.position.lng } pic={ place.pic} text={ place.title }/>); 
		};
		return (
			<GoogleMapReact style={this.componentStyle}  defaultCenter={ this.props.center } defaultZoom={ this.props.zoom } bootstrapURLKeys={{
				key: "AIzaSyDyePBmEMRe0sGjQBRvDq8TYEcXkDfp_0I"
			}}>
			{
				renderedPlaces
			}
			</GoogleMapReact>
			);
	}

}
export default MapComponent;