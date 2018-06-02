import React from "react";
import "../Home/styles.css";
const Contact = ()=>{
	return(<div className="animated info text">
		<div>
		<h1>North West Sterling Homes Inc.</h1>
		<p>North West Sterling Homes is a whole home building and remodeling company with more than 25 years of experience based in Portland, Oregon.
		We specialize in masonry, kitchen and bathroom remodels, outdoor living, whole house renovations and home additions.
		We service Portland and the surrounding areas, including Beaverton, Tigard and Gresham!
		</p>
		</div>
		<div className="contactData col info" style={{ }}>
		<h3>Company information</h3>
		<h4>Phone: 503-740-08-66</h4>
		<h4>Email: nwsterlinghomes@gmail.com</h4>
		<div style={{display:"inline-block"}}>
		<a className="btn" href="tel:+15037400866">Call us!</a>
		<a className="btn" href="mailto: nwsterlinghomes@gmail.com">Email us!</a>
		</div>
		<h4> <br/>
		Portland, OR 97266</h4>
		</div>
		</div>)
}

export default Contact;