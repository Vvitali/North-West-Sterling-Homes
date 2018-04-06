import React from 'react';
import "./style.css"; 
import {isMobile} from 'react-device-detect';
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
		<a className="navbar-brand" href="./"><h2><b>NV STERLING HOMES</b></h2></a>
		
		</div>
		{isMobile? 
			<div className="mobileButtons flex-grid">
			<a className="col" href="tel:+15037400866"><h3>Call us!</h3></a>|
			<a className="col" href="mailto: nwsterlinghomes@gmail.com"><h3>E-mail</h3></a>|
			<a className="col" href="https://www.google.com/maps/place/Unnamed+Road,+Portland,+OR+97222/@45.4477911,-122.5814122,635m/data=!3m2!1e3!4b1!4m5!3m4!1s0x54957563c41c00a1:0x7297ff632c4e7bd4!8m2!3d45.4477874!4d-122.5792235?hl=en"><h3>Navigation</h3></a>
			</div>
			: ""
		}
		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

		<ul className="nav navbar-nav navbar-right right">
		<li><a href="./Homes"><h2>PROJECTS</h2></a></li>
		<li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><h2>SERVICES</h2></a>
		<ul className="dropdown-menu">
		<li><a href="./Homes">HOUSES</a></li>
		<li role="separator" className="divider"></li>
		<li><a href="./portfolio#masonry">Masonry</a></li>
		<li><a href="./portfolio#painting">Painting</a></li>
		<li role="separator" className="divider"></li>
		<li><a href="./portfolio#bnkremodeling">Bathroom & Kitchen Remodeling</a></li>
		<li role="separator" className="divider"></li>
		<li><a href="./portfolio#porches">Screened Porches</a></li>
		</ul>
		</li>
		<li><a href="./portfolio"><h2>ABOUT US</h2></a></li>

		<li><a href="/#contacts"><h2>CONTACTS</h2></a></li>
		</ul>
		</div> 
		</div> 
		</nav>

		</div>);
	}
	export default Header;