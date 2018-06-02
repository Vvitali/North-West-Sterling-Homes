import React from 'react';
import "./style.css"; 
import {isMobile} from 'react-device-detect';
import {Link} from 'react-router-dom';

const Header = ()=>{
	return(<div>
		<a name="anchor"> </a>
		<nav className="navbar navbar-default menu navbar-fixed-top">
		<div className="container-fluid"> 
		<div className="navbar-header">
		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		<span className="sr-only">Toggle navigation</span>
		<span className="icon-bar"></span>
		<span className="icon-bar"></span>
		<span className="icon-bar"></span>
		</button>
		<a className="navbar-brand" href="./"><h2><b>NW STERLING HOMES</b></h2></a>

		</div>
		{isMobile? 
			<div className="mobileButtons flex-grid">
			<a className="col" href="tel:+15037400866"><h2>Call us!</h2></a>|
			<a className="col" href="mailto: nwsterlinghomes@gmail.com"><h2>E-mail</h2></a>|
			<a className="col" href="https://www.google.com/maps/place/Unnamed+Road,+Portland,+OR+97222/@45.4477911,-122.5814122,635m/data=!3m2!1e3!4b1!4m5!3m4!1s0x54957563c41c00a1:0x7297ff632c4e7bd4!8m2!3d45.4477874!4d-122.5792235?hl=en"><h2>Navigation</h2></a>
			</div>
			: ""
		}
		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

		<ul className="nav navbar-nav navbar-right right">
		<li><Link to="./Homes"><h2>SERVICES</h2></Link></li>
		<li className="dropdown">
		
		</li>
		<li><Link to="./aboutus"><h2>ABOUT US</h2></Link></li>

		<li><Link to="./#contacts"><h2>CONTACTS</h2></Link></li>
		</ul>
		</div> 
		</div> 
		</nav>

		</div>);
}
export default Header;