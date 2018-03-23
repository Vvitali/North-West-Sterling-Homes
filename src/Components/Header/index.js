import React from 'react';
import "./style.css"; 
const Header = ()=>{
	return(<div>
		<a name="anchor"> </a>
		<nav className="navbar navbar-default menu">
		<div className="container-fluid"> 
		<div className="navbar-header">
		<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
		<span className="sr-only">Toggle navigation</span>
		<span className="icon-bar"></span>
		<span className="icon-bar"></span>
		<span className="icon-bar"></span>
		</button>
		<a className="navbar-brand" href="./"><h2>NV Sterling Homes</h2></a>
		</div>

		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<ul className="nav navbar-nav navbar-right">
		<li><a href="./portfolio"><h2>Projects</h2></a></li>
		<li><a href="./portfolio"><h2>Abouts us</h2></a></li>
		<li className="dropdown">
		<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><h2>Services</h2></a>
		<ul className="dropdown-menu">
		<li><a href="./portfolio#houses">Houses</a></li>
		<li role="separator" className="divider"></li>
		<li><a href="./portfolio#masonry">Masonry</a></li>
		<li><a href="./portfolio#painting">Painting</a></li>
		<li role="separator" className="divider"></li>
		<li><a href="./portfolio#bnkremodeling">Bathroom & Kitchen Remodeling</a></li>
		<li role="separator" className="divider"></li>
		<li><a href="./portfolio#porches">Screened Porches</a></li>
		</ul>
		</li>
		<li><a href="./contact"><h2>Contacts</h2></a></li>
		</ul>
		</div> 
		</div> 
		</nav>

		</div>);
}
export default Header;